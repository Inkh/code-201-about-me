'use strict';

//Prompt for userName. Have them type in at least something to continue to the content.
let nameEntered = false;
while (!nameEntered){
  let userName = prompt('First thing\'s first. What would you like me to call you?');
  if (userName){
    nameEntered = true;
    userName = userName.toLowerCase();
    var userNameCap = userName.charAt(0).toUpperCase() + userName.slice(1);
    console.log(`User's name is ${userNameCap}`);
    alert(`Awesome! Welcome ${userNameCap}!`);
  } else{
    alert('Enter your name... Pretty please?');
  }
}


//Array of Questions for personal quiz
let personalQuiz = ['Practice question! Is PHP the best language ever? :)','Do you think practicing algorithms are paramount to acing a tech interview?','Do you find marine life fascinating?','Have you ever been to Taiwan?','Do you enjoy listening to music?','Do you enjoy reading fiction novels?'];
