import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAy3sr6qfjmwhERQcCN72t8FICHQ0-8i5I',
  authDomain: 'nextfbclone.firebaseapp.com',
  projectId: 'nextfbclone',
  storageBucket: 'nextfbclone.appspot.com',
  messagingSenderId: '589658202398',
  appId: '1:589658202398:web:17001b22fde4bd59f3690f',
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app;
const db = app.firestore();
const storage = firebase.storage();
export { db, storage };
