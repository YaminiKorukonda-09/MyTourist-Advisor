// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8dqAzvrEaJpqjNxwjQdz2OSgZVOLtp8M",
  authDomain: "mytravelproject-9.firebaseapp.com",
  projectId: "mytravelproject-9",
  storageBucket: "mytravelproject-9.appspot.com",
  messagingSenderId: "811527268866",
  appId: "1:811527268866:web:3fd6674903b83ad976d51b"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0){
    app =firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}
const auth = firebase.auth()

export {auth};