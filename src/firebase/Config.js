import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyFYbLXGqzXudmI",
    authDomain: "olxaseapp.com",
    projectId: "olx-clone-94fa5",
    storageBucket: "olx-clonpspot.com",
    messagingSenderId: "278519480276",
    appId: "1:19480276:we",
    measurementId: ""
  };

  export const Firebase = firebase.initializeApp(firebaseConfig);


  //https://stackoverflow.com/questions/73023597/firebase-react-cannot-read-properties-of-undefined-reading-auth
