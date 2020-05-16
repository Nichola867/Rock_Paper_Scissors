//12 Global Variables

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


// Function setPlayerMoves:
const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
  if (player === 'Player One') {
    playerOneMoveOneType = moveOneType
    playerOneMoveOneValue = moveOneValue
    playerOneMoveTwoType = moveTwoType
    playerOneMoveTwoValue = moveTwoValue
    playerOneMoveThreeType = moveThreeType
    playerOneMoveThreeValue = moveThreeValue
  } else if (player === 'Player Two') {
    playerTwoMoveOneType = moveOneType
    playerTwoMoveOneValue = moveOneValue
    playerTwoMoveTwoType = moveTwoType
    playerTwoMoveTwoValue = moveTwoValue
    playerTwoMoveThreeType = moveThreeType
    playerTwoMoveThreeValue = moveThreeValue
  }
}

// Function getRoundWinner: takes a round number (round 1, round 2, or round 3) and compares both player’s move types and values for that round, and returns the appropriate winner ('Player One', 'Player Two', or 'Tie')

// console.log('playerOneMoveOneType ' + playerOneMoveOneType)
// console.log('playerTwoMoveOneType ' + playerTwoMoveOneType)
// console.log('playerOneMoveOneValue ' + playerOneMoveOneValue)
// console.log('playerTwoMoveOneValue ' + playerTwoMoveOneValue)


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

