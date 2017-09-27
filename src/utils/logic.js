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

export const getSequenceOfRandomNumbers = (): number[] => {
  const len: number = 25;
  const arrSequence: ?(number[]) = [];
  if (Array.isArray(arrSequence)) {
    for (let i: number = 0; i < len; i += 1) {
      arrSequence.push(getRandomNumber());
    }
    return arrSequence;
  }
  return [];
};
