'use strict';

//Execute after DOM is loaded. Equivalent to document.ready on jQuery.
window.onload=function(){
  //Grab user name if user inserted any text. If not, prompt for reload.
  let userName = prompt('First thing\'s first. What would you like me to call you?');
  if (userName) {
    userName = userName.toLowerCase();
    console.log(`User's name is ${userName}`);

    //Properly capitalize userName.
    let userNameCap = userName.charAt(0).toUpperCase() + userName.slice(1);
    alert(`Awesome. Welcome to my page ${userNameCap}!`);
  } else{
    alert('Sorry, I did not quite get that. Could you please try again?');
    location.reload();
  }

  //Event listener for test button press. Opens up test question for user.
  let userTestButton = document.getElementById('userTestButton');
  if (userTestButton){
    userTestButton.addEventListener('click', userTest);
  }

  //Event listener for sorting. Opens up sorting prompt for user.
  let sortingButton = document.getElementById('userSort');
  if (sortingButton){
    sortingButton.addEventListener('click', sortUser);
  }
};

//Declare user score for later use
let score = 0;

//First Test question for user
const userTest = () => {
  let userResponse = prompt('Do you like cuttlefish? Answer Yes or No.').toLowerCase();
  if (userResponse === 'yes'){
    console.log(`User answers ${userResponse.toUpperCase()} to liking Cuttlefish. They're cool!`);
    alert('Correct! You\'re awesome. Let\'s continue to the real thing now!');

    //Generate instructions and corresponding button.
    document.getElementById('sortingHat').innerHTML = 'Just kidding. One more thing! Let us choose your school first!';
    document.getElementById('userSort').innerHTML = '<button id="sortUser()">Sort now!</button>';
  } else if (userResponse === 'no'){
    console.log(`User answers ${userResponse.toUpperCase()} to Cuttlefish... They won't go far.`);
    alert('You are such a rebel. Unfortunately I cannot let you go on with that response.');
  } else{
    console.log(`User answers with ${userResponse}... I don't even..`);
    alert('Ummm... I was expecting a yes or no. Try again!');
  }
};


const sortUser = () => {
  let userSchool = prompt('Do you belong to Gryffindor, Slytherin, Hufflepuff, or Ravenclaw?').toLowerCase();

  //Capitalize first letter in string for more formal look
  let userSchoolCap = userSchool.charAt(0).toUpperCase() + userSchool.slice(1);

  //Check user input for desired school. Add point accordingly.
  if (userSchool === 'ravenclaw' || userSchool === 'hufflepuff' || userSchool === 'slytherin' || userSchool === 'gryffindor'){
    alert(`Wooo! 50 points to ${userSchoolCap}!`);
    score += 50;
  } else{
    alert(`Ooo...kay..? I guess 1 point to ${userSchoolCap}?`);
    score += 1;
  }
  console.log(`User score is now ${score}`);
};