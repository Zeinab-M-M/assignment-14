const url = "https://jsonplaceholder.typicode.com/todos"

axios
.get(url)
.then((response) => {
console.log(response.data);
})
.catch((error) => {
console.log(error);
})
.finally(() => {
console.log("Axios called");
})