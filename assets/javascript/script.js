// Code Included in Assignment
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
// Code Included in Assignemnt

  

// Character Variables
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "", ":", ";", "'", "<", ",", ">", ".", "?", "/"];

var combineCharacters = [];    
var finalPassword = [];


// Generate Password function
function generatePassword() {
    
    // Prompt user for input, check is correct number of characters. If not produce alert with warning
    var userEntry = prompt("Please choose a password length of 8-128 characters");

    // Will check for Numerical Character
    if (isNaN(userEntry)) {
      alert("You have entered an incorrect number");

      return;
    };
    
    // Will check for numerical value between 8 and 128.
    if (userEntry < 8 || userEntry > 128) {  
      alert("Number MUST be between 8 and 128 charcters.");
  
      return;
    };

    // Check if Lowercase Characters should be used.  ForLoop to choose characters.
    var lowerCase = confirm("Would you like to include lowercase characters?");
  
    if (lowerCase === true) {
      for (var l = 0; l < lowerCaseChar.length; l++) {
        this.combineCharacters.push(lowerCaseChar[l]);
      };
    };
    
    // Check if Uppercase Characters should be used. ForLoop to choose characters.
    var upperCase = confirm("Would you like to include uppercase characters?");
    
    if (upperCase === true) {
      for (var u = 0; u < upperCaseChar.length; u++) {
        this.combineCharacters.push(upperCaseChar[u]);
      };
    };

    // Check if Number Characters should be used. ForLoop to choose characters.
    var numbers = confirm("Would you like to include numbers?");
  
    if (numbers === true) {
      for (var n = 0; n < numberChar.length; n++) {
        this.combineCharacters.push(numberChar[n]);
      };
    };

    // Check is Special Characters should be used. ForLoop to choose characters.
    var symbol = confirm("Would you like to include special characters?");
  
    if (symbol === true) {
      for (var s = 0; s < symbolChar.length; s++) {
        this.combineCharacters.push(symbolChar[s]);
      };
    };

    // For loop for adding characters using the userEntry. Will combine into empty array finalPassword. New Random password will be stored in final and then displayed on the screen.
    for (var p = 0; p < userEntry; p++) {  
      this.finalPassword.push(this.combineCharacters[Math.floor(Math.random() * this.combineCharacters.length)]);
        };
        // Using .join you can return the array as a string
        var final = this.finalPassword.join("");
        return final;
};