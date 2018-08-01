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


//151 Pokemon Species exist in the Kanto region
let kantoPokemonCount = 151;

//Checker for Pokemon Game Loop.
let pokemonGuess = false;

while (pokemonGuess === false){
  let userPokemonGuess = prompt('Think you know your Pokemon? Alrighty then. Let\'s try something simple. How many Pokemon species are in the Kanto region? Take a shot!');
  if (userPokemonGuess < kantoPokemonCount){
    alert('Nope. It\'s more than that pal.');
  } else if (userPokemonGuess > kantoPokemonCount) {
    alert('Try again. You\'re too ambitious with your numbers');
  } else{
    pokemonGuess = true;
    alert(`Bravo ${userNameCap}!! Well done. You are definitely on your way to becoming Champion.`);
  }
}


//Array of Questions for personal quiz
let personalQuiz = ['Practice question! Is PHP the best language ever? :)','Do you think practicing algorithms are paramount to acing a tech interview?','Do you find marine life fascinating?','Have you ever been to Taiwan?','Do you enjoy listening to music?','Do you enjoy reading fiction novels?'];
