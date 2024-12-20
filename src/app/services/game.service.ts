import { Injectable } from '@angular/core';
import { db } from '../../environments/environment';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { Game } from '../models/game.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _collection = 'Game';
  private refreshTrigger = new Subject<void>();
  refresh$ = this.refreshTrigger.asObservable();

  constructor() {}

  triggerRefresh() {
    this.refreshTrigger.next();
  }

  async getAllGame(): Promise<any> {
    let res: any[] = [];

    const querySnapshot = await getDocs(collection(db, this._collection));
    querySnapshot.forEach((doc) => {
      res.push({ id: doc.id, ...doc.data() });
    });

    return res;
  }

  async getOneGame(id: string): Promise<any> {
    const docRef = doc(db, this._collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('Pas de jeu trouvé !');
    }
  }

  async addGame(game: Game): Promise<string> {
    try {
      const data = { ...game };
      const gameCollection = collection(db, this._collection);
      const docRef = await addDoc(gameCollection, data);
      return docRef.id;
    } catch (error) {
      console.error("Erreur lors de l'ajout du jeu : ", error);
      throw error;
    }
  }

  async editGame(id: string, game: Game): Promise<void> {
    try {
      const gameRef = doc(db, this._collection, id);
      await updateDoc(gameRef, { ...game });
    } catch (error) {
      console.error('Erreur lors de la modification : ', error);
      throw error;
    }
  }

  async deleteGame(id: string): Promise<void> {
    try {
      const gameDocRef = doc(db, this._collection, id);
      await deleteDoc(gameDocRef);
    } catch (error) {
      console.error('Error lors de la suppression du jeu :', error);
      throw error;
    }
  }
}
