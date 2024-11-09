// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMFVlOhh2C3D1nrkpXEk0KlaCQ7v8d5wU",
  authDomain: "react-authentication-5e1d4.firebaseapp.com",
  projectId: "react-authentication-5e1d4",
  storageBucket: "react-authentication-5e1d4.firebasestorage.app",
  messagingSenderId: "95503719123",
  appId: "1:95503719123:web:61b01849d35ed38986d226"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;