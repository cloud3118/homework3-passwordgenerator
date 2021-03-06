// Character Variables
var number = "0123456789";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var symbol = "~!@#$%^&*_+=";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var finalPassword = "";
  var allowedChars = "";

  //setting up prompts for input
  
  var randChar = "";
  
  var charLength = parseInt(prompt("How Many Characters Do You Want Your Password to Be?\n(Between 8-128)"));
   if (charLength >=8 && charLength <=128){
   passLength = charLength;
   }

  else {
    alert("Character Length Requirements Not Met");
    return "Start Over by Clicking Generate Password";
  }

  var promptNumber = confirm("Include Numbers?");
  if (promptNumber) {
    allowedChars += number;
    randChar += number[Math.floor(Math.random() * number.length)];
  }

  var promptUpperCase = confirm("Include Upper Case Letters?");
  if (promptUpperCase) {
    allowedChars += upperCase;
    randChar += upperCase[Math.floor(Math.random() * upperCase.length)];
  }
  
  var promptLowerCase = confirm("Include Lower Case Letters?");
  if (promptLowerCase) {
    allowedChars += lowerCase;
    randChar += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  }
  
  var promptSymbol = confirm("Include Symbols?");
  if (promptSymbol) {
    allowedChars += symbol;
    randChar += symbol[Math.floor(Math.random() * symbol.length)];
  }

  if (promptNumber || promptUpperCase || promptLowerCase ||promptSymbol) {
  }
  else {
    alert("Must Choose AT LEAST 1 Character Type!");
    return "Start Over by Clicking Generate Password";
  }
  
  //Loop to grab random characters
 
  for (let i = randChar.length; i < charLength; i++) {
    randChar += allowedChars[Math.floor(Math.random() * allowedChars.length)]
  }
  
  //passing the characters to the Final Password

  finalPassword = randChar


  return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


