import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsGd4hOORP6PHWzVz9uXyH7N7lLEZzr1o",
  authDomain: "reactjs-ecommerce-d4adf.firebaseapp.com",
  projectId: "reactjs-ecommerce-d4adf",
  storageBucket: "reactjs-ecommerce-d4adf.appspot.com",
  messagingSenderId: "313270498066",
  appId: "1:313270498066:web:227c2d986cae13055839cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
