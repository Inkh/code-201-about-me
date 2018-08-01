'use strict';

//151 Pokemon Species exist in the Kanto region
let kantoPokemonCount = 151;

//Checker for Pokemon Game Loop.
let pokemonGuess = false;

//Pokemon guessing Game
while (pokemonGuess === false){
  let userPokemonGuess = prompt('Think you know your Pokemon? Alrighty then. Let\'s try something simple. How many Pokemon species are in the Kanto region? Take a shot!');
  if (userPokemonGuess < kantoPokemonCount){
    console.log(`User inputs ${userPokemonGuess} for pokemon species guess.`);
    alert('Nope. It\'s more than that pal.');
  } else if (userPokemonGuess > kantoPokemonCount) {
    console.log(`User inputs ${userPokemonGuess} for pokemon species guess.`);
    alert('Try again. You\'re too ambitious with your numbers');
  } else{
    pokemonGuess = true;
    console.log(`User inputs ${userPokemonGuess} for pokemon species guess.`);
    alert('Bravo!! Well done. You are definitely on your way to becoming Champion.');
  }
}

document.getElementById('result').innerHTML = 'Congrats trainer, but it is now time to head on out of here and conquer Johto. <a href="https://bulbapedia.bulbagarden.net/wiki/Johto">Here</a> is the road map from Bulbapedia!';
