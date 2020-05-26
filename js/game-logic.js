// 12 Global Variables:

let playerOneMoveOneType
let playerOneMoveOneValue
let playerOneMoveTwoType
let playerOneMoveTwoValue
let playerOneMoveThreeType
let playerOneMoveThreeValue
let playerTwoMoveOneType
let playerTwoMoveOneValue
let playerTwoMoveTwoType
let playerTwoMoveTwoValue
let playerTwoMoveThreeType
let playerTwoMoveThreeValue


const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {

  if (player !== 'Player One' && player !== 'Player Two') {
    playerOneMoveOneType = 'INVALID'
    playerOneMoveOneValue = 'INVALID'
    playerOneMoveTwoType = 'INVALID'
    playerOneMoveTwoValue = 'INVALID'
    playerOneMoveThreeType = 'INVALID'
    playerOneMoveThreeValue = 'INVALID'
    playerTwoMoveOneType = 'INVALID'
    playerTwoMoveOneValue = 'INVALID'
    playerTwoMoveTwoType = 'INVALID'
    playerTwoMoveTwoValue = 'INVALID'
    playerTwoMoveThreeType = 'INVALID'
    playerTwoMoveThreeValue = 'INVALID'
    return
  }

  if (player === 'Player One') {
    if (
      (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') &&
      (moveOneValue > 0 && moveOneValue < 99)
    ) {
      playerOneMoveOneType = moveOneType
      playerOneMoveOneValue = moveOneValue
    } else {
      playerOneMoveOneType = 'INVALID'
      playerOneMoveOneValue = 'INVALID'
      playerOneMoveTwoType = 'INVALID'
      playerOneMoveTwoValue = 'INVALID'
      playerOneMoveThreeType = 'INVALID'
      playerOneMoveThreeValue = 'INVALID'
      return
    }

    if ((moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') &&
      (moveTwoValue > 0 && moveTwoValue < (99-moveOneValue))
    ) {
      playerOneMoveTwoType = moveTwoType
      playerOneMoveTwoValue = moveTwoValue
    } else {
      playerOneMoveOneType = 'INVALID'
      playerOneMoveOneValue = 'INVALID'
      playerOneMoveTwoType = 'INVALID'
      playerOneMoveTwoValue = 'INVALID'
      playerOneMoveThreeType = 'INVALID'
      playerOneMoveThreeValue = 'INVALID'
      return
    }

    if ((moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') &&
    (moveThreeValue > 0 && moveThreeValue <= (99 - (moveOneValue + moveTwoValue)))
    ) {
      playerOneMoveThreeType = moveThreeType
      playerOneMoveThreeValue = moveThreeValue
    } else {
      playerOneMoveOneType = 'INVALID'
      playerOneMoveOneValue = 'INVALID'
      playerOneMoveTwoType = 'INVALID'
      playerOneMoveTwoValue = 'INVALID'
      playerOneMoveThreeType = 'INVALID'
      playerOneMoveThreeValue = 'INVALID'
      return
    }
  }

  if (player === 'Player Two') {
    if ((moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') &&
      (moveOneValue > 0 && moveOneValue < 99)
    ) {
      playerTwoMoveOneType = moveOneType
      playerTwoMoveOneValue = moveOneValue
    } else {
      playerTwoMoveOneType = 'INVALID'
      playerTwoMoveOneValue = 'INVALID'
      playerTwoMoveTwoType = 'INVALID'
      playerTwoMoveTwoValue = 'INVALID'
      playerTwoMoveThreeType = 'INVALID'
      playerTwoMoveThreeValue = 'INVALID'
      return
    }

    if ((moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') &&
      (moveTwoValue > 0 && moveTwoValue < 99)
    ) {
      playerTwoMoveTwoType = moveTwoType
      playerTwoMoveTwoValue = moveTwoValue
    } else {
      playerTwoMoveOneType = 'INVALID'
      playerTwoMoveOneValue = 'INVALID'
      playerTwoMoveTwoType = 'INVALID'
      playerTwoMoveTwoValue = 'INVALID'
      playerTwoMoveThreeType = 'INVALID'
      playerTwoMoveThreeValue = 'INVALID'
      return
    }

    if ((moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') &&
      (moveThreeValue > 0 && moveThreeValue < 99)
    ) {
      playerTwoMoveThreeType = moveThreeType
      playerTwoMoveThreeValue = moveThreeValue
    } else {
      playerTwoMoveOneType = 'INVALID'
      playerTwoMoveOneValue = 'INVALID'
      playerTwoMoveTwoType = 'INVALID'
      playerTwoMoveTwoValue = 'INVALID'
      playerTwoMoveThreeType = 'INVALID'
      playerTwoMoveThreeValue = 'INVALID'
      return
    }
  }
}



// Function getRoundWinner:

const getRoundWinner = (round) => {

  if (round === 1) {
    if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue > playerTwoMoveOneValue) {
      return 'Player One'
    } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue < playerTwoMoveOneValue) {
      return 'Player Two'
    } else if (playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue === playerTwoMoveOneValue) {
      return 'Tie'
    }

    if (playerOneMoveOneType === 'rock') {
      if (playerTwoMoveOneType === 'scissors') {
        return 'Player One'
      }
      return 'Player Two'
    }

    if (playerOneMoveOneType === 'rock') {
      if (playerTwoMoveOneType === 'paper') {
        return 'Player Two'
      }
      return 'Player One'
    }

    if (playerOneMoveOneType === 'scissors') {
      if (playerTwoMoveOneType === 'paper') {
        return 'Player One'
      }
      return 'Player Two'
    }
  }

  if (round === 2) {
    if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue > playerTwoMoveTwoValue) {
      return 'Player One'
    } else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue < playerTwoMoveTwoValue) {
      return 'Player Two'
    } else if (playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoType === playerTwoMoveTwoType) {
      return 'Tie'
    }

    if (playerOneMoveTwoType === 'rock') {
      if (playerTwoMoveTwoType === 'scissors') {
        return 'Player One'
      }
      return 'Player Two'
    }

    if (playerOneMoveTwoType === 'rock') {
      if (playerTwoMoveTwoType === 'paper') {
        return 'Player Two'
      }
      return 'Player One'
    }

    if (playerOneMoveTwoType === 'scissors') {
      if (playerTwoMoveTwoType === 'paper') {
        return 'Player One'
      }
      return 'Player Two'
    }
  }

  if (round === 3) {
    if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeType > playerTwoMoveThreeType) {
      return 'Player One'
    } else if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeType < playerTwoMoveThreeType) {
      return 'Player Two'
    } else if (playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeType === playerTwoMoveThreeType) {
      return 'Tie'
    }

    if (playerOneMoveThreeType === 'rock') {
      if (playerTwoMoveThreeType === 'scissors') {
        return 'Player One'
      }
      return 'Player Two'
    }

    if (playerOneMoveThreeType === 'rock') {
      if (playerTwoMoveThreeType === 'paper') {
        return 'Player Two'
      }
      return 'Player One'
    }

    if (playerOneMoveThreeType === 'scissors') {
      if (playerTwoMoveThreeType === 'paper') {
        return 'Player One'
      }
      return 'Player Two'
    }
  }
}

