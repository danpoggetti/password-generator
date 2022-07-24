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

// Prompt for password minimum and maximum length and call to validate (8-128 characters)
while (!validateLength) {
  passwordLength = prompt("How many characters do you want ot the password to include? Please select minimum 8 and maximum 128");

  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Invalid password length. Must be minimum 8 characters and maximum 128");
  } else {
    validLength = true;
  }
}

// Prompt for character usage and validate (must include at least one)
while (!validChars) {
  useLowerCase = confirm("Use lower-case letters?");
  useUpperCase = confirm("Use upper-case letters?");
  useNumbers = confirm("Use numbers?");
  useSpecial = confirm("Use special characters?");

  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecial) {
    alert("You must use at least one character type please.");
  } else {
    validChars = true;
  }
}
}



// Add the event listener to generate button
generateBtn.addEventListener("click", writePassword);