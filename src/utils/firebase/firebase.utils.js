import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBB-Yh1YfkuvVE7lmrs479litPYn02UpLI",
    authDomain: "ecommerce-react-db-cc514.firebaseapp.com",
    projectId: "ecommerce-react-db-cc514",
    storageBucket: "ecommerce-react-db-cc514.appspot.com",
    messagingSenderId: "954691911082",
    appId: "1:954691911082:web:953453431e28758da87fd3"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userDocRef
}
