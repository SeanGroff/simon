import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StartStrictButton from '../components/StartStrictButton';
import {
  startGameThunk,
  playSequenceThunk,
  toggleStrictMode,
} from '../redux/modules/game';

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
