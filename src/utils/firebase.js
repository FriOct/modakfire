import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

const baseURL = "http://localhost:8080";

async function createUser({
  id: id,
  email: email,
  name: name,
  registerDate: registerDate,
}) {
  const url = baseURL + "/members";
  const data = {
    id: id,
    email: email,
    name: name,
    registerDate: registerDate,
  };
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    contentType: "application/json",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await response.json();
  // console.log(jsonData);
}

function getUserData(id) {}

function getCurrentTime() {
  var now = new Date();
  now.setHours(now.getHours() + 9);
  return now.toISOString().replace("T", " ").substring(0, 19);
}

function googleLogin(setLogged) {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      createUser({
        id: user.uid,
        email: user.email,
        name: user.reloadUserInfo.displayName,
        registerDate: getCurrentTime(),
      });
      setLogged(true);
    })
    .catch((error) => {
      console.error("code: " + error.code);
      console.error("msg: " + error.message);
      setLogged(false);
    });
  setLogged(false);
}

function googleLogout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      return true;
    })
    .catch((error) => {
      // An error happened.
      return false;
    });
  return false;
}

export { googleLogin, googleLogout, getUserData };
