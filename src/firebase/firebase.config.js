// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmt55DNOQuW6Vk88YEoyYxXmK0a6AzxcM",
  authDomain: "food-corner-remake-2ce32.firebaseapp.com",
  projectId: "food-corner-remake-2ce32",
  storageBucket: "food-corner-remake-2ce32.appspot.com",
  messagingSenderId: "766191431007",
  appId: "1:766191431007:web:d54a73888f29b683f6daea",
  measurementId: "G-2PCFFLGGGT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;