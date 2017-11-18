export const GREEN_AUDIO =
  'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
export const RED_AUDIO =
  'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
export const YELLOW_AUDIO =
  'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
export const BLUE_AUDIO =
  'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';

export function initAudio() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  return new AudioContext();
}

export function loadSound() {
  // createjs.Sound.registerSound(GREEN_AUDIO, greenAudio);
  // createjs.Sound.registerSound(RED_AUDIO, redAudio);
  // createjs.Sound.registerSound(YELLOW_AUDIO, yellowAudio);
  // createjs.Sound.registerSound(BLUE_AUDIO, blueAudio);
}

export function playSound({ context, buffer }) {
  let source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}
