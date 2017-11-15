// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import VictoryScreen from '../components/VictoryScreen';
import Simon from '../components/Simon';
import { restartGameThunk } from '../redux/modules/game';

type Props = {
  restart(): any,
  gameOver: boolean,
  counter: ?number,
};

type State = {
  victorious: boolean,
};

const mapStateToProps = state => ({
  gameOver: state.game.gameOver,
  counter: state.game.counter,
});

const mapDispatchToProps = (dispatch: *) => ({
  restart: () => dispatch(restartGameThunk()),
});

class SimonContainer extends Component<Props, State> {
  state = {
    victorious: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gameOver !== this.props.gameOver && this.props.gameOver) {
      this.props.restart();
    }
    if (prevProps.counter !== this.props.counter && this.props.counter === 21) {
      this.setState(() => ({
        victorious: true,
      }));
    }
  }

  handleClick = () => {
    this.setState(() => ({
      victorious: false,
    }));
    this.props.restart();
  };

  render() {
    const { victorious } = this.state;
    return victorious ? <VictoryScreen close={this.handleClick} /> : <Simon />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonContainer);
