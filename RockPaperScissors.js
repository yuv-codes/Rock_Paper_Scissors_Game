let score = JSON.parse(localStorage.getItem('score')) ||
    {
      wins: 0,
      loses: 0, 
      ties: 0
    }
    updateScore();  
    
    function playGame(playerMove){
    const computerMove= pickComputerMove();

    let result = '';

    if(playerMove === 'Scissors'){
      if(computerMove === 'Rock'){
      result = 'You Lose'
    }else if(computerMove === 'Paper'){
      result = 'You Win'
    }else if(computerMove === 'Scissors'){
      result = 'Tie'
    }
    }
    else if(playerMove === 'Paper'){
      if(computerMove === 'Rock'){
      result = 'You Win'
    }else if(computerMove === 'Paper'){
      result = 'Tie'
    }else if(computerMove === 'Scissors'){
      result = 'You Lose'
    }
    }
    else if(playerMove === 'Rock'){
      if(computerMove === 'Rock'){
      result = 'Tie'
    }else if(computerMove === 'Paper'){
      result = 'You Lose'
    }else if(computerMove === 'Scissors'){
      result = 'You Win'
    }
    }
    if(result === 'You Win'){
      score.wins += 1;
    }
    else if(result === 'You Lose'){
      score.loses += 1;
    }
    else if(result === 'Tie'){
      score.ties += 1;
    }


    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.moves').innerHTML = `You <img src="${playerMove}-emoji.png" class="move"> <img src="${computerMove}-emoji.png"  class="move"> Computer`
      }

    function updateScore(){
      document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    }

    function pickComputerMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'Rock'
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'Paper'
    } else if(randomNumber >= 2/3 && randomNumber < 1){
      computerMove = 'Scissors'
    } 

    return computerMove;
    }