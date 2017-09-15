import startGameAction from '../../actions/startGameAction';
import { START_GAME } from '../../actions/constants';

it('should create an action to start the Simon game', () => {
  const mockRandomNumber = 2;
  const expectedAction = { type: START_GAME, payload: mockRandomNumber };
  expect(startGameAction(mockRandomNumber)).toEqual(expectedAction);
});
