import { playLightSequenceAction } from '../../actions/playLightSequenceAction';
import { PLAY_LIGHT_SEQUENCE } from '../../actions/constants';
import type { PlayLightSequenceAction } from '../../types/types';

type Action = PlayLightSequenceAction;

it('should create an action to light up the current color in the sequence', () => {
  const light = 1;
  const expectedAction: Action = { type: PLAY_LIGHT_SEQUENCE, payload: light };
  expect(playLightSequenceAction(light)).toEqual(expectedAction);
});
