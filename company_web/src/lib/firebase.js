import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjUjK7HgF9syecqy3sRc0gHWDesoblN1A",
  authDomain: "company-website-gen-ai-001.firebaseapp.com",
  projectId: "company-website-gen-ai-001",
  storageBucket: "company-website-gen-ai-001.firebasestorage.app",
  messagingSenderId: "301417680555",
  appId: "1:301417680555:web:22159fc9f1e5d5f28ab1ee",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
