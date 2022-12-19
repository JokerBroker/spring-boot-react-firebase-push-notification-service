import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyCcEwIVresKxy1QnxgadQQCkVJgc7xzTBY",
    authDomain: "fir-appspring.firebaseapp.com",
    projectId: "fir-appspring",
    storageBucket: "fir-appspring.appspot.com",
    messagingSenderId: "169628979852",
    appId: "1:169628979852:web:3d3a1837beccc4b106e1a9",
    measurementId: "G-FZ0286XMDD"
  };

  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);