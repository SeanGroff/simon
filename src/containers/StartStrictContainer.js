import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StartStrictButton from '../components/StartStrictButton';
import { actionCreators } from '../ducks/game';

const { startGameThunk, playSequenceThunk, toggleStrictMode } = actionCreators;

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      startGameThunk,
      playSequenceThunk,
      toggleStrictMode,
    },
    dispatch,
  );

export default connect(undefined, mapDispatchToProps)(StartStrictButton);
