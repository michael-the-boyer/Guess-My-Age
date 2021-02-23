document.getElementById('button').addEventListener('click', addressGuess)

function addressGuess () {
  let randomAge = Math.floor(Math.random()*98)
  let answer = document.getElementById('answer')
  answer.innerHTML = 'The game has started! Keep plugging in numbers in the given prompt and see how many guesses it takes!'
  var guess = prompt('Guess my age here!', 'Type my age here!')
  while (guess != randomAge) {
    if (guess < randomAge) {
      guess = prompt('Hmm, your guess is too low, try guessing higher.', 'Try a higher guess.')
    } else if (guess > randomAge) {
      guess = prompt('Woah, your guess is too high! Lower! Lower!', 'Try a lower guess.')
    } else {
      guess = prompt('Something went wrong, make sure you are plugging in a numerical value.', 'Try a number.')
    }
  }
  answer.innerHTML = 'Wow, you got it! ' + randomAge + ' was my age! Click the button to play again!'
}
