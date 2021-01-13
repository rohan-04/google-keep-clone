import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC71YdpPnfUvgZLkgohQAgmrpgNsEPJla8",
    authDomain: "keep-clone-26b77.firebaseapp.com",
    projectId: "keep-clone-26b77",
    storageBucket: "keep-clone-26b77.appspot.com",
    messagingSenderId: "204787671003",
    appId: "1:204787671003:web:4b10ced23dfbca285fd1fe",
    measurementId: "G-2HXZJPNCM7"
  };


  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;