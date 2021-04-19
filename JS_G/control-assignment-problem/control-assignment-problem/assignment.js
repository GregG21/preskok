const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// if(randomNumber > 0.7) alert('Greater than 0.7')
const secondRandomNumber = Math.random();
if (randomNumber > 0.7 && secondRandomNumber > 0.7) {
  alert("Both greater than 0.7");
}

let randomNumbers = [];

for (let i = 0; i < 10; i++) {
  const randomNumb = Math.floor(Math.random() * 10);
  randomNumbers.push(randomNumb);
}

for (let i = randomNumbers.length - 1; i >= 0; i--) {
  console.log(randomNumbers[i]);
}

console.log("New array starts here");
for (const element of randomNumbers) {
  console.log(element);
}
