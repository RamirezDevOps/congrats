// firebaseInit.js

// Import the required functions and libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzCUZYrLPCQc5oHjwL01B5khI9AtT4vEE",
    authDomain: "coding-acceptance.firebaseapp.com",
    projectId: "coding-acceptance",
    storageBucket: "coding-acceptance.appspot.com",
    messagingSenderId: "89757691018",
    appId: "1:89757691018:web:c60e3c9f89c928e99e9173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore

console.log('From firebaseInit.js:', db);

export { db };  // This makes the Firestore instance available to other modules
