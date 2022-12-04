import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
   apiKey: "AIzaSyAIjkxhLx81msXyiPGlSInBzavBR3Mgy24",
   authDomain: "portfolio-7a5da.firebaseapp.com",
   projectId: "portfolio-7a5da",
   storageBucket: "portfolio-7a5da.appspot.com",
   messagingSenderId: "605945824853",
   appId: "1:605945824853:web:f29631f6ea446596d3f6dc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)
