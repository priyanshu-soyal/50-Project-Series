let btn = document.querySelector("button");
let body = document.querySelector("body");
function getRandomColor() {
        let val1 = Math.floor(Math.random() * 255);
        let val2 = Math.floor(Math.random() * 255);
        let val3 = Math.floor(Math.random() * 255);
        return `rgb(${val1}, ${val2}, ${val3})`;
};
btn.addEventListener("click", () => {
    body.style.backgroundColor = getRandomColor();
});