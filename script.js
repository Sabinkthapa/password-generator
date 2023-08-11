

/*  Queryselector methods 
selects the elements with id generate from the dom and 
store in the generatebtm variable */
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  // we need to prompt the series of criteria for password like length between 8-128, uppercase,lowercase, special characters
  const length =prompt ("please enter the password length between 8-128");
  // if condition to check to length validity from user 
  if (length < 8 || length > 128)
  alert("Please enter the valid password length");
  return "";

  // we use confirm() function to ask user for uppercase, lowercase, special characters in the passord
  const uppercase_inthepassword = confirm("Do you want upper case in your password?");
  const lowercase_inthepassword = confirm("Do you want lower case in your password?");
  const specialcharater_inthepassword = confirm("Do you want special char in your password?");
  const Number_inthepassword = confirm("Do you want number in your password?");

}


// Add event listener to generate button and the function executed when clicked
generateBtn.addEventListener("click", writePassword);
