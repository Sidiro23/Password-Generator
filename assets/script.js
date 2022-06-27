
var generateBtn = document.querySelector("#generate");

//character Arrays
var smallLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
var special = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']
// variables that i will use in the function for user selections
var passwordLength;
var number;
var sletter;
var cletter;
var sCharacter;

//console.log(smallLetters)
//console.log(capitalLetters)
//console.log(numbers)
//console.log(special)


function generatePassword() {
  // user password length
  passwordLength = parseInt(prompt("Please enter how many characters you would like your password to be.Select between 8 to 128 characters."));
  // if to validate password length
  if (!passwordLength) {
      alert("This needs a value");
  } else if (passwordLength < 8 || passwordLength > 128) {
      // Validates password length
      // Continue to other selections
      passwordLength = parseInt(prompt("You must choose between 8 and 128"));
      
  } else {
      // Character selections after validation of length
      sletter = confirm("Select OK to include Small Letters or Cancel to proceed");
      cletter = confirm("Select OK to inlcude Capital Letters or Cancel to proceed");
      number = confirm("Select OK to include Numbers or Cancel to proceed");
      sCharacter = confirm("Select OK to include Special Characters or Cancel to proceed");
  };
  //console.log(sletter);
  //console.log(cletter);
  //console.log(number);
  //console.log(sCharacter);
  if (!passwordLength && !sletter && !cletter && !number && !sCharacter) {
    input = alert("You must choose a criteria!");
  //conslole.log(passwordLength);
}
  // if statements after collecting user criteria to generate password and rearrange Arrays based on selected criteria
  // Else if for all 4 criteria selected
else if (sletter && cletter && number && sCharacter) {

    input = smallLetters.concat(capitalLetters, numbers, special);
}
// Else if for 3 out 4 criteria selected
else if (sletter && cletter && number) {
    input = smallLetters.concat(capitalLetters, numbers);
}
else if (sletter && cletter && sCharacter) {
  input = smallLetters.concat(capitalLetters, special);
}
else if (sletter && number && sCharacter) {
  input = smallLetters.concat(numbers, special);
}
else if (cletter && number && sCharacter) {
  input = capitalLetters.concat(numbers, special);
}
// Else if for 2 out of 4 criteria selected
else if (sletter && cletter) {
  input = smallLetters.concat(capitalLetters);

} else if (sletter && number) {
  input = smallLetters.concat(numbers);

} else if (sletter && sCharacter) {
  input = smallLetters.concat(special);
}
else if (cletter && number) {
  input = capitalLetters.concat(numbers);

} else if (cletter && sCharacter) {
  input = capitalLetters.concat(special);

} else if (number && sCharacter) {
  input = numbers.concat(special);
}
// Else if for 1 out of 4 criteria selected
else if (sletter) {
    input = smallLetters;
}
else if (cletter) {
  input = capitalLetters;
}
else if (number) {
  input = numbers;
}

else if (sCharacter) {
  input = special;
};
//console.log(input);
var password = [];


//generate password using criteria from input & selecting characters from valid arrays(generated from input)
for (var i = 0; i < passwordLength; i++) {
  var selection = input[Math.floor(Math.random() * input.length)];
  password.push(selection);
  // used an additional variable to remove commas from the password after web research on W3 Schools & MDN
  var password1 = password.join('')

}
return password1;


}


// Write password to the #password input
function writePassword() {
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password1;
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);