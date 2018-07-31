'use strict';

//Execute after DOM is loaded. Equivalent to document.ready on jQuery.
window.onload=function(){
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

  //Event listener for personal quiz. Opens up quiz about me.
  let quizButton = document.getElementById('myQuiz');
  if (quizButton){
    quizButton.addEventListener('click', myQuiz);
  }
};

//Grab user name if user inserted any text. If not, prompt for reload.
let userName = prompt('First thing\'s first. What would you like me to call you?');
if (userName) {
  userName = userName.toLowerCase();
  console.log(`User's name is ${userName}`);

  //Properly capitalize userName.
  var userNameCap = userName.charAt(0).toUpperCase() + userName.slice(1);
  alert(`Awesome. Welcome to my page ${userNameCap}!`);
} else{
  alert('Sorry, I did not quite get that. Could you please try again?');
  location.reload();
}

//Declare user score for later use
let score = 0;

//First Test question for user
const userTest = () => {
  let userResponse = prompt('Do you like cuttlefish? Answer Yes or No.').toLowerCase();
  if (userResponse === 'yes'){
    console.log(`${userNameCap} answers ${userResponse.toUpperCase()} to liking Cuttlefish. They're cool!`);
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

//Function for sorting the user into a school.
const sortUser = () => {
  let userSchool = prompt('Do you belong to Gryffindor, Slytherin, Hufflepuff, or Ravenclaw?').toLowerCase();

  //Capitalize first letter in string for more formal look
  let userSchoolCap = userSchool.charAt(0).toUpperCase() + userSchool.slice(1);

  //Check user input for desired school. Add point accordingly.
  if (userSchool === 'ravenclaw' || userSchool === 'hufflepuff' || userSchool === 'slytherin' || userSchool === 'gryffindor'){
    alert(`Wooo! ${userNameCap} earned 50 points to ${userSchoolCap}!`);
    score += 50;
  } else{
    alert(`Ooo...kay..? I guess 1 point to ${userSchoolCap}?`);
    score += 1;
  }
  console.log(`User score is now ${score}`);
};

//Function for quiz about me.
const myQuiz = () => {
  alert('These are a series of yes and no questions. Please answer accordingly!');

  //First Question block
  let phpResponse = prompt('Practice question! Is PHP the best language ever? :)').toLowerCase();
  console.log(`User's response to PHP question is ${phpResponse}`);
  if (phpResponse === 'yes'){
    alert('Umm.. Sure! I am always down to learn new things everyday!');
  } else if (phpResponse === 'no'){
    alert('To each their own! It is quite a running joke among my friends that are Facebook employees!');
  } else{
    alert('Please answer with yes or no! Click the button to try again.');
  }

  //Second Question Block
  let algoResponse = prompt('Do you think practicing algorithms are paramount to acing a tech interview?').toLowerCase();
  console.log(`User's response to algo question is ${algoResponse}`);

  if (algoResponse === 'yes'){
    alert('Yeah! I agree that it is super important. I do it all the time!');
  } else if (algoResponse === 'no'){
    alert('Really? That is news to me... I practice algos almost everyday!');
  } else{
    alert('Please answer with yes or no! Click the button to try again.');
  }

  //Third Question Block
  let marineResponse = prompt('Do you find marine life fascinating?').toLowerCase();
  console.log(`User's response to marine life question is ${marineResponse}`);

  if (marineResponse === 'yes'){
    alert('Yeah! I actually wanted to be a marine biologist since I was very young. I am planning to use my programming skills in the future to do ocean related work. I just do not know what yet!');
  } else if (marineResponse === 'no'){
    alert('Really? That is too bad... I love all sorts of ocean critters!');
  } else{
    alert('Please answer with yes or no! Click the button to try again.');
  }

  //Fourth Question Block
  let taiwanResponse = prompt('Have you ever been to Taiwan?').toLowerCase();
  console.log(`User's response to Taiwan question is ${taiwanResponse}`);

  if (taiwanResponse === 'yes'){
    alert(`Awesome ${userNameCap}! I am from Taiwan and I know for a fact that the food there is tough to beat!`);
  } else if (taiwanResponse === 'no'){
    alert('Aw... You should really clear out a schedule to visit the island! But then I am Taiwanese, so I am biased..');
  } else{
    alert('Please answer with yes or no! Click the button to try again.');
  }

  //Fifth Question Block
  let musicResponse = prompt('Do you enjoy listening to music?').toLowerCase();
  console.log(`User's response to music question is ${musicResponse}`);

  if (musicResponse === 'yes'){
    alert(`Awesome ${userNameCap}! I listen to music all the time, and my favorite genre is rock! I've been in multiple bands as a bassist and have been loving every minute of it!`);
  } else if (musicResponse === 'no'){
    alert('Oh no! I think you are missing out on a lot! Music definitely helps relieve stress or helps pump you up on occasions when you need an extra oomph! That is a big reason why I have played and practiced on a lot of mainstream instruments!');
  } else{
    alert('Please answer with yes or no! Click the button to try again.');
  }

  //Sixth Question Block
  let novelResponse = prompt('Do you enjoy reading fiction novels?').toLowerCase();
  console.log(`User's response to novel question is ${novelResponse}`);

  if (novelResponse === 'yes'){
    alert(`Awesome ${userNameCap}! One of my favorite novels growing up was Harry Potter! I actually waited for my acceptance letter when I was 10. But I guess I'm just a talentless muggle :(`);
  } else if (novelResponse === 'no'){
    alert('Perhaps you like nonfiction better? Either way, I think books are a great medium for expanding one\'s horizons, which is why I try to finish a book every month.');
  } else{
    alert('Please answer with yes or no! Click the button to try again.');
  }
};