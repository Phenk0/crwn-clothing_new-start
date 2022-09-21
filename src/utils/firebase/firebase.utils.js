import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNX-tNj10h2OmG_A7EBbkOsxhZZj9LTOI",
  authDomain: "crwn-bd-df256.firebaseapp.com",
  projectId: "crwn-bd-df256",
  storageBucket: "crwn-bd-df256.appspot.com",
  messagingSenderId: "957517639130",
  appId: "1:957517639130:web:7bc7dec07ad94ef1dbe4e3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const creatAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creatAt,
      });
    } catch (e) {
      console.error("error creating the user ", e.message);
    }
  }
  return userDocRef;
};
