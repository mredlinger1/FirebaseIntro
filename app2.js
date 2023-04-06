// insert data

let john = {
  name: "john",
  age: 25,
  married: false,
  favorites: {
    color: "green",
    city: "madison",
  },
  siblings: ["mike", "amy", "jackie"],
};

let derek = {
  name: "derek",
  age: 27,
  married: true,
  favorites: {
    color: "red",
    city: "madison",
  },
  siblings: ["mike", "peter", "neil"],
};

let sally = {
  name: "sally",
  age: 40,
  married: false,
  favorites: {
    color: "blue",
    city: "chicago",
  },
  siblings: ["neil"],
};

// store the objects
// store john
// db.collection("users").doc("john@john.com").set(john);

// //store derek
// db.collection("users").doc("derek@derek.com").set(derek);

// //store sally
// db.collection("users").doc("sally@sally.com").set(sally);

//change sally age to 41 and make her married
// db.collection("users")
//   .doc("sally@sally.com")
//   .update({ age: 41, married: true });

// update derek's infor, set favorite color to yellow
// db.collection("users")
//   .doc("derek@derek.com")
//   .update({ "favorites.color": "yellow" });

//John got a new sibling
// db.collection("users")
//   .doc("john@john.com")
//   .update({
//     siblings: firebase.firestore.FieldValue.arrayUnion("katie"),
//   });

//QUERIES
//show the names of all people under the age of 30

// db.collection("users")
//   .where("age", "<", 30)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

//compound queries
//between 27 and 35
// db.collection("users")
//   .where("age", "<=", 35)
//   .where("age", ">=", 27)
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// show all people whos name is derek and are 27
// db.collection("users")
//   .where("age", ">", 25)
//   .where("name", "==", "derek")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

//show all users with a name that is derek or sally
// db.collection("users")
//   .where("name", "in", ["derek", "sally"])
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

//show siblings array search
// db.collection("users")
//   .where("siblings", "array-contains", "mike")
//   .get()
//   .then((response) => {
//     let docs = response.docs;
//     docs.forEach((doc) => {
//       console.log(doc.data().name);
//     });
//   });

// mike or katie siblings
db.collection("users")
  .where("siblings", "array-contains-any", ["mike", "katie"])
  .get()
  .then((response) => {
    let docs = response.docs;
    docs.forEach((doc) => {
      console.log(doc.data().name);
    });
  });
