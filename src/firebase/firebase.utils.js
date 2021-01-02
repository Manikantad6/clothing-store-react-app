import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyCljdunQT2wF_rQG2zNmT7dwl3bJY640DY",
    authDomain: "crwn-db-84ea2.firebaseapp.com",
    projectId: "crwn-db-84ea2",
    storageBucket: "crwn-db-84ea2.appspot.com",
    messagingSenderId: "998330492180",
    appId: "1:998330492180:web:ab4dc756b83b85d4640e01",
    measurementId: "G-SHWXPNF7TQ"
  };

  firebase.initializeApp(Config);
//   firebase.analytics();


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;