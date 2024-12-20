import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDm5degosd7H0onYJM0WKvx19gy-9xWmdc',
  authDomain: 'instant-play-1b9b6.firebaseapp.com',
  projectId: 'instant-play-1b9b6',
  storageBucket: 'instant-play-1b9b6.firebasestorage.app',
  messagingSenderId: '796325350336',
  appId: '1:796325350336:web:46620537aab0d016ec5625',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

