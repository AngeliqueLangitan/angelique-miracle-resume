
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration (these are safe to expose)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "angelique-miracle-resume.firebaseapp.com",
  databaseURL: "https://angelique-miracle-resume-default-rtdb.firebaseio.com/",
  projectId: "angelique-miracle-resume",
  storageBucket: "angelique-miracle-resume.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
