import firebaseAdmin from "firebase-admin";
import { firebaseConfig } from "./FirebaseConfig";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp(firebaseConfig);
}

export { firebaseAdmin }