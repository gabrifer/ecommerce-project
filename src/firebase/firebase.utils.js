import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyB0AIXabA6SY9a7xxT4y2Iv07Cl9B3Y2h4",
    authDomain: "ecommerce-db-e86e6.firebaseapp.com",
    databaseURL: "https://ecommerce-db-e86e6.firebaseio.com",
    projectId: "ecommerce-db-e86e6",
    storageBucket: "ecommerce-db-e86e6.appspot.com",
    messagingSenderId: "59323385619",
    appId: "1:59323385619:web:24ed4f349191f847367ce6"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({displayName, email, createdAt, ...additionalData})
        } catch (error) {
            console.log('error creating user', error.message);
            
        }
    }

    return userRef;
    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;