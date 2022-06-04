import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

const app = firebase.initializeApp({

});

export const auth = getAuth(app);
export default app;
