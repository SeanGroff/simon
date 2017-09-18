// @flow
/**
 * @function getRandomNumber
 * @description Takes no parameters and returns a random number between 0 and 3
 * @returns {number}
 */
export const getRandomNumber = (): number => Math.floor(Math.random() * 4);

// green red yellow blue
export const getRandomColor = (): string => {
  const arrColors: string[] = ['Green', 'Red', 'Yellow', 'Blue'];
  return arrColors[getRandomNumber()];
};
