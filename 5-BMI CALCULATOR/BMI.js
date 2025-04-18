let form = document.querySelector("form");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML =  `Please give a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML =  `Please give a valid weight ${weight}`;
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // result.innerHTML = `BMI :- ${bmi}`

        if(bmi < 18.6) {
            result.innerHTML = `BMI :- ${bmi} <p> Under Weight </p>`
        } else if(bmi > 18.6 && bmi < 24.9) {
            result.innerHTML = `BMI :- ${bmi} <p> Normal Weight </p>`
        } else {
            result.innerHTML = `BMI :- ${bmi} <p> Over Weight </p>`
        }
    }

})