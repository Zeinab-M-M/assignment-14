const input_username = document.querySelector("#username");
const input_password = document.querySelector("#password");
const btn_login = document.querySelector("#login");
const paragraph = document.querySelector("#paragraph");


const checkCredentials = (username,password) => {
if (username.length<6) {
throw new Error("Username text must be at least 6 characters");
}
if (password.length <10){
throw new Error("Password text must be at least 10 characters");
}
};

const login = (username,password) => {
try {
checkCredentials(username,password);
paragraph.innerText = "Authenticated";
username.value = "";
password.value = "";
paragraph.classList.remove("red");
paragraph.classList.add("green");
} catch (error) {
paragraph.innerText = error;
paragraph.classList.remove("green");
paragraph.classList.add("red");

} finally {
console.log("Login mission completed");
}
}

btn_login.addEventListener("click", () => {
const username = input_username.value;
const password = input_password.value;

login(username,password);
});
    
    
    


