import { nextTurnAction } from '../../actions/nextTurnAction';
import { NEXT_TURN } from '../../actions/constants';

it('should create an action to change between AI and Players turn', () => {
  const nextTurn = true;
  const expectedAction = { type: NEXT_TURN, payload: nextTurn };
  expect(nextTurnAction(nextTurn)).toEqual(expectedAction);
});
