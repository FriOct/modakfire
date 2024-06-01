import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { createUser } from "../api";

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
const storage = getStorage();

function getCurrentTime() {
  var now = new Date();
  now.setHours(now.getHours() + 9);
  const res = now.toISOString().replace("T", " ").substring(0, 19);
  return res;
}

export async function googleLogin() {
  let res;
  await signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const newUserData = {
        id: user.uid,
        email: user.email,
        name: user.reloadUserInfo.displayName,
        registerDate: getCurrentTime(),
      };
      res = await createUser(newUserData);
    })
    .catch((error) => {
      console.error("code: " + error.code);
      console.error("msg: " + error.message);
      return null;
    });
  console.log(res);
  return res;
}

export function googleLogout() {
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

export async function getImageFromStorage(imgId) {
  imgId = "01.35342154.1.jpg";
  let imgurl;

  await getDownloadURL(ref(storage, imgId))
    .then((url) => {
      // const xhr = new XMLHttpRequest();
      // xhr.responseType = "blob";
      // xhr.onload = (event) => {
      //   const blob = xhr.response;
      // };
      // xhr.open("GET", url);
      // xhr.send();

      // console.log(url);
      imgurl = url;
    })
    .catch((error) => {
      // Handle any errors
      imgurl = "undefined";
    });
  return imgurl;
}
