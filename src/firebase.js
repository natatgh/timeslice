// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration (as you provided)
const firebaseConfig = {
  apiKey: "AIzaSyBNyzjHBG1ZcLoqpbgyfeOC7qXtZ6LF97U",
  authDomain: "timeslice-2e369.firebaseapp.com",
  projectId: "timeslice-2e369",
  storageBucket: "timeslice-2e369.appspot.com",
  messagingSenderId: "933709429658",
  appId: "1:933709429658:web:e3ed0c77eff5ff412c1823",
  measurementId: "G-Q85YYFMXPS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// After a successful registration

export default app;

// Example function to add a user to Firestore
export const addUserToFirestore = (user) => {
    const usersCollection = db.collection("users");
    usersCollection.add(user)
    .then((docRef) => {
        console.log("User added with ID:", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding user:", error);
    });
};

// Example function to authenticate a user using Firebase Auth
export const authenticateUser = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in user:", user);
    })
    .catch((error) => {
        console.error("Error signing in:", error);
    });
};

export { auth };