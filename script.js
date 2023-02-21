const processorder = function (name, meal, estimation, callback) {
  const status = `${name}'s ${meal} is prepairing!`;
  callback(status);
  setTimeout(function () {
    const status = `${name}'s ${meal} is prepared!`;
    callback(status);
  }, estimation);
};
console.log("Matilda orders...");
processorder("Matilda", "Cheesburger", 2000, function (status) {
  console.log(status);
});
console.log("Joseph orders...");
processorder("Joseph", "Cheesburger", 3000, function (status) {
  console.log(status);
});
console.log("Tina orders...");
processorder("Tina", "Cheesburger", 1000, function (status) {
  console.log(status);
});

// Promise 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise 1 resolved.");
  }, 2000);
});

// Promise 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Promise 2 resolved.");
  }, 5000);
});

// Handling of promisees one after another
// promise2.then(result => console.log(result));

// Handling of promise 1 and 2 in paralell
Promise.all([promise1, promise2])
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("Always executed"));
