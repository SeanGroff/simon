import { startGameAction } from '../../actions/startGameAction';
import { START_GAME } from '../../actions/constants';

it('should create an action to start the Simon game', () => {
  const expectedAction = {
    type: START_GAME,
  };
  expect(startGameAction()).toEqual(expectedAction);
});
