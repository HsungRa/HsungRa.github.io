import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GithubAuthProvider} from "firebase/auth";
import {get, put} from "./StorageUtil.js"
import {AUTH_KEY, signInWithGitHub} from "./ThirdAuthUtil.js";


class AuthInfo {
    constructor(email, userName, userAvatar, accessToken) {
        this._email = email;
        this._userName = userName;
        this._userAvatar = userAvatar;
        this._accessToken = accessToken;
    }

    static fromJSON(json) {
        let email, userName, userAvatar, accessToken
        JSON.parse(get(AUTH_KEY), (k, v) => {
            switch (k) {
                case 'email':
                    email = v;
                    break;
                case 'userName':
                    userName = v;
                    break;
                case 'userAvatar':
                    userAvatar = v;
                    break;
                case 'accessToken':
                    accessToken = v;
                    break;
            }
        })
        return new AuthInfo(email, userName, userAvatar, accessToken);
    }

    get email() {
        return this._email;
    }

    get userName() {
        return this._userName;
    }

    get userAvatar() {
        return this._userAvatar;
    }

    get accessToken() {
        return this._accessToken;
    }

    toJSON(){
        return JSON.stringify(this);
    }
}

class Authenticator {
    constructor(authCall) {
        this._authCall = authCall;
    }

    getAuthInfo = () => {
        if (null == get(AUTH_KEY) || undefined === get(AUTH_KEY)) {
            this._authCall()
        }
        return AuthInfo.fromJSON(get(AUTH_KEY))
    }
}

class GithubAuthenticator extends Authenticator {
    _firebaseConfig = {
        apiKey: "AIzaSyArZ8rP2pFW_tyx43UELbJ1aw7Mo30QXzE",
        authDomain: "rey-firebase-9527.firebaseapp.com",
        projectId: "rey-firebase-9527",
        storageBucket: "rey-firebase-9527.appspot.com",
        messagingSenderId: "701286567818",
        appId: "1:701286567818:web:e12837d38a5614df694273",
        measurementId: "G-PQ4ZMJM56D"
    };
    _app = initializeApp(this._firebaseConfig);
    // const analytics = getAnalytics(app);
    _provider = new GithubAuthProvider();
    _auth = getAuth(this._app);

    constructor() {
        super(() => {
            signInWithPopup(this._auth, this._provider).then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const user = result.user;
                put(AUTH_KEY, new AuthInfo(
                    user.email,
                    user.displayName,
                    user.photoURL,
                    credential.accessToken
                ).toJSON())
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                console.log("####################GitHub auth error:[errorCode:", errorCode, "errorMessage", errorMessage, "]");
            });
        });
    }


}

export const github_authenticator = new GithubAuthenticator()


