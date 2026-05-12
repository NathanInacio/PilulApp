import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjfxIOPDmIfgHcri0qWNou3fpZOCsQzA4",
  authDomain: "pilulapp.firebaseapp.com",
  projectId: "pilulapp",
  storageBucket: "pilulapp.firebasestorage.app",
  messagingSenderId: "182081552285",
  appId: "1:182081552285:web:a68ff4252297181ac6b974"
};

const app = initializeApp(firebaseConfig);
const autenticacao = getAuth(app);

export { autenticacao };