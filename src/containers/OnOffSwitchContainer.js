import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OnOffSwitch from '../components/OnOffSwitch';
import { toggleGamePower } from '../redux/modules/game';

const mapStateToProps = state => ({
  power: state.game.power,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      toggleGamePower,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(OnOffSwitch);
