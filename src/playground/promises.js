const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "tae",
      age: 22,
    });

    // resolve("This is other resolve data"); // this will be ignored because we can only resolve/reject a single time

    // reject("Something went wrong!");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This is my other promise");
      }, 1500);
    });
  })
  .then((someString) => {
    console.log("does this run?", someString);
  })
  .catch((error) => {
    console.log("error: ", error);
  });

console.log("after");
