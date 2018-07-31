'use strict';

//Declare user score for later use
let score = 0;

//First Test question for user
const userTest = () => {
  let userResponse = prompt('Do you like cuttlefish? Answer Yes or No.').toLowerCase();
  if (userResponse === 'yes'){
    console.log(`User answers ${userResponse.toUpperCase()}! They're cool!`);
    alert('Correct! You\'re awesome. Let\'s continue to the real thing now!');
    document.getElementById('sortingHat').innerHTML = 'Just kidding. One more thing! Let us choose your school first!';
    document.getElementById('userSort').innerHTML = '<button onClick="sortUser()">Sort now!</button>';

  } else if (userResponse === 'no'){
    console.log(`User answers ${userResponse.toUpperCase()}... They won't go far.`);
    alert('What!? No!? Abort! Abort! You are not worthy to continue!');
  } else{
    console.log(`User answers with ${userResponse}... I don't even..`);
    alert('Really? You can\'t follow some simple instruction!? Start over!');
  }
};


const sortUser = () => {
  let userSchool = prompt('Do you belong to Gryffindor, Slytherin, Hufflepuff, or Ravenclaw?').toLowerCase();

  //Capitalize first letter in string for more formal look
  let userSchoolCap = userSchool.charAt(0).toUpperCase() + userSchool.slice(1);

  //Check user input for desired school. Add point accordingly.
  if (userSchool !== 'ravenclaw' || userSchool !== 'hufflepuff' || userSchool !== 'slytherin' || userSchool !== 'gryffindor'){
    alert(`Ooo...kay..? I guess 1 point to ${userSchoolCap}`);
    score += 1;
  } else{
    alert(`Wooo! 50 points to ${userSchoolCap}!`);
    score += 50;
  }
  console.log(`User score is now ${score}`);
};
