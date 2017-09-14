// @flow
import { POWER_ON_OFF } from './constants';

type Action = {
  type: string,
};

export default (): Action => ({ type: POWER_ON_OFF });
