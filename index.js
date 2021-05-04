// Instructions
// - Show the user 4 random numbers between 1 and 100
// have a var that has a random number between 1 and 100
let randomNumbers = []

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i=1; i<=4; i++ ) {
  let number = getRandomInt(100)+1
  randomNumbers.push(number)
}

//show to user the 4 random numbers
alert(`How many of these numbers will you remember after you press "Ok"?:  ${randomNumbers}`) //user sees the numbers


// - After 15 seconds, 
// ask them to enter each number in order
let userTypedNumbers
function askTheNumbers() {
  let usersNumbers = prompt(`Can you write the numbers in order?`)
  userTypedNumbers = usersNumbers.split(" ").map(Number) 

  console.log(`These are the user typed numbers: `, userTypedNumbers) 
  checkMatches() //function in full follows this one. We need to use it here, inside this one. so it runs at the right moment in time. 
}  

// - Let them know how many they got right!
function checkMatches() {
  let counter = 0;
  for (let i = 0; i < randomNumbers.length; i++) {
    const number = randomNumbers[i];     //use i also to point to a specific element into the array
    const guess = userTypedNumbers[i];   // same here
    if (guess === number) {              //if the 2 element in the same position inside the 2 arrays, match, then..
      counter += 1;                      // then +1 al counter 
    }
  }
  alert(`You gave ${counter} correct answers.`)
}

setTimeout(askTheNumbers, 4000)

