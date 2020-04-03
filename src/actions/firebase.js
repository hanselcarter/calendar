import * as FB from "firebase/app";
import "firebase/database";
import "firebase/functions";
import Config from "../config";

const AccessData = {
  apiKey: Config.FIREBASE_API_KEY,
  authDomain: Config.FIREBASE_AUTH_DOMAIN,
  databaseURL: Config.FIREBASE_DATABASE_URL,
  storageBucket: Config.FIREBASE_STORAGE_BUCKET,
  projectId: Config.FIREBASE_PROJECTID,
  messagingSenderId: Config.FIREBASE_MESSAGE_SENDERID,
  appId: Config.FIREBASE_APP_ID
};

FB.initializeApp(AccessData);
/**
 * @type {firebase.database.Database}
 */
export const DB = FB.database();
export const functions = FB.functions;
