import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import {authInfo} from "./StorageUtil.js"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyArZ8rP2pFW_tyx43UELbJ1aw7Mo30QXzE",
    authDomain: "rey-firebase-9527.firebaseapp.com",
    projectId: "rey-firebase-9527",
    storageBucket: "rey-firebase-9527.appspot.com",
    messagingSenderId: "701286567818",
    appId: "1:701286567818:web:e12837d38a5614df694273",
    measurementId: "G-PQ4ZMJM56D"
};

const app = initializeApp(firebaseConfig);
const provider = new GithubAuthProvider();
provider.addScope('repo');
const auth = getAuth(app);

export const authCheck = (authSuccess) => {
    const authUser = authInfo.user
    if (authUser !=null) {
        if (authSuccess) {
            authSuccess(authUser);
        }
    }else {
        signInWithPopup(auth, provider).then((result)=>{
            //     console.log("####################GitHub auth result:",JSON.stringify(authRsp));
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            // The signed-in user info.
            const user = result.user;
            const authUser = {
                email: user.email,
                name: user.displayName,
                photoURL: user.photoURL,
                accessToken: credential.accessToken
            }
            authInfo.setAuthUser(authUser)
            if (authSuccess) {
                authSuccess(authUser);
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // TODO
            alert(errorMessage);
            console.log("####################GitHub auth error:[errorCode:", errorCode, "errorMessage", errorMessage, "email:", email, "credential:", credential,"]");
        });
    }
}
