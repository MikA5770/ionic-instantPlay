import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from 'firebase/auth';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';
import { app, auth, db } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  dbPath = 'Role';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    onAuthStateChanged(getAuth(app), (fetchedUser) => {
      if (fetchedUser) {
        this.currentUserSubject.next(fetchedUser);
        this.getUserRole(fetchedUser.uid).then((isAdmin) => {
          this.isAdminSubject.next(isAdmin);
        });
      } else {
        this.currentUserSubject.next(null);
        this.isAdminSubject.next(false);
      }
    });
  }
  loginWithEmail(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.router.navigate(['/games']);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  }

  signup(email: string, password: string, name: string) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
        });
        const user = { ...result.user, displayName: name };
        this.addUser(false, user.uid);
        this.router.navigateByUrl('games');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  async addUser(admin: boolean, userId: string) {
    try {
      const userCollection = collection(db, this.dbPath);
      await setDoc(doc(userCollection, userId), {
        admin: admin,
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout du user : ", error);
      throw error;
    }
  }

  async getUserRole(userId: string): Promise<any> {
    const docRef = doc(db, this.dbPath, userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('Pas de user trouvé !');
    }
  }

  getCurrentUser() {
    return this.currentUserSubject.asObservable();
  }

  isAdmin() {
    return this.isAdminSubject.asObservable();
  }

  signout() {
    signOut(auth).then(() => {
      this.currentUserSubject.next(null);
      this.isAdminSubject.next(false);
      this.router.navigate(['/login']);
    });
  }
}
