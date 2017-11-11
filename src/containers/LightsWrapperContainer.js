import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LightsWrapper from '../components/LightsWrapper';
import {
  startGameThunk,
  playSequenceThunk,
  guessThunk,
  nextLevelThunk,
} from '../redux/modules/game';

const mapStateToProps = state => ({
  lights: state.lights,
  counter: state.game.counter,
  audioPlaying: state.game.audioPlaying,
  gameOver: state.game.gameOver,
  match: state.match,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      startGameThunk,
      playSequenceThunk,
      guessThunk,
      nextLevelThunk,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LightsWrapper);
