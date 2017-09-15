// @flow
import { START_GAME } from './constants';

type Action = {
  type: string,
  payload: number,
};

export default (randomNumber: number): Action => ({
  type: START_GAME,
  payload: randomNumber,
});
