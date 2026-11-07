const getDataFromServer = (condition) => {
return new Promise((resolve, reject) => {
setTimeout(() => {
if (condition) resolve("Done");
else reject("Error");
}, 2000);
});
};

const promise = getDataFromServer(true);

promise
.then((data) => {
console.log(data);
})
.catch((error) => {
console.log(error);
})
.finally(() => {
console.log("Promise called")
});