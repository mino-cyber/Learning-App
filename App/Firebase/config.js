
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAy559KGHZms5whwjGCGBcm5k5xG01nRF8",
  authDomain: "acadimia-c66a6.firebaseapp.com",
  databaseURL: "https://acadimia-c66a6-default-rtdb.firebaseio.com",
  projectId: "acadimia-c66a6",
  storageBucket: "acadimia-c66a6.appspot.com",
  messagingSenderId: "1031135373714",
  appId: "1:1031135373714:web:594c050ebd4371e494f94b"
};

export const app = initializeApp(firebaseConfig);