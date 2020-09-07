import * as firebase from "firebase"; // takes all of the named exports from firebase and dumps them to a brand new variable

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

export { firebase, database as default };

// use push for array like data
// database.ref("expenses").push({
//   description: "rent",
//   note: "",
//   amount: 109500,
//   createdAt: 0,
// });

// database.ref("expenses").push({
//   description: "phone bill",
//   note: "",
//   amount: 5900,
//   createdAt: 0,
// });

// database.ref("expenses").push({
//   description: "food",
//   note: "",
//   amount: 1200,
//   createdAt: 0,
// });

// to get the array like data
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });

//     console.log(expenses);
//   })
//   .catch((e) => {});

// // child_removed
// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added - is fired one time for all of the data already at that location. doesn't just get called for new children, it also gets called for existing ones
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// this is how to write to the firebase db
// database
//   .ref()
//   .set({
//     name: "gago",
//     age: 27,
//     isAlive: true,
//     location: {
//       city: "gagop",
//       country: "aprika",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch((e) => {
//     console.log("This failed", e);
//   });

// // to update, make sure to pass in ref
// database.ref("age").set(27);
// database.ref("location/city").set("tado");
// database
//   .ref("attributes")
//   .set({
//     height: 73,
//     weight: 190,
//   })
//   .then(() => {
//     console.log("Second set call worked ");
//   })
//   .catch((e) => {
//     console.log("Things didnt work for the second, error", e);
//   });

// // this is how to remove data from firebase
// database
//   .ref("isAlive")
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((e) => {
//     console.log("Did not remove data", e);
//   });

// // this is how to remove everything (because ref is root of db)
// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Data was removed");
//   })
//   .catch((e) => {
//     console.log("Did not remove data", e);
//   });

// // this is how to delete using set()
// database.ref("isAlive").set(null);

// // this is how to update
// database.ref().update({
//   name: "sars",
//   age: "10",
//   job: "tester",
//   isAlive: null,
// });

// // this is how to update child properties. notice the weird syntax /
// database.ref().update({
//   "location/city": "Boston",
// });

// // this is how to get data from firebase. this will get everything because ref() is root
// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// // this is how to get data from firebase. this will get just the location
// database
//   .ref("location")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// // this is how to get data from firebase. this will get just the city string
// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("Error fetching data", e);
//   });

// this is how to get data from firebase with change listener. we can't use promises because it will be run over and over again. which is why we use callback pattern here
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// // this is how to unsubscribe from changes listener
// setTimeout(() => {
//   database.ref().off();
// }, 5000);
