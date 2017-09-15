import { getRandomNumber } from '../../utils/logic';

describe('getRandomNumber function', () => {
  it('returns a random number between 0-3', () => {
    expect(getRandomNumber()).toBeLessThanOrEqual(3);
  });
});
