// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random character from a provided string
function randomChar(inputString) {
  var index = Math.floor(Math.random() * inputString.length); 
  return inputString.charAt(index);
}

// Prompt for password characteristics and generate
function generatePassword() {
  var passwordLength;
  var validLength = false;
  var useLowerCase;
  var useUpperCase;
  var useNumbers;
  var useSpecial;
  var validChars = false;
  var potentialChars = "";
  var password = "";
  var initialPasswordLength;

var alphaLower = "qwertyuiopasdfghjklzxcvbnm";
var alphaUpper = "QWERTYUIOPASDFGHJKLZXCVBNM";
var charNumbers = "0123456789";
var charSpecial = "!#$%&'()*+,-./:;<=>?@[]^_`{}|~";

// Add the event listener to generate button
generateBtn.addEventListener("click", writePassword);