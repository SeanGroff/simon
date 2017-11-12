import { connect } from 'react-redux';

import CenterConsole from '../components/CenterConsole';

const mapStateToProps = state => ({
  power: state.game.power,
  counter: state.game.counter,
  strictMode: state.game.strictMode,
});

export default connect(mapStateToProps)(CenterConsole);
