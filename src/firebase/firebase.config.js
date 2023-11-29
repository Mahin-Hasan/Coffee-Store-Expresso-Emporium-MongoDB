// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAA88w5N72Q-0KywXTgTp5S2Li-tMo8dY",
    authDomain: "coffee-store-fabff.firebaseapp.com",
    projectId: "coffee-store-fabff",
    storageBucket: "coffee-store-fabff.appspot.com",
    messagingSenderId: "361640685973",
    appId: "1:361640685973:web:5f56a93e585be71953069c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;