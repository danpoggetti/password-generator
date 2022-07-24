// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the generate password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Generate the password function and soon conditions
function generatePassword() {

  // Pasword condtions lowercase, uppercase, numbers and speical characters
  var passwordLength = document.getElementById("length").value;
  var alphaLower = document.getElementById("lowercase").checked;
  var alphaUpper = document.getElementById("uppercase").checked;
  var charNumbers = document.getElementById("numbers").checked;
  var charSpecial = docuement.getElementById("special").checked;

  // Adding the password functions here as var
var alphaLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var charNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]

var charSpecial = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "$",
  "&",
  "'",
  ")",
  "(",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

  // Calling together
  let pass = [];
  if (hasLower) pass = pass.concat(alphaLower);
  if (hasUpper) pass = pass.concat(alphaUpper);
  if (hasNumeric) pass = pass.concat(charNumbers);
  if (hasSpecial) pass = pass.concat(charSpecial);

  var passwordInfo = [];
  for (let i = 0; i < pwLength; i++) {
      passwordInfo.push(pass[Math.floor(Math.random() * pass.length)]);
}
return passwordInfo.join("");

}

// Button event
generateBtn.addEventListener("click", writePassword);