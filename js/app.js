'use strict';


console.log('hai');

//First Test question for user
function userTest(){
    let userResponse = prompt('Do you like cuttlefish? Answer Yes or No.').toLowerCase();
    if (userResponse === 'yes'){
        console.log('well of course!');
        alert('Correct! You\'re awesome. Let\'s continue to the real thing now!');
        document.getElementById('userContinue').innerHTML = 'Booyah!';
    } else if(userResponse === 'no'){
        console.log('bah, you suck');
    } else{
        console.log('please insert a valid response');
    }
}

