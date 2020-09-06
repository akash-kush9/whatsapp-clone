import firebase, { firestore } from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBqsUsD9D6zj72jUcaJ7IJdchhzQnfqORU",
    authDomain: "whatsapp-clone-14f55.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-14f55.firebaseio.com",
    projectId: "whatsapp-clone-14f55",
    storageBucket: "whatsapp-clone-14f55.appspot.com",
    messagingSenderId: "662516674975",
    appId: "1:662516674975:web:15729400bd5838e8114daa",
    measurementId: "G-70DTXNRV4F"
  };
  // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  })
export {auth , provider};
export default db ;