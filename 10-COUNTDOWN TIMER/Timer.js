const endDate = "05 April 2026, 10:00 AM";
document.getElementById("end-date").innerHTML = endDate;

// //todo: First method to selct inputs :-
// let days = document.getElementById("days");
// let hours = document.getElementById("hours");
// let minutes = document.getElementById("minutes");
// let seconds = document.getElementById("seconds");

//todo: Second method to selct inputs :-
let inputs = document.querySelectorAll("input");

function clock() {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000; //idea: Diff will be in milliseconds so to convert it into seconds, divide it by 1000.

  if (diff < 0) {
    return;
  } else {
    //todo: First method to give inputs values :-
    // days.value = Math.floor(diff / 3600 / 24);      //idea: this method help to convert seconds into days, divide it by (3600 / 24).
    // hours.value = Math.floor(diff / 3600) % 24;      //idea: this method help to convert seconds into days, divide it by (3600 / 24).
    // minutes.value = Math.floor(diff / 60) % 60;      //idea: this method help to convert seconds into days, divide it by (3600 / 24).
    // seconds.value = Math.floor(diff) % 60;      //idea: this method help to convert seconds into days, divide it by (3600 / 24).

    //todo: Second method to give inputs values:-
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
  }
}
clock();

setInterval(() => {
  clock();
}, 1000);
