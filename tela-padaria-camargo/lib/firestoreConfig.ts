import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "./firebaseAppConfig";

export const firestoreDb = getFirestore(firebaseApp);