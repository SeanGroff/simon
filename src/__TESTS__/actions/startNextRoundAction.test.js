import { startNextRoundAction } from '../../actions/startNextRoundAction';
import { START_NEXT_ROUND } from '../../actions/constants';

it('should create an action to change between AI and Players turn', () => {
  const expectedAction = { type: START_NEXT_ROUND };
  expect(startNextRoundAction()).toEqual(expectedAction);
});
