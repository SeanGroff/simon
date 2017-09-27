import { TOGGLE_GAME_POWER } from '../../actions/constants';
import toggleGamePower from '../../actions/toggleGamePowerAction';

it('should create an action that toggles the game power on or off', () => {
  const expectedAction = { type: TOGGLE_GAME_POWER, payload: true };
  expect(toggleGamePower(true)).toEqual(expectedAction);
});
