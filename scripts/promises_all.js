const getPromiseOne = () => {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Promise 1 Done");
}, 1000);
});
};
const getPromiseTwo = () => {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Promise 2 Done");
}, 2000);
});
};
const getPromiseThree = () => {
return new Promise((resolve,reject) => {
setTimeout(() => {
reject("Promise 3 Error");
}, 3000);
});
};

const getPromisesAll = () => {
Promise.all([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
.then(([result_one, result_two, result_three]) => {
console.log(result_one);
console.log(result_two);
console.log(result_three);
})
.catch((reason) => {
console.log(reason);
})
.finally(() => {
console.log("Promise ended");
});
};

const getPromisesAllSettled = () => {
Promise.allSettled([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
.then(([result_one, result_two, result_three]) => {
console.log(result_one);
console.log(result_two);
console.log(result_three);
})
.catch((reason) => {
console.log(reason);
})
.finally(() => {
console.log("Promise ended");
});
};

const getPromisesRace = () => {
Promise.race([getPromiseOne(), getPromiseTwo(), getPromiseThree()])
.then((result) => {
console.log(result);
})
.catch((reason) => {
console.log(reason);
})
.finally(() => {
console.log("Promise ended");
});
};

getPromisesAll();
getPromisesAllSettled();
getPromisesRace();