// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Importa Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAruwoDjUWuKDhNSTiD5c1QbJ3zUQ1WQdw",
  authDomain: "evoldep-64f06.firebaseapp.com",
  projectId: "evoldep-64f06",
  storageBucket: "evoldep-64f06.firebasestorage.app",
  messagingSenderId: "993072003915",
  appId: "1:993072003915:web:53579f249f901a10c786ce",
  measurementId: "G-QS1CT45CCD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

// Exporta Firestore para que lo uses en tu app
export { app, analytics, db };
