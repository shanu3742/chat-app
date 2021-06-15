import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBsagCNiTI2eGgxg5dmNSBKzA8tlT0dJ2M',
  authDomain: 'chat-web-app-5855a.firebaseapp.com',
  projectId: 'chat-web-app-5855a',
  storageBucket: 'chat-web-app-5855a.appspot.com',
  messagingSenderId: '714973422891',
  appId: '1:714973422891:web:b7e61c2b0bf1c6a63bd16e',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
