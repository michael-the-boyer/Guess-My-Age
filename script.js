document.getElementById('button').addEventListener('click', addressGuess)

function addressGuess () {
  const randomAge = Math.floor(Math.random() * 98)
  const answer = document.getElementById('answer')
  
  answer.innerHTML = 'The game has started! Keep plugging in numbers in the given prompt and see how many guesses it takes!'
  let guess = prompt('Guess my age here!', randomAge)
  guess = parseInt(guess)
  while (guess !== randomAge) {
    if (guess < randomAge) {
      guess = prompt('Hmm, your guess is too low, try guessing higher.', randomAge)
      guess = parseInt(guess)
    } else if (guess > randomAge) {
      guess = prompt('Woah, your guess is too high! Lower! Lower!', randomAge)
      guess = parseInt(guess)
    } else {
      guess = prompt('Something went wrong, make sure you are plugging in a numerical value.', randomAge)
    }
  }
  answer.innerHTML = 'Wow, you got it! ' + randomAge + ' was my age! Click the button to play again!'
}
