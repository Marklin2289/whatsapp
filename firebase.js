import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApsljlj3ZJ0Zu6It-74YDVfZelfaIBqmw",
  authDomain: "whatsapp-fba8f.firebaseapp.com",
  projectId: "whatsapp-fba8f",
  storageBucket: "whatsapp-fba8f.appspot.com",
  messagingSenderId: "802639125186",
  appId: "1:802639125186:web:72df3953b01cbd6e59b95b",
  measurementId: "G-FL1VKP0434",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
