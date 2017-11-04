import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LightsWrapper from '../components/LightsWrapper';
import { actionCreators } from '../ducks/game';

const { startGameThunk, playSequenceThunk } = actionCreators;

const mapStateToProps = state => ({
  lights: state.lights,
  counter: state.game.counter,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      startGameThunk,
      playSequenceThunk,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LightsWrapper);
