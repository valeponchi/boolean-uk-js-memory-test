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

alert(`Memorize these random numbers:  ${randomNumbers}`) //user sees the numbers


//repeat this 4 times
//show to user the 4 random numbers

// const randomNumbers = [23, 45, 76, 89]  //creo array coi random numeri



// - After 15 seconds, 
// ask them to enter each number in order
let userTypedNumbers = []
function askTheNumbers() {
  let usersNumbers = prompt(`Can you write the numbers in order?`)
  usersNumbers = usersNumbers.split(" ") //gives me an array with inside the array with the numbers typed
  return userTypedNumbers.push(usersNumbers)
}  
setTimeout(askTheNumbers, 2000)
console.log(`These are the user typed numbers: `, userTypedNumbers) //the array with the User typed numbers



// - Let them know how many they got right!


// DOESN'T WORK :
// let correctNumbers = userTypedNumbers.filter(function (number){return number === randomNumbers})
// setTimeout(alert(correctNumbers), 2000)





// DOMANDE: 
// perche mi da un array con dentro un array con i numeri dell User 
// l ultimo alert avviene prima che l user metta i numeri e non funziona nemmeno