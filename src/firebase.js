import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCvsfkOlqzeXa1pKUr8sT7vfPNJLrMPvjo",
    authDomain: "twitter-clone-e1a47.firebaseapp.com",
    databaseURL: "https://twitter-clone-e1a47.firebaseio.com",
    projectId: "twitter-clone-e1a47",
    storageBucket: "twitter-clone-e1a47.appspot.com",
    messagingSenderId: "157533229893",
    appId: "1:157533229893:web:327b4638c086e4b97c242c",
    measurementId: "G-K6CB6HH8N7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;
  