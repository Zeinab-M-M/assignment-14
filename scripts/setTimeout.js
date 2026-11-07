const btn_stop = document.querySelector("#stop");
const paragraph = document.querySelector("#paragraph");

const timeout = setTimeout(() => {
paragraph.classList.add("font_size");
}, 3000);

const stopTimeout = () => {
clearTimeout(timeout);
console.log(paragraph.style);
};

btn_stop.addEventListener("click", stopTimeout);