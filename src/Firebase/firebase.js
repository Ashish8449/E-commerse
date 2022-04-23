// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFRVNd8oJ0M5Ib_foJfWN9gBN-CehfwE",
  authDomain: "e-commerse-c3460.firebaseapp.com",
  projectId: "e-commerse-c3460",
  storageBucket: "e-commerse-c3460.appspot.com",
  messagingSenderId: "111123035005",
  appId: "1:111123035005:web:40e6d8c9798ad4be859214",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get a reference to the database service
export const database = getDatabase(app);

export const auth = getAuth(app);
