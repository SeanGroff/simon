import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CenterConsole from '../components/CenterConsole';
import { startGameThunk, toggleGamePower } from '../redux/modules/game';

const mapStateToProps = state => ({
  power: state.game.power,
  counter: state.game.counter,
  strictMode: state.game.strictMode,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      startGameThunk,
      toggleGamePower,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(CenterConsole);
