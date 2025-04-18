let lightOn = document.getElementById('lightOn');
let lightOff = document.getElementById('lightOff');

lightOn.addEventListener('click', function() {
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulbon.gif';
});

lightOff.addEventListener('click', function() { 
    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif';
});