import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBwn61DbqK971UMLEEBXYYEr_cWWPcrKyw",
//   authDomain: "gopin-brochure.firebaseapp.com",
//   projectId: "gopin-brochure",
//   storageBucket: "gopin-brochure.appspot.com",
//   messagingSenderId: "64253722815",
//   appId: "1:64253722815:web:0d62d1edbcd225796a060a",
//   measurementId: "G-L3VH40Y9DF"
// };

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore(app)
