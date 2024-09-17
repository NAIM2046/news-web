// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAinAIXWQQOzuu4u33NVFj-sN3QFfAlXIc",
  authDomain: "news-website-ec5a6.firebaseapp.com",
  projectId: "news-website-ec5a6",
  storageBucket: "news-website-ec5a6.appspot.com",
  messagingSenderId: "683932540073",
  appId: "1:683932540073:web:21a85fb2dab5471e555db8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth 