import { getRandomNumber, getSequenceOfRandomNumbers } from '../../utils/logic';

describe('getRandomNumber function', () => {
  it('returns a random number between 0-3', () => {
    expect(getRandomNumber()).toBeLessThanOrEqual(3);
  });
});

describe('getSequenceOfRandomNumbers function', () => {
  it('returns an array of 25 random numbers between 0-3', () => {
    expect(getSequenceOfRandomNumbers()).toHaveLength(25);
  });
});
