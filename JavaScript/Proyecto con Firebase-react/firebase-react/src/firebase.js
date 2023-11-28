
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvZtppS0fUUTwqnhiPPsoK8B9njkNYhf4",
  authDomain: "react-eed38.firebaseapp.com",
  projectId: "react-eed38",
  storageBucket: "react-eed38.appspot.com",
  messagingSenderId: "925314613188",
  appId: "1:925314613188:web:1f5bd653d5939f11bdae91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };