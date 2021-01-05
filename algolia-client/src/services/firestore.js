import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBySrVPHRz0Q3_rYb58-BZxYIzbqpwbPXM',
  authDomain: 'virtual-worlds-662b2.firebaseapp.com',
  projectId: 'virtual-worlds-662b2',
  storageBucket: 'virtual-worlds-662b2.appspot.com',
  messagingSenderId: '502617278456',
  appId: '1:502617278456:web:9646c8bec9025921b7f80d',
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
