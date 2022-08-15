import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBmVE3tV0jkjQVR20hyOoWKzXA7zkRn69s",
  authDomain: "management-42d90.firebaseapp.com",
  projectId: "management-42d90",
  storageBucket: "management-42d90.appspot.com",
  messagingSenderId: "473443042080",
  appId: "1:473443042080:web:13155ee41d2ee15a980d45",
  measurementId: "G-VLB9VCW186"
};

// Initialize Firebase
 export default firebase.initializeApp(firebaseConfig);