'use strict'

Get the user's name
var userName = prompt('Excuse me, who is you?')

alert('Ugh, ' + userName + ', it\'s you again. Soooo, since i\'m obviously a celebrity, i\'m going to ask you 5 yes or no questions about myself. If you fail, you\'ll owe me 5 dollars. If you get it right, then you still owe me 5 dollars.')

// Ask them five yes/no questions
var answerOne = prompt('Is Erik\'s favorite color fuchsia?').toLowerCase()

if (answerOne === 'n' || answerOne === 'no') {
  alert('Alright, great, 4 more questions!')
} else {
  alert('FAILED! Try again, or don\'t... and go do something productive. Don\'t forget about my 5 dollars.')
}
console.log(userName + ' was asked if erik\'s favorite color Fuchsia. ' + userName + ' responded ' + answerOne)

var answerTwo = prompt('Has Erik been in international news?').toLowerCase()

if (answerTwo === 'y' || answerTwo === 'yes') {
  alert('Yeah, unfortunately it was an embarrising moment... it was 6 months of horrible memes.')
} else {
  alert('FAILED! Try again, or don\'t... and go do something productive. Don\'t forget about my 5 dollars.')
}
console.log(userName + ' was asked if Erik was in international news. ' + userName + ' responded ' + answerTwo)

var answerThree = prompt('Can Erik do a double backflip?').toLowerCase()

if (answerThree === 'n' || answerThree === 'no') {
  alert('If you count him landing on his face after the first flip then yes...')
} else {
  alert('FAILED! Try again, or don\'t... and go do something productive. Don\'t forget about my 5 dollars.')
}
console.log(userName + ' was asked if Erik can do a double backlfip. ' + userName + ' responded ' + answerThree)

var answerFour = prompt('Does Erik a homeowner?').toLowerCase()

if (answerFour === 'n' || answerFour === 'no') {
  alert('You guess correctly, he\'s broke... the closest he is to owning a home is the cardboard box he still haven\'t thrown away yet. I probably should throw that away.')
} else {
  alert('FAILED! Try again, or don\'t... and go do something productive. Don\'t forget about my 5 dollars.')
}
console.log(userName + ' was asked if Erik is a homeowner. ' + userName + ' responded ' + answerFour)

var answerFive = prompt('Has Erik gone skydiving?').toLowerCase()

if (answerFive === 'y' || answerFive === 'yes') {
  alert('Uh, no. People don\'t fly.)
} else {
  alert('FAILED! Try again, or don\'t... and go do something productive. Don\'t forget about my 5 dollars.')
}
console.log(userName + ' was asked if Erik has gone skydiving. ' + userName + ' responded ' + answerFive)

var guesses = 4;
while(guesses > 0) { //When guesses reach zero, program stops.
  var answerSix = parseInt(prompt('How old is Erik?')); // converting string to number w/ parseInt()
  console.log(answerSix);
  if(answerSix === 27) { // If answer is correct
    alert('Um, I feel like I turned 21... 7 times.');
    break; //breaks loop
  } else {
    guesses = guesses - 1; //giving the variable guess a new number
    if (answerSix > 27) {
      alert('too high, try a little lower.');
    } else {
      alert('too low, try a little higher.');
    }
  }
}

var opSystem = ['windows', 'os x'];
var tF = true;
var qGuess = 0;

while(qGuess < 6){
  var answerSeven = prompt('Can you guess what operating systems I know?').toLowerCase();

  console.log(answerSeven);
  for(var j = 0; j < 2; j++) {

    if (answerSeven === opSystem[j]) { //if answer equals to one answer in array
    alert('Good job!');

    break;
  } else {
    qGuess ++;
    alert('try again!');
  }
}
}

// var opSystem = ['windows', 'os x'];
// var tF = true;
// var qGuess = 6;

// while(qGuess < 7){
// var answerSeven = prompt('Can you guess what operating systemsI know?').toLowerCase();
//   console.log(answerSeven);
//   for(i = 0; i < 2; i++){
//   if (answerSeven === opSystem[j])
//   }
  }