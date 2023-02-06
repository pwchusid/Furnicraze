import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBCkMlbDsBAdEFmF5PiOtnHeOuEMSltFK0",
  authDomain: "furnicraze.firebaseapp.com",
  projectId: "furnicraze",
  storageBucket: "furnicraze.appspot.com",
  messagingSenderId: "290236841492",
  appId: "1:290236841492:web:6e026b07720afcaf587101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
