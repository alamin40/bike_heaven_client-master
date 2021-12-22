import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: 'AIzaSyBTNPZYkGyI8JDHwV-QtRT76XWR1yFZZNM',
  authDomain: 'programming-hero-2e9fe.firebaseapp.com',
  projectId: 'programming-hero-2e9fe',
  storageBucket: 'programming-hero-2e9fe.appspot.com',
  messagingSenderId: '798723910207',
  appId: '1:798723910207:web:005e0427073e0f7f85668a',
  measurementId: 'G-5S9ND05DFE',
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const auth = firebaseApp.auth();

// export { db, auth };
export { db };
