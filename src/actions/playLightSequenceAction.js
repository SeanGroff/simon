// @flow
import type { Dispatch } from 'redux';
import { PLAY_LIGHT_SEQUENCE } from './constants';
import type {
  PlayLightSequenceAction,
  Thunk,
  StoreState,
} from '../types/types';

export const playLightSequenceAction = (
  payload: number,
): PlayLightSequenceAction => ({
  type: PLAY_LIGHT_SEQUENCE,
  payload,
});

export function playLightSequenceThunk(): Thunk {
  return (dispatch: Dispatch<StoreState>, getState: () => StoreState) => {
    const { lightSequence } = getState();
    const len: number = lightSequence.length;
    let iterator = 0;

    function test() {
      setTimeout(function() {
        dispatch(playLightSequenceAction(lightSequence[iterator]));
        iterator++;
        if (iterator < len) {
          test();
        }
      }, 2000);
    }

    test();
  };
}
