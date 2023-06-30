// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYu6BHw9C92gdWV-M9cOfw0f8uTwCAAJo",
    authDomain: "bookclub-10a32.firebaseapp.com",
    projectId: "bookclub-10a32",
    storageBucket: "bookclub-10a32.appspot.com",
    messagingSenderId: "791154357777",
    appId: "1:791154357777:web:b46511617ab2e14a93e3b0",
    measurementId: "G-VHBCBEKX94"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
