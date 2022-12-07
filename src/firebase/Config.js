import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCz2ErScncX0smYO6YVwuFYbLXGqzXudmI",
    authDomain: "olx-clone-94fa5.firebaseapp.com",
    projectId: "olx-clone-94fa5",
    storageBucket: "olx-clone-94fa5.appspot.com",
    messagingSenderId: "278519480276",
    appId: "1:278519480276:web:6e3152187ca510c930a041",
    measurementId: "G-SQ565FSXJ5"
  };

  export const Firebase = firebase.initializeApp(firebaseConfig);


  //https://stackoverflow.com/questions/73023597/firebase-react-cannot-read-properties-of-undefined-reading-auth