import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
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

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log(error)
        }
    }
    return userDocRef
}

export const createAuthUserWithEmailPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
    await signOut(auth)
}

export const onAuthStateChangedListener = (callBack) => {
    onAuthStateChanged(auth, callBack)
}