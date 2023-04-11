// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXZpn1FyEmacOEHT-UUuGrWZwQSxSp2ko",
  authDomain: "starwars-react-vite.firebaseapp.com",
  projectId: "starwars-react-vite",
  storageBucket: "starwars-react-vite.appspot.com",
  messagingSenderId: "363666451002",
  appId: "1:363666451002:web:fc33a487d661c0a4302303",
  measurementId: "G-B0EJNV73VK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;

