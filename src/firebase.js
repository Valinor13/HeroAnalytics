import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBMbfTHW9Py98NtKNFCr6OBGhqOzuRtGlM",
  authDomain: "heroxr-development.firebaseapp.com",
  projectId: "heroxr-development",
  storageBucket: "heroxr-development.appspot.com",
  messagingSenderId: "906084342313",
  appId: "1:906084342313:web:2b66eed05b3c9fcdbe1a38",
});

export const auth = getAuth(app);
export default app;
