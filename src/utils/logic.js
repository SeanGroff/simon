// @flow
/**
 * @function getRandomNumber
 * @description Takes no parameters and returns a random number between 0 and 3
 * @returns {number}
 */
export const getRandomNumber = (): number => Math.floor(Math.random() * 4);

// When Start is clicked

// 1) START_GAME action fired
// 2) counterReducer sets count to 1 - case START_GAME
// 3) moveSequenceReducer adds a random number/color to sequence array - case START_GAME
// NOT DONE YET
// 4) playerTurnReducer sets playerTurn to True - case START_GAME
