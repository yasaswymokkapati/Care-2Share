import firebase from 'firebase';
require('@firebase/firestore')

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDrNSE98Gze5WyzOrGEfiKQVunN8EeVAbA",
    authDomain: "care-to-share-b145e.firebaseapp.com",
    projectId: "care-to-share-b145e",
    storageBucket: "care-to-share-b145e.appspot.com",
    messagingSenderId: "293166150354",
    appId: "1:293166150354:web:a26f7a870e37a638be730b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
