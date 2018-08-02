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

let wizQuiz = ['Do you belong to Gryffindor, Slytherin, Hufflepuff, or Ravenclaw?', 'Is it safe to approach a Hippogriph and tease it? Yes or No.', 'Question 2! Yes or No. Does a wizard need a special license to sell or export Fire crabs?', 'Question 3! What are Flobberworms more inclined to eat: Lettuce or steak?'];

let quizAnswer = [['ravenclaw', 'hufflepuff', 'slytherin', 'gryffindor'], ['no', 'That would be correct. Hippogriphs are proud creatures, and let\'s not forget what happened to Malfoy...','any answer other than a no is... Is just... Well, bad.'], ['yes', 'Correct! Fire crabs can be especially dangerous if not handled properly.', 'looks like you need to retake the Fourth year.' ],['lettuce', 'Yup, Flobberworms are herbivorous and love to eat. So be careful not to overfeed!','really? The lack of teeth should have given you a hint about their eating habits...']];

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
    break;
  }
}

if (score === wizQuiz.length * 50){
  alert(`You've done a splendid job, ${userNameCap}! You've earned a perfect score of ${score}, and have led ${userSchool} to victory! Looking forward to seeing you next year. Now off you go!`);
} else if (score < 0){
  alert(`Are you sure you really got an acceptance letter ${userNameCap}? You've scored ${score} out of ${wizQuiz.length * 50}`);
} else{
  alert(`Unfortunately you only scored ${score} out of ${wizQuiz.length * 50}, and ${userSchool} has lost to ${quizAnswer[0][Math.floor(Math.random()*quizAnswer.length)]} this year. Work harder during the Summer!`);
}

//HP trivia question
alert(`Now a trivia question for you, ${userNameCap}. Name all the most notable characters in Gryffindor you can think of! You got 5 attempts! Please just supply the first name for now.`);

let gryffindorCharacters = ['harry', 'hermione', 'ron', 'albus', 'sirius', 'remus', 'fred', 'george'];
let correctGuessCounter = 0;

for (let j = 0;j < 6;j++){
  let userGuess = prompt('Guess now!').toLowerCase();
  if (gryffindorCharacters.includes(userGuess)){
    alert(`Indeed! ${userGuess} was an important character!`);
    let index = gryffindorCharacters.indexOf(userGuess);
    console.log(`${gryffindorCharacters[index]} is about to be removed`);
    gryffindorCharacters.splice(index,1);
    console.log(`Updated list: ${gryffindorCharacters}`);
    correctGuessCounter++;
  } else {
    alert(`Oh no... No no. Try again ${userNameCap}!`);
  }
  // var remainder = gryffindorCharacters.join(', ');
}

alert(`Done deal, ${userNameCap}. Here are some potential other characters: ${gryffindorCharacters.join(', ')}. I would give you ${correctGuessCounter*50} points for the ${correctGuessCounter} people you got right, but school has already ended. So tough luck!`);

alert(`Okay okay. Thanks ${userNameCap} for still going through these without killing your browser. As a reward, here's one more!`);

//Array of Questions for personal quiz
let personalQuiz = ['Do you like cuttlefish?', 'Practice question! Is PHP the best language ever? :)','Do you think practicing algorithms are paramount to acing a tech interview?','Do you find marine life fascinating?','Have you ever been to Taiwan?','Do you enjoy listening to music?','Do you enjoy reading fiction novels?'];

let personalQuizAnswer = [['Yippie!', 'B-b-but how can you not!?'], ['Umm.. Sure! I am always down to learn new things everyday!', 'To each their own! It is quite a running joke among my friends that are Facebook employees!'], ['Yeah! I agree that it is super important. I do it all the time!', 'Really? That is news to me... I practice algos almost everyday!'], ['Super! I actually wanted to be a marine biologist since I was very young. I am planning to use my programming skills in the future to do ocean related work. I just do not know what yet!', 'Hmm.. That is too bad... I love all sorts of ocean critters!'],['Awesome! I am from Taiwan and I know for a fact that the food there is tough to beat!', 'Aw... You should really clear out a schedule to visit the island! But then I am Taiwanese, so I am biased..'], ['Cool! I listen to music all the time, and my favorite genre is rock! I\'ve been in multiple bands as a bassist and have been loving every minute of it!', 'Oh no! I think you are missing out on a lot! Music definitely helps relieve stress or helps pump you up on occasions when you need an extra oomph! That is a big reason why I have played and practiced on a lot of mainstream instruments!'], ['You do? Nice! One of my favorite novels growing up was Harry Potter! I actually waited for my acceptance letter when I was 10. But I guess I\'m just a talentless muggle :(', 'Perhaps you like nonfiction more? Either way, I think books are a great medium for expanding one\'s horizons, which is why I try to finish a book every month.']];

//Personal Quiz loop
for (let k = 0;k < personalQuiz.length;k++){
  let userResponse = prompt(personalQuiz[k]).toLowerCase();
  console.log(`User's response is ${userResponse}`);
  if (userResponse[0] === 'y'){
    console.log(`Current question: ${personalQuiz[k]}, User's response: ${userResponse}`);
    alert(`${personalQuizAnswer[k][0]}`);
  } else if (userResponse[0] === 'n'){
    console.log(`Current question: ${personalQuiz[k]}, User's response: ${userResponse}`);
    alert(`${personalQuizAnswer[k][1]}`);
  } else {
    alert('Please fill in a valid YES or NO response and try again..');
    k--;
  }
}

alert('Wooowee... That was a handful huh... Well, enjoy the rest of the site!');