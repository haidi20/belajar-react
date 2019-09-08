import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBkd18lO0QssnfR8uxjhign_uFkNSdqo2Y",
    authDomain: "simple-notes-firebase-435ba.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-435ba.firebaseio.com",
    projectId: "simple-notes-firebase-435ba",
    storageBucket: "simple-notes-firebase-435ba.appspot.com",
    messagingSenderId: "167484368875",
    appId: "1:167484368875:web:51306c3278f551fbfb5bae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
export default firebase;