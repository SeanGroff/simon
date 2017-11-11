import { connect } from 'react-redux';

import Counter from '../components/Counter';

const mapStateToProps = state => ({
  power: state.game.power,
  counter: state.game.counter,
});

export default connect(mapStateToProps)(Counter);
