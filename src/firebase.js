
// src/services/firebase.js

// Make sure you're using .js extension, not .ts

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCXeyeV3DRNRw4Y4Rar6L98idpkI5NY-sc",
    authDomain: "rudronil-aa1f8.firebaseapp.com",
    projectId: "rudronil-aa1f8",
    storageBucket: "rudronil-aa1f8.firebasestorage.app",
    messagingSenderId: "833259449256",
    appId: "1:833259449256:web:9d376bee6cc7144a188b9d",
    measurementId: "G-KH92YV2815"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
const auth = getAuth(app);

// Export correctly
export { auth };
