// @flow
import { POWER_ON_OFF } from './constants';

type Action = {
  type: string,
  payload: boolean,
};

export default (payload: boolean): Action => ({
  type: POWER_ON_OFF,
  payload,
});
