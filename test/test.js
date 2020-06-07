var fs = require('fs');
var vm = require('vm');
var path = 'js/game-logic.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

var should = require('chai').should();

describe('Player Moves', function () {
  //WORKING :)
  it('a global variable called playerOneMoveOneType should exist and initialize to undefined', function () {
    should.equal(playerOneMoveOneType, undefined);
  });

  //WORKING :)
  it('a global variable called playerOneMoveTwoType should exist and initialize to undefined', function () {
    should.equal(playerOneMoveTwoType, undefined);
  });

  //WORKING :)
  it('a global variable called playerOneMoveThreeType should exist and initialize to undefined', function () {
    should.equal(playerOneMoveThreeType, undefined);
  });

  //WORKING :)
  it('a global variable called playerTwoMoveOneType should exist and initialize to undefined', function () {
    should.equal(playerTwoMoveOneType, undefined);
  });

  //WORKING :)
  it('a global variable called playerTwoMoveTwoType should exist and initialize to undefined', function () {
    should.equal(playerTwoMoveTwoType, undefined);
  });

  //WORKING :)
  it('a global variable called playerTwoMoveThreeType should exist and initialize to undefined', function () {
    should.equal(playerTwoMoveTwoType, undefined);
  });

  //WORKING :)
  it('a global variable called playerOneMoveOneValue should exist and initialize to undefined', function () {
    should.equal(playerOneMoveOneValue, undefined);
  });

  //WORKING :)
  it('a global variable called playerOneMoveTwoValue should exist and initialize to undefined', function () {
    should.equal(playerOneMoveTwoValue, undefined);
  });

  //WORKING :)
  it('a global variable called playerOneMoveThreeValue should exist and initialize to undefined', function () {
    should.equal(playerOneMoveThreeValue, undefined);
  });

  //WORKING :)
  it('a global variable called playerTwoMoveOneValue should exist and initialize to undefined', function () {
    should.equal(playerTwoMoveOneValue, undefined);
  });

  //WORKING :)
  it('a global variable called playerTwoMoveTwoValue should exist and initialize to undefined', function () {
    should.equal(playerTwoMoveTwoValue, undefined);
  });

  //WORKING :)
  it('a global variable called playerTwoMoveThreeValue should exist and initialize to undefined', function () {
    should.equal(playerTwoMoveThreeValue, undefined);
  });
});

describe('setPlayerMoves() - Main Functionality', function () {
  afterEach(clearMoves);

  //WORKING :)
  it('a function called setPlayerMoves should exist', function () {
    should.equal(typeof setPlayerMoves, 'function');
  });

  //WORKING :)
  it('should set player one\'s moves with valid inputs', function () {
    setPlayerMoves('Player One', 'rock', 11, 'paper', 33, 'scissors', 55);

    should.equal(playerOneMoveOneType, 'rock');
    should.equal(playerOneMoveOneValue, 11);
    should.equal(playerOneMoveTwoType, 'paper');
    should.equal(playerOneMoveTwoValue, 33);
    should.equal(playerOneMoveThreeType, 'scissors');
    should.equal(playerOneMoveThreeValue, 55);
  });

  //WORKING :)
  it('should set player two\'s moves with valid inputs', function () {
    setPlayerMoves('Player Two', 'scissors', 11, 'paper', 33, 'rock', 55);

    should.equal(playerTwoMoveOneType, 'scissors');
    should.equal(playerTwoMoveOneValue, 11);
    should.equal(playerTwoMoveTwoType, 'paper');
    should.equal(playerTwoMoveTwoValue, 33);
    should.equal(playerTwoMoveThreeType, 'rock');
    should.equal(playerTwoMoveThreeValue, 55);
  });
});


describe('setPlayerMoves() - Edge Cases', function () {
  afterEach(clearMoves);

  //WORKING :)
  it('should return INVALID if move ONE type is missing', function () {
    setPlayerMoves('Player One', 'bloggs', 11, 'paper', 33, 'scissors', 55);
    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
  })

  //WORKING :)
  it('should return INVALID if move TWO type is missing', function () {
    setPlayerMoves('Player One', 'rock', 11, undefined, 33, 'scissors', 55);
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
  })

  //WORKING :)
  it('should return INVALID if move THREE type is missing', function () {
    setPlayerMoves('Player One', 'rock', 11, 'paper', 33, undefined, 55);
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should return INVALID if an invalid player is supplied for Player One', function () {
    setPlayerMoves('Fake Player', 'rock', 11, 'paper', 33, 'scissors', 55);

    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should return INVALID if an invalid player is supplied for Player Two', function () {
    setPlayerMoves('Fake Player', 'rock', 11, 'paper', 33, 'scissors', 55);
    should.equal(playerTwoMoveOneType, 'INVALID');
    should.equal(playerTwoMoveOneValue, 'INVALID');
    should.equal(playerTwoMoveTwoType, 'INVALID');
    should.equal(playerTwoMoveTwoValue, 'INVALID');
    should.equal(playerTwoMoveThreeType, 'INVALID');
    should.equal(playerTwoMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should return INVALID Value if a move value is missing', function () {
    setPlayerMoves('Player One', 'rock', undefined, 'paper', 33, 'scissors', 55);
    setPlayerMoves('Player One', 'scissors', 11, 'paper', undefined, 'scissors', 55);
    setPlayerMoves('Player One', 'paper', 11, 'paper', 33, 'scissors', undefined);

    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should not set moves if an invalid move type is supplied', function () {
    setPlayerMoves('Player One', 'fake move', 11, 'paper', 33, 'scissors', 55);
    setPlayerMoves('Player One', 'rock', 11, 'fake move', 33, 'scissors', 55);
    setPlayerMoves('Player One', 'rock', 11, 'paper', 33, 'fake move', 55);

    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should not set moves if any move values are less than one', function () {
    setPlayerMoves('Player One', 'rock', 0, 'paper', 33, 'scissors', 55);
    setPlayerMoves('Player One', 'rock', 20, 'paper', -100, 'scissors', 55);
    setPlayerMoves('Player One', 'rock', 20, 'paper', 33, 'scissors', -1000);

    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should not set moves if any move values are greater than ninety-nine', function () {
    setPlayerMoves('Player One', 'rock', 100, 'paper', 33, 'scissors', 55);
    setPlayerMoves('Player One', 'rock', 20, 'paper', 1000, 'scissors', 55);
    setPlayerMoves('Player One', 'rock', 20, 'paper', 33, 'scissors', 10000);

    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });

  //WORKING :)
  it('should not set moves if move values sum to more than ninety-nine', function () {
    setPlayerMoves('Player One', 'rock', 33, 'paper', 33, 'scissors', 34);

    should.equal(playerOneMoveOneType, 'INVALID');
    should.equal(playerOneMoveOneValue, 'INVALID');
    should.equal(playerOneMoveTwoType, 'INVALID');
    should.equal(playerOneMoveTwoValue, 'INVALID');
    should.equal(playerOneMoveThreeType, 'INVALID');
    should.equal(playerOneMoveThreeValue, 'INVALID');
  });
});

describe('getRoundWinner() - Main Functionality', function () {
  //WORKING :)
  it('a function called getRoundWinner should exist', function () {
    should.equal(typeof getRoundWinner, 'function');
  });

  //WORKING :)
  it('should return the correct winner with rock versus scissors', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'scissors';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), 'Player One');
  });

  //WORKING :)
  it('should return the correct winner with rock versus paper', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 99;
    playerTwoMoveOneType = 'paper';
    playerTwoMoveOneValue = 1;

    should.equal(getRoundWinner(1), 'Player Two');
  });

  //WORKING :)
  it('should return the correct winner with paper versus scissors', function () {
    playerOneMoveOneType = 'scissors';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'paper';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), 'Player One');
  });

  //WORKING :)
  it('should return the correct winner (player 2) with two of the same move type (scissors) BUT two different values', function () {
    playerOneMoveOneType = 'scissors';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'scissors';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), 'Player Two');
  });

  //WORKING :)
  it('should return the correct winner (player 1) with two of the same move type (paper) BUT two different values', function () {
    playerOneMoveOneType = 'paper';
    playerOneMoveOneValue = 80;
    playerTwoMoveOneType = 'paper';
    playerTwoMoveOneValue = 5;

    should.equal(getRoundWinner(1), 'Player One');
  });

  //WORKING :)
  it('should return the correct winner (player 1) with two of the same move type (rock) BUT two different values', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 75;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 72

    should.equal(getRoundWinner(1), 'Player One')
  });

  //WORKING :)
  it('should return the correct winner with two of the same move type AND the same value', function () {
    playerOneMoveOneType = 'scissors';
    playerOneMoveOneValue = 99;
    playerTwoMoveOneType = 'scissors';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), 'Tie');
  });

  //WORKING :)
  it('should return the correct winner for round one', function () {
    playerOneMoveOneType = 'scissors';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), 'Player Two');
  });

  //WORKING :)
  it('should return the correct winner for round two', function () {
    playerOneMoveTwoType = 'scissors';
    playerOneMoveTwoValue = 1;
    playerTwoMoveTwoType = 'rock';
    playerTwoMoveTwoValue = 99;

    should.equal(getRoundWinner(2), 'Player Two');
  });

  //WORKING :)
  it('should return the correct winner for round three', function () {
    playerOneMoveThreeType = 'scissors';
    playerOneMoveThreeValue = 1;
    playerTwoMoveThreeType = 'rock';
    playerTwoMoveThreeValue = 99;

    should.equal(getRoundWinner(3), 'Player Two');
  });
});

//WORKING :)
describe('getRoundWinner() - Edge Cases', function () {
  it('should return null for an invalid round number', function () {
    should.equal(getRoundWinner(4), null);
  });

  //WORKING :)
  it('should return null if PlayerOneMoveType is undefined', function () {
    playerOneMoveOneType = undefined;
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), null);
  })

  it('should return null if playerOneMoveOneValue is undefined', function () {
    playerOneMoveOneType = 'paper';
    playerOneMoveOneValue = undefined;
    playerTwoMoveOneType = 'paper';
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), null);
  })

  it('should return null if playerTwoMoveOneType is undefined', function () {
    playerOneMoveOneType = 'scissors';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = undefined;
    playerTwoMoveOneValue = 99;

    should.equal(getRoundWinner(1), null);
  })

  it('should return null if playerTwoMoveOneValue is undefined', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = undefined;

    should.equal(getRoundWinner(1), null);
  })

  it('should return null if playerTwoMoveTwoValue is undefined', function () {
    playerOneMoveTwoType = 'rock';
    playerOneMoveTwoValue = 1;
    playerTwoMoveTwoType = 'rock';
    playerTwoMoveTwoValue = undefined;

    should.equal(getRoundWinner(2), null);
  })

  it('should return null if playerTwoMoveThreeValue is undefined', function () {
    playerOneMoveThreeType = 'rock';
    playerOneMoveThreeValue = 1;
    playerTwoMoveThreeType = 'rock';
    playerTwoMoveThreeValue = undefined;

    should.equal(getRoundWinner(3), null);
  });
});

//WORKING :)
describe('getGameWinner() - Main Functionality', function () {
  it('a function called getGameWinner should exist', function () {
    should.equal(typeof getGameWinner, 'function');
  });

  //WORKING :)
  it('should declare when player one wins', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 53;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 1;
    playerOneMoveTwoType = 'paper';
    playerOneMoveTwoValue = 1;
    playerTwoMoveTwoType = 'rock';
    playerTwoMoveTwoValue = 97;
    playerOneMoveThreeType = 'scissors';
    playerOneMoveThreeValue = 45;
    playerTwoMoveThreeType = 'rock';
    playerTwoMoveThreeValue = 1;

    should.equal(getGameWinner(), 'Player One');
  });

  //WORKING :)
  it('should declare when player two wins', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 53;
    playerOneMoveTwoType = 'rock';
    playerOneMoveTwoValue = 97;
    playerTwoMoveTwoType = 'paper';
    playerTwoMoveTwoValue = 1;
    playerOneMoveThreeType = 'rock';
    playerOneMoveThreeValue = 1;
    playerTwoMoveThreeType = 'scissors';
    playerTwoMoveThreeValue = 45;

    should.equal(getGameWinner(), 'Player Two');
  });

  //WORKING :)
  it('should declare when the game is a tie', function () {
    playerOneMoveOneType = 'rock';
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 48;
    playerOneMoveTwoType = 'scissors';
    playerOneMoveTwoValue = 48;
    playerTwoMoveTwoType = 'paper';
    playerTwoMoveTwoValue = 1;
    playerOneMoveThreeType = 'rock';
    playerOneMoveThreeValue = 50;
    playerTwoMoveThreeType = 'rock';
    playerTwoMoveThreeValue = 50;

    should.equal(getGameWinner(), 'Tie');
  });
});

//WORKING :)
describe('getGameWinner() - Main Functionality', function () {
  it('should return null if not all values are set', function () {
    playerOneMoveOneType = undefined;
    playerOneMoveOneValue = 1;
    playerTwoMoveOneType = 'rock';
    playerTwoMoveOneValue = 48;
    playerOneMoveTwoType = 'scissors';
    playerOneMoveTwoValue = 48;
    playerTwoMoveTwoType = 'paper';
    playerTwoMoveTwoValue = 1;
    playerOneMoveThreeType = 'rock';
    playerOneMoveThreeValue = 50;
    playerTwoMoveThreeType = 'rock';
    playerTwoMoveThreeValue = 50;

    should.equal(getGameWinner(), null);
  });
});


describe('BONUS: setComputerMoves()', function () {
  const validMoves = ['rock', 'paper', 'scissors'];

  beforeEach(clearMoves);

  //WORKING :)
  it('a function called setComputerMoves should exist', function () {
    should.equal(typeof setComputerMoves, 'function');
  });

  //FUNCTION WORKS BUT TESTS NOT PASSING. MOVE TYPES BEING OVERWRITTEN WITH UNDEFINED.
  it('should set player two\'s move ONE type to valid move types', function () {
    setComputerMoves();
    should.equal(validMoves.includes(playerTwoMoveOneType), true);
  });

  
  it('should set player two\'s move TWO type to valid move types', function () {
    setComputerMoves();
    should.equal(validMoves.includes(playerTwoMoveTwoType), true);
  });

  it('should set player two\'s move THREE type to valid move types', function () {
    setComputerMoves();
    should.equal(validMoves.includes(playerTwoMoveThreeType), true);
  });


  //TBC
  it('should set player two\'s move values to valid move values', function () {
    setComputerMoves();

    (playerTwoMoveOneValue).should.be.above(0);
    (playerTwoMoveOneValue).should.be.below(100);
    (playerTwoMoveTwoValue).should.be.above(0);
    (playerTwoMoveTwoValue).should.be.below(100);
    (playerTwoMoveThreeValue).should.be.above(0);
    (playerTwoMoveThreeValue).should.be.below(100);
  });

  //TBC
  it('should set player two\'s move values to three values that sum to ninety-nine', function () {
    setComputerMoves();

    should.equal(playerTwoMoveOneValue + playerTwoMoveTwoValue + playerTwoMoveThreeValue, 99);
  });
});

function clearMoves() {
  playerOneMoveOneType = undefined;
  playerOneMoveTwoType = undefined;
  playerOneMoveThreeType = undefined;
  playerOneMoveOneValue = undefined;
  playerOneMoveTwoValue = undefined;
  playerOneMoveThreeValue = undefined;
  playerTwoMoveOneType = undefined;
  playerTwoMoveTwoType = undefined;
  playerTwoMoveThreeType = undefined;
  playerTwoMoveOneValue = undefined;
  playerTwoMoveTwoValue = undefined;
  playerTwoMoveThreeValue = undefined;
}