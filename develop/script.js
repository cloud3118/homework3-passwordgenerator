// Character Variables
var passLength = "";
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

  var charLength = parseInt(prompt("How Many Characters Do You Want Your Password to Be?\n(Between 8-128)"));
   if (charLength >=8 && charLength <=128){
   passLength = charLength;
   console.log(charLength);
   }
  else {
    alert("Character Length Requirements Not Met");
    return("Start Over by Clicking 'Generate Password'");
  }
  
  var promptNumber = confirm("Include Numbers?");
  if (promptNumber === true) {
    allowedChars +- number;
    console.log("including numbers");
  }

  var promptUpperCase = confirm("Include Upper Case Letters?");
  if (promptUpperCase) {
    console.log("including Upper Case");
  }
  
  var promptLowerCase = confirm("Include Lower Case Letters?");
  if (promptLowerCase) {
    console.log("including lower case");
  }
  
  var promptSymbol = confirm("Include Symbols?");
  if (promptSymbol) {
    console.log("including symbols");
  }


  return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


