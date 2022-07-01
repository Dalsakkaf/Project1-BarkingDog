// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecial;

var choices;


upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "r", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = password;

};
// the prompts for the length of the password, must be within the parameters of 8-128 charcters 
function generatePassword() {
  passwordLength = prompt("How long is your password?");
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("u done messed up");
  } else {
    confirmUppercase = confirm("Include Uppercase?");
    confirmLowercase = confirm("Include Lowercase?");
    confirmNumbers = confirm("Include Numerical?");
    confirmSpecial = confirm("Include Special?");
  };
  if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSpecial) {
    decision = alert("BE DECISIVE!");
  }
  else if (confirmUppercase && confirmLowercase && confirmNumbers && confirmSpecial) {
    decision = special.concat(upperCase, lowerCase, number);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = special.concat(number, upperCase);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = special.concat(number, lowerCase);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = special.concat(lowerCase, upperCase);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(lowerCase, upperCase);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
    choices = special.concat(number);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = special.concat(lowerCase);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = special.concat(upperCase);
  }
  else if (confirmLowercase && confirmNumber) {
    choices = lowerCase.concat(number);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = lowerCase.concat(upperCase);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(upperCase);
  }
  // Else if for 1 positive option
  else if (confirmspecial) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = lowerCase;
  };
  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  };

  return giveMe(password);
gi
};

function giveMe(password) {
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

};


// these prompts 



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters YES!
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page