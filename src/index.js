import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9my63GZiLPMwLwX6rNd0DyWH2Orhm9_4",
  authDomain: "luxurycarsok.firebaseapp.com",
  projectId: "luxurycarsok",
  storageBucket: "luxurycarsok.appspot.com",
  messagingSenderId: "193716057898",
  appId: "1:193716057898:web:d6f1b8c6821c8e51a45053"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
