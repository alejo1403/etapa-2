import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4QVFDlxLiFYD4y5-ry3HDRXXSc0wKJfU",
    authDomain: "prueba-tecnica-clase-alpha.firebaseapp.com",
    projectId: "prueba-tecnica-clase-alpha",
    storageBucket: "prueba-tecnica-clase-alpha.appspot.com",
    messagingSenderId: "182157596608",
    appId: "1:182157596608:web:d6d654511e229be2bada25"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };