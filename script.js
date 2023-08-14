// RANDOM PASSWORD GENERATOR

/*  Queryselector methods 
selects the elements with id generate from the dom and 
store in the generatebtm variable */
var generateBtn = document.querySelector("#generate");


// 
function writePassword() {
  // call the generatepassword function to generate the password
  var password = generatePassword();
  // find the html element with password id
  var passwordText = document.querySelector("#password"); 
  // set the value of html element to the password
  passwordText.value = password;
  
}

function generatePassword() {

  // parseint convert the string value from user to integer value
  const length =parseInt(prompt("please enter the password length between 8-128"));

  // if condition to check to length validity from user,isNan check the validity of the input value.
  if (isNaN(length) || length < 8 || length > 128){
    alert("Please enter the valid password length");
    return "";
  }

  // we use confirm() method to ask user for uppercase, lowercase, special characters with dialog box in the window.

  const includeuppercase = confirm ("Do you want upper case in your password?");
  const includelowercase = confirm ( "Do you want lower case in your password?");
  const includespecial = confirm ("Do you want special char in your password?");
  const includeNumber = confirm ("Do you want number in your password?");
  
// verify for atleast one character type for the password
  if(!includeuppercase && !includelowercase && !includespecial && !includeNumber) {
    alert ("Please select atleast one character type");
    return "";
  }
  // assigning const variables for types of characters
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+";

  // concaneate the specfic character set if the condition is met,intial value as empty string
  let all= "";
  if (includeuppercase) all += uppercaseChars;
  if (includelowercase) all += lowercaseChars;
  if (includespecial) all += specialChars;
  if (includeNumber) all += numberChars;

  // math.random generate random floating point numbers that scaled the range of the indices in the all string ,
  // while math.floor converts into integer number,password store the value ,charAt method extract the character at specfic index
  // and the password is stored and return.
  let password = "";
  for (let i=0; i<length; i++) {
    const randindex = Math.floor(Math.random()* all.length);
    password += all.charAt(randindex);
  }
  return password;
}
// Add event listener to generate button and the function executed when clicked
generateBtn.addEventListener("click", writePassword);



