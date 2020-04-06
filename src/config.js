/** @typedef {Object} Configuration
 * @property {String} FIREBASE_API_KEY
 * @property {String} FIREBASE_AUTH_DOMAIN
 * @property {String} FIREBASE_DATABASE_URL
 * @property {String} FIREBASE_PROJECTID
 * @property {String} FIREBASE_STORAGE_BUCKET
 * @property {String} FIREBASE_MESSAGE_SENDERID
 */

const baseConfig = {
  FIREBASE_API_KEY: "AIzaSyDTqtrg51fIH6RAR-ikx3K3GUZhvnxA910",
  FIREBASE_AUTH_DOMAIN: "expens-9353e.firebaseapp.com",
  FIREBASE_DATABASE_URL: "https://expens-9353e.firebaseio.com",
  FIREBASE_PROJECTID: "expens-9353e",
  FIREBASE_STORAGE_BUCKET: "expens-9353e.appspot.com",
  FIREBASE_MESSAGE_SENDERID: "346046868999",
  FIREBASE_APP_ID: "1:346046868999:web:192ffd128363c96b32c4a2",
  OPEN_WEATHER_API_KEY: "4fa717377e36234e8687c91466405c9e",
};
const configPresets = {
  production: {
    ...baseConfig,
  },
  development: {
    ...baseConfig,
  },
};

if (!process.env.NODE_ENV)
  console.warn("process.env.NODE_ENV not defined.\nDevelopment mode...");
if (process.env.NODE_ENV === "development") console.log("Development mode...");

if (process.env.NODE_ENV === "test") {
  configPresets.test = configPresets.development;
  delete configPresets.test.SLACK_API_TOKEN;
}

/**
 * @type {Configuration}
 */
const Config = configPresets[process.env.NODE_ENV || "development"];

export default Config;
