import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Lights from '../components/Lights';
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
  power: state.game.power,
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

export default connect(mapStateToProps, mapDispatchToProps)(Lights);
