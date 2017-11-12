import { connect } from 'react-redux';

import OnOffSwitch from '../components/OnOffSwitch';
import { toggleGamePower } from '../redux/modules/game';

const mapStateToProps = state => ({
  power: state.game.power,
});

const mapDispatchToProps = (dispatch: *) => ({
  toggleGamePower: power => dispatch(toggleGamePower(power)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OnOffSwitch);
