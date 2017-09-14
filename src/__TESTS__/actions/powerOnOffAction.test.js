import { POWER_ON_OFF } from '../../actions/constants';
import powerOnOff from '../../actions/powerOnOffAction';

it('should create an action that toggles the game power on or off', () => {
  const expectedAction = { type: POWER_ON_OFF };
  expect(powerOnOff()).toEqual(expectedAction);
});
