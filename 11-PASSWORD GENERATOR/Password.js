let passwordRange = document.getElementById("password-range");
let showRange = document.getElementById("showRange");
passwordRange.addEventListener("input", () => {
  showRange.innerText = passwordRange.value;
});

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+";

let passwordBox = document.getElementById("passwordBox");
let upperCase = document.getElementById("upperCase");
let lowerCase = document.getElementById("lowerCase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");

function getRandomData(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}
function generatePassword(password = "") {
  if (
    !upperCase.checked &&
    !lowerCase.checked &&
    !number.checked &&
    !symbol.checked
  ) {
    alert("Please select at least one character type.");
    return;
  }
  if (upperCase.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerCase.checked) {
    password += getRandomData(lowerSet);
  }
  if (number.checked) {
    password += getRandomData(numberSet);
  }
  if (symbol.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < passwordRange.value) {
    return generatePassword(password);
  }
  passwordBox.value = truncateString(password, passwordRange.value);
}
function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
document.getElementById("generateBtn").addEventListener("click", (e) => {
  e.preventDefault();
  generatePassword();
});
