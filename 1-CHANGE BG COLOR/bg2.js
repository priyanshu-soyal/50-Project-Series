const boxes = document.querySelectorAll(".boxes");
const body = document.querySelector("body");

boxes.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'wheat') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        } else if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
    })
})

//todo: By Swith Conditional statement

// boxes.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         switch (e.target.id) {
//             case "grey":
//                 body.style.backgroundColor = "grey";
//                 break;
//             case "yellow":
//                 body.style.backgroundColor = "yellow";
//                 break;
//             case "wheat":
//                 body.style.backgroundColor = "wheat";
//                 break;
//             case "purple":
//                 body.style.backgroundColor = "purple";
//                 break;
//             case "red":
//                 body.style.backgroundColor = "red";
//                 break;
//             default:
//                 body.style.backgroundColor = "white";
//                 break;
//         }
//     })
// })