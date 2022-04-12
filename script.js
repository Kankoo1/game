// console.log("How are you doing today?");
// alert('welcome');
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput==='rock' || userInput==='paper' || userInput ==='scissors' || userInput==='bomb') {
       return userInput;
    }
    else {
        return 'Error, Please type: paper, rock or scissors!';
    }
}
// console.log(getUserChoice('rock'));
// console.log(getUserChoice('paper'));
// console.log(getUserChoice('scissors'))
const getComputerChoice = () => {
    const randomNumber = Math.floor (Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
};
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice==='bomb') {
      return 'Congratulation, you won!'
  }
  if (userChoice === computerChoice) {
       return "The game ends tie!"
  }
    if (userChoice==='rock') {
        if (computerChoice==='paper') {
            return "Sorry, Computer won"
        }
    }
    if (userChoice==='paper') {
        if (computerChoice==='rock') {
            return "Congratulation, you won"
        }
    } 
    if (userChoice==='scissors') {
        if (computerChoice==='rock') {
            return "Sorry, Computer won"
        }
    }
    if (userChoice==='rock') {
        if (computerChoice==='scissors') {
            return "Congragulation, you won"
        }
    }
    if (userChoice==='scissors') {
        if(computerChoice==='paper') {
            return 'Congratulation, you won'
        }
        
    }
}
// console.log(determineWinner('scissors', 'paper'));
const playGame = () => {
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
    console.log('you threw: ' + userChoice);
    console.log('computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
 playGame();