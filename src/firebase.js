import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBSnLRtRUys7gXK9kKueDtjI_olsy4UtI",
  authDomain: "social-media-app-afbda.firebaseapp.com",
  databaseURL: "https://social-media-app-afbda.firebaseio.com",
  projectId: "social-media-app-afbda",
  storageBucket: "social-media-app-afbda.appspot.com",
  messagingSenderId: "853021779696",
  appId: "1:853021779696:web:9d52e2ed10519d79a9c435",
  measurementId: "G-DL0KMXDG59"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider };
  export default db;
  