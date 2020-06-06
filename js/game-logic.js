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
      (moveTwoValue > 0 && moveTwoValue < (99 - moveOneValue))
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
      (moveOneValue > 0 && moveOneValue < 99)) {

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
      (moveTwoValue > 0 && moveTwoValue < 99)) {

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
      (moveThreeValue > 0 && moveThreeValue < 99)) {

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

  if (round === 1 || round === 2 || round === 3) {
    if (round === 1) {
      if (playerOneMoveOneType !== undefined && playerTwoMoveOneType !== undefined && playerOneMoveOneValue !== undefined && playerTwoMoveOneValue !== undefined) {

        if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue > playerTwoMoveOneValue)) {
          return 'Player One'
        } else if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue < playerTwoMoveOneValue)) {
          return 'Player Two'
        } else if ((playerOneMoveOneType === playerTwoMoveOneType) && (playerOneMoveOneValue === playerTwoMoveOneValue)) {
          return 'Tie'
        }

        if (playerOneMoveOneType === 'rock') {
          if (playerTwoMoveOneType === 'scissors') {
            return 'Player One'
          }
          return 'Player Two'
        }

        if (playerOneMoveOneType === 'paper') {
          if (playerTwoMoveOneType === 'rock') {
            return 'Player One'
          }
          return 'Player Two'
        }

        if (playerOneMoveOneType === 'scissors') {
          if (playerTwoMoveOneType === 'paper') {
            return 'Player One'
          }
          return 'Player Two'
        }
      } else
        return null
    }


    if (round === 2) {
      if (playerOneMoveTwoType !== undefined && playerTwoMoveTwoType !== undefined && playerOneMoveTwoValue !== undefined && playerTwoMoveTwoValue !== undefined) {

        if ((playerOneMoveTwoType === playerTwoMoveTwoType) && (playerOneMoveTwoValue > playerTwoMoveTwoValue)) {
          return 'Player One'
        } else if ((playerOneMoveTwoType === playerTwoMoveTwoType) && (playerOneMoveTwoValue < playerTwoMoveTwoValue)) {
          return 'Player Two'
        } else if ((playerOneMoveTwoType === playerTwoMoveTwoType) && (playerOneMoveTwoType === playerTwoMoveTwoType)) {
          return 'Tie'
        }

        if (playerOneMoveTwoType === 'rock') {
          if (playerTwoMoveTwoType === 'scissors') {
            return 'Player One'
          }
          return 'Player Two'
        }

        if (playerOneMoveTwoType === 'paper') {
          if (playerTwoMoveTwoType === 'rock') {
            return 'Player One'
          }
          return 'Player Two'
        }

        if (playerOneMoveTwoType === 'scissors') {
          if (playerTwoMoveTwoType === 'paper') {
            return 'Player One'
          }
          return 'Player Two'
        }
      } else
        return null
    }


    if (round === 3) {
      if (playerOneMoveThreeType !== undefined && playerTwoMoveThreeType !== undefined && playerOneMoveThreeValue !== undefined && playerTwoMoveThreeValue !== undefined) {

        if ((playerOneMoveThreeType === playerTwoMoveThreeType) && (playerOneMoveThreeValue > playerTwoMoveThreeValue)) {
          return 'Player One'
        } else if ((playerOneMoveThreeType === playerTwoMoveThreeType) && (playerOneMoveThreeValue < playerTwoMoveThreeValue)) {
          return 'Player Two'
        } else if ((playerOneMoveThreeType === playerTwoMoveThreeType) && (playerOneMoveThreeValue === playerTwoMoveThreeValue)) {
          return 'Tie'
        }

        if (playerOneMoveThreeType === 'rock') {
          if (playerTwoMoveThreeType === 'scissors') {
            return 'Player One'
          }
          return 'Player Two'
        }

        if (playerOneMoveThreeType === 'paper') {
          if (playerTwoMoveThreeType === 'rock') {
            return 'Player One'
          }
          return 'Player Two'
        }

        if (playerOneMoveThreeType === 'scissors') {
          if (playerTwoMoveThreeType === 'paper') {
            return 'Player One'
          }
          return 'Player Two'
        }
      } else
        return null
    }
  } else
    return null
}


const getGameWinner = () => {

  let playerOneWins = 0
  let playerTwoWins = 0


  if ((getRoundWinner(1) !== null) && (getRoundWinner(2) !== null) && (getRoundWinner(3) !== null)) {
    if (getRoundWinner(1) === 'Player One') {
      playerOneWins++
    } else if (getRoundWinner(1) === 'Player Two') {
      playerTwoWins++
    }

    if (getRoundWinner(2) === 'Player One') {
      playerOneWins++
    } else if (getRoundWinner(2) === 'Player Two') {
      playerTwoWins++
    }

    if (getRoundWinner(3) === 'Player One') {
      playerOneWins++
    } else if (getRoundWinner(3) === 'Player Two') {
      playerTwoWins++
    }

    if (playerOneWins > playerTwoWins) {
      return 'Player One'
    } else if (playerOneWins < playerTwoWins) {
      return 'Player Two'
    }

    if (playerOneWins === playerTwoWins) {
      return 'Tie'
    }
  } else
    return null
}

const setComputerMoves = () => {

  let randomNum = (Math.floor(Math.random() * 3))

  switch (randomNum) {
    case 0: return 'rock'
      break
    case 1: return 'paper'
      break
    case 2: return 'scissors'
      break
  }
}

playerTwoMoveOneType = setComputerMoves()
playerTwoMoveTwoType = setComputerMoves()
playerTwoMoveThreeType = setComputerMoves()
playerTwoMoveOneValue = (Math.floor(Math.random() * 99 + 1))
playerTwoMoveTwoValue = (Math.floor(Math.random() * (99 - playerTwoMoveOneValue) + 1))
playerTwoMoveThreeValue = (99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue))




//console.log('playerTwoMoveOneType ' + playerTwoMoveOneType)
  // console.log('playerOneMoveOneType ' + playerOneMoveOneType)
  // console.log('playerOneMoveOneValue ' + playerOneMoveOneValue)
  // console.log('playerTwoMoveOneType ' + playerTwoMoveOneType)
  // console.log('playerTwoMoveOneValue ' + playerTwoMoveOneValue)
  // console.log('playerTwoMoveTwoValue ' + playerTwoMoveTwoValue)
  // console.log('playerTwoMoveThreeValue ' + playerTwoMoveThreeValue)

