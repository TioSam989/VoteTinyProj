import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase } from 'firebase/database'
import { getAnalytics } from "firebase/analytics";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCoUxKFGjtGUnpJO-zNtDZYsQx2-qKqjR8",
    authDomain: "votetinyproj.firebaseapp.com",
    projectId: "votetinyproj",
    storageBucket: "votetinyproj.appspot.com",
    messagingSenderId: "983706872019",
    appId: "1:983706872019:web:10fad7db2cc6c0bd0fcc26",
    measurementId: "G-MCK4TCSE6X",
    databaseURL: "https://votetinyproj-default-rtdb.europe-west1.firebasedatabase.app"
    
});

const auth = getAuth(firebaseApp)
const analytics = getAnalytics(auth)
const database = getDatabase(firebaseApp)

export { auth, database, firebaseApp}
