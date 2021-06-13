import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgnzm9VwBvI53PWjGG4Ao4HQqdNBDa2vE",
    authDomain: "twitter-2b238.firebaseapp.com",
    projectId: "twitter-2b238",
    storageBucket: "twitter-2b238.appspot.com",
    messagingSenderId: "498402628869",
    appId: "1:498402628869:web:78a795171063294fa9536c",
    measurementId: "G-3YT70KSSBH"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;