// codecademy solution

// set Global Variables:

let playerOneMoveOneType,
  playerOneMoveOneValue,
  playerOneMoveTwoType,
  playerOneMoveTwoValue,
  playerOneMoveThreeType,
  playerOneMoveThreeValue,
  playerTwoMoveOneType,
  playerTwoMoveOneValue,
  playerTwoMoveTwoType,
  playerTwoMoveTwoValue,
  playerTwoMoveThreeType,
  playerTwoMoveThreeValue,
  PlayerOneWins,
  PlayerTwoWins


//setPlayerMoves FUNCTION:

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {

  if (!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
    return
  }

  if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
    return
  }

  if (!isValidMoveValue(moveOneValue) || isValidMoveValue(moveTwoValue) || isValidMoveValue(moveThreeValue)) {
    return
  }

  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return
  }

  function isValidMoveType(moveType) {
    return (moveType === 'rock') || (moveType === 'paper') || (moveType === 'scissors')
  }

  function isValidMoveValue(moveValue) {
    return (moveValue >= 1) && (moveValue <= 99)
  }
}


// assign values to the global variables:

if (player === 'Player One') {
  playOneMoveOneType = moveOneType
  playOneMoveOneValue = moveOneValue
  playerOneMoveTwoType = moveTwoType
  playerOneMoveTwoValue = moveTwoValue
  playerOneMoveThreeType = moveThreeType
  playerOneMoveThreeValue = moveThreeValue
} else if (player === 'Player Two') {
  playTwoMoveOneType = moveOneType
  playTwoMoveOneValue = moveOneValue
  playerTwoMoveTwoType = moveTwoType
  playerTwoMoveTwoValue = moveTwoValue
  playerTwoMoveThreeType = moveThreeType
  playerTwoMoveThreeValue = moveThreeValue
}

// getRoundWinner() function:

function getRoundWinner(roundNumber) {

  // sets up a switch for each round, using a function to get the round winner for each:
  switch (roundNumber) {
    case 1:
      return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue)
    case 2:
      return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue)
    case 3:
      return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue)
    default:
      return null
  }
}

// function finds the winner for any round:
function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {

  // if either player has missing move types or values:
  if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
    return null
  }

  // if player moves are the same:
  if (playerOneMoveType === playerTwoMoveType) {
    if (playerOneMoveValue > playerTwoMoveValue) {
      return 'Player One'
    } else if (playerOneMoveValue < playerTwoMoveValue) {
      return 'Player Two'
    } else {
      return 'Tie'
    }
  }

  // if statements for standard move types:
  if (playerOneMoveOneType === 'rock') {
    if (playerTwoMoveOneType === 'scissors') {
      return 'Player One'
    } else {
      return 'Player Two'
    }
  } else if (playerOneMoveOneType === 'paper') {
    if (playerTwoMoveOneType === 'rock') {
      return 'Player One'
    } else {
      return 'Player Two'
    }
  } else if (playerOneMoveOneType === 'scissors') {
    if (playerTwoMoveOneType === 'paper') {
      return 'Player One'
    } else {
      return 'Player Two'
    }
  }


  //getGameWinner() function:

  // if player one/two has any missing move types or values:
  function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveOneValue ||
      !playerOneMoveTwoType || !playerOneMoveTwoValue ||
      !playerOneMoveThreeType || !playerOneMoveThreeValue ||
      !playerTwoMoveOneType || !playerTwoMoveOneValue ||
      !playerTwoMoveTwoType || !playerTwoMoveTwoValue ||
      !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
      return null
    }

    // set up for winner counter for each player:
    playerOneWins = 0
    playerTwoWins = 0

    // assigns winner to each round:
    const roundOneWinner = getRoundWinner(1)
    const roundTwoWinner = getRoundWinner(2)
    const roundThreeWinner = getRoundWinner(3)

    // function addWin adds 1 point to the winner counter above for that round winner:
    addWin(roundOneWinner)
    addWin(roundTwoWinner)
    addWin(roundThreeWinner)

    // function adds 1 point to the counter if winner = player 1 or 2
    function addWin(winner) {
      if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1
      } else if (winner === 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1
      }
    }

    // works out overall winner based on highest points:
    if (playerOneWins > playerTwoWins) {
      return 'Player One'
    } else if (playerOne < playerTwoWins) {
      return 'Player Two'
    } else {
      return 'Tie'
    }
  }


  // setComputerMoves() function:

  function setComputerMoves() {

    // sets valid moves to choose from:
    const moves = ['rock', 'paper', 'scissors']

    // selects a random option from the moves array for each move:
    const moveOneType = moves[Math.floor(Math.random * 3)]
    const moveTwoType = moves[Math.floor(Math.random * 3)]
    const moveThreeType = moves[Math.floor(Math.random * 3)]

    // selects a random move value for each move:
    const moveOneValue = Math.floor(Math.random * 96) + 1
    const moveTwoValue = Math.floor(Math.random * (97 - moveOneValue)) + 1
    const moveThreeValue = 99 - moveOneValue - moveTwoValue


    // recalls the setPlayerMove function from earlier now using the above computer choices:
    setPlayerMoves('Player Two', moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue)
  }
}










