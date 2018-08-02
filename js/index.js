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

alert('Since I love Harry Potter, I am going to force you through this quiz... For now.');

//User score
let score = 0;

let wizQuiz = ['Do you belong to Gryffindor, Slytherin, Hufflepuff, or Ravenclaw?', 'Is it safe to approach a Hippogriph and tease it? Yes or No.', 'Question 2! Yes or No. Does a wizard need a special license to sell or export Fire crabs?'];

let quizAnswer = [['ravenclaw', 'hufflepuff', 'slytherin', 'gryffindor'], ['no', 'That would be correct. Hippogriphs are proud creatures, and let\'s not forget what happened to Malfoy...','any answer other than a no is... Is just... Well, bad.'], ['yes', 'Correct! Fire crabs can be especially dangerous if not handled properly.', 'looks like you need to retake the Fourth year.' ]];

//Quiz on Harry Potter knowledge.
for (let i = 0;i < wizQuiz.length;i++){
  let userResponse = prompt(wizQuiz[i]).toLowerCase();
  console.log(`User's response is ${userResponse}`);
  if (i === 0){
    if (quizAnswer[i].includes(userResponse)){
      var userSchool = userResponse.charAt(0).toUpperCase() + userResponse.slice(1);
      alert(`Wooo! ${userNameCap} earned 50 points to ${userSchool}! Now the house of ${userSchool} is close to winning this year!`);
      score += 50;
    } else{
      alert('Last I checked there are only four houses in Hogwarts. Try again..');
      i--;
    }
  } else{
    if (userResponse === quizAnswer[i][0]){
      console.log(`Current question: ${wizQuiz[i]}, User's response: ${userResponse}`);
      alert(`${quizAnswer[i][1]} 50 points to ${userSchool}!`);
      score += 50;
      console.log(`User's score is now ${score} out of ${wizQuiz.length * 50}`);
    } else{
      console.log(`Current question: ${wizQuiz[i]}, User's response: ${userResponse}`);
      alert(`Not sure what gibberish you're spewing, but ${quizAnswer[i][2]}. Minus 50 points to ${userSchool}`);
      score -= 50;
      console.log(`User's score is now ${score} out of ${wizQuiz.length * 50}`);
    }
  }
  if (score < 0){
    alert(`Stop. Stop! You're now down ${Math.abs(score)} points. You're costing ${userSchool} too many points! I'm afraid I must expel you from this instance. ..Get it? Instance! `);
  }
}

//Array of Questions for personal quiz
let personalQuiz = ['Practice question! Is PHP the best language ever? :)','Do you think practicing algorithms are paramount to acing a tech interview?','Do you find marine life fascinating?','Have you ever been to Taiwan?','Do you enjoy listening to music?','Do you enjoy reading fiction novels?'];
