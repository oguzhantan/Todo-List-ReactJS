import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDNQLiZ9rTXJMzK-8txYcNaK0pKWWlATIg",
    authDomain: "todo-list-c5d5c.firebaseapp.com",
    databaseURL: "https://todo-list-c5d5c-default-rtdb.firebaseio.com",
    projectId: "todo-list-c5d5c",
    storageBucket: "todo-list-c5d5c.appspot.com",
    messagingSenderId: "648743762780",
    appId: "1:648743762780:web:7c71f1d4ac5270573e9f99",
    measurementId: "G-WFMZ38CFEG"
});

const db = firebaseApp.firestore();
export default db;