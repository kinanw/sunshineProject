import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE
};
const firebaseApp = firebase.initializeApp(config);

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;
