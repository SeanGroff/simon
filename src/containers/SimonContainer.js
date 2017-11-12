import React, { Component } from 'react';
import { connect } from 'react-redux';

import Simon from '../components/Simon';
import { restartGameThunk } from '../redux/modules/game';

const mapStateToProps = state => ({
  gameOver: state.game.gameOver,
});

const mapDispatchToProps = (dispatch: *) => {
  return {
    restart: () => dispatch(restartGameThunk()),
  };
};

class SimonContainer extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gameOver !== this.props.gameOver && this.props.gameOver) {
      this.props.restart();
    }
  }

  render() {
    return <Simon />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonContainer);
