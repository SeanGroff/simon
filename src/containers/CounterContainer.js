import { connect } from 'react-redux';

import Counter from '../components/Counter';

const mapStateToProps = state => ({
  power: state.game.power,
  counter: state.game.counter,
  gameOver: state.game.gameOver,
});

export default connect(mapStateToProps)(Counter);
