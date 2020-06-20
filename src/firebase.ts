  import firebase from 'firebase/app'
  import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBZjqls7OwfUyBRdE4IANgAJPgYqipP2f8",
    authDomain: "projects-from-server.firebaseapp.com",
    databaseURL: "https://projects-from-server.firebaseio.com",
    projectId: "projects-from-server",
    storageBucket: "projects-from-server.appspot.com",
    messagingSenderId: "721499246947",
    appId: "1:721499246947:web:cdc48b3dd8ba0d3e610356"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);