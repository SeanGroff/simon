import { ROUND_SUCCESS } from '../../actions/constants';
import { roundSuccessAction } from '../../actions/roundSuccessAction';

it('should create an action for a successful round', () => {
  const mockRandomNumber = 2;
  const expectedAction = { type: ROUND_SUCCESS, payload: mockRandomNumber };
  expect(roundSuccessAction(mockRandomNumber)).toEqual(expectedAction);
});
