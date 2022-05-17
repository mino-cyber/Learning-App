import {app} from "./config";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail,
     sendSignInLinkToEmail,  GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const authentication = getAuth(app);
// const provider = new GoogleAuthProvider();

async function isSignedIn() {
    console.log('from isSignedIn method: ', authentication.currentUser);
    return await authentication.currentUser != null;
}

async function getUserUId() {
    if (authentication.currentUser != null) {
        return authentication.currentUser.uid;
    } else {
        return null;
    }
}

async function getUserToken() {
    if (authentication.currentUser != null) {
        return await authentication.currentUser.getIdToken();
    }
    return null;
}

async function register(email, password) {
    console.log('register method with email=', email, ' and password=', password)
    await createUserWithEmailAndPassword(authentication, email, password);
}

async function login(email, password) {
    console.log('login method with email=', email, ' and password=', password)
    await signInWithEmailAndPassword(authentication, email, password);
}

async function restPassword (email){
   await sendPasswordResetEmail(authentication, email);
}

// async function singinWithGoogele (authentication,provider){
//     auth.languageCode = 'it';
//     firebase.auth().useDeviceLanguage();
//     await signInWithPopup(authentication, provider);
// }

async function logout() {
    authentication.signOut().then().catch((e) => console.log(e.message));
}

export {register, login, isSignedIn,restPassword, getUserUId, logout, getUserToken};