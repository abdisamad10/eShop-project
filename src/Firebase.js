
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
      const firebaseConfig = {
        apiKey: "AIzaSyBKU7ekqMnFcQ0OYy5aJhJ8MKE50f8i8qk",
        authDomain: "eshop-9941a.firebaseapp.com",
        projectId: "eshop-9941a",
        storageBucket: "eshop-9941a.appspot.com",
        messagingSenderId: "619067362136",
        appId: "1:619067362136:web:74196692c81ec2ce3fb32d",
        measurementId: "G-TFTG5LY83M"
      };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();

export {db,auth};
