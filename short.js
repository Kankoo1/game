const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput==='rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb') {
      return userInput;
    } else {
      //use return to pass it as value
      console.log('Error, Please type: paper, rock or scissors');
    }
  };
  // console.log(getUserChoice('paper'));
  // console.log(getUserChoice('scissors'));
  // console.log(getUserChoice('rock'));
  // console.log(getUserChoice('bomb'));
  // console.log(getUserChoice('pen'));
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() *3));
    // console.log(randomNumber);
    switch (randomNumber) {
      case 0: 
      return 'paper';
      case 1:
      return 'scissors';
      case 2:
      return 'rock';
    }
  };
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  // console.log(getComputerChoice());
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice===computerChoice) {
      return 'This game ends tie!';
    }
    if (userChoice==='rock') {
        if (computerChoice==='paper') {
          return "Sorry, Computer won!";
        } else {
          return "Congratulation, you won!";
      }
    }
  
    if (userChoice==='paper') {
        if (userChoice==='scissors') {
          return "Congratulation, you won!";
        } else {
          return 'Sorry, Computer won!';
        }
      };
    if (userChoice==='scissors') {
          if(computerChoice==='rock') {
            return 'Sorry, Computer won!';
          } else {
            return 'Congratulation, You won!';
          }
        }
    if (userChoice==='bomb') {
      return 'Congratulation, you won!'
    }
      };
      // console.log(determineWinner('paper','rock'));
      // console.log(determineWinner('rock', 'paper'));
      // console.log(determineWinner('rock', 'rock'));
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice();
    console.log('you threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  playGame()
  
  
  