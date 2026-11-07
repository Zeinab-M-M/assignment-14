const btn_stop = document.querySelector("#stop");
const paragraph = document.querySelector("#paragraph");

const interval = setInterval(() => {
paragraph.classList.toggle("font_size");
}, 3000);

const stopInterval = () => {
clearInterval(interval);
console.log(paragraph.style);
};

btn_stop.addEventListener("click", stopInterval);