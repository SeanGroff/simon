// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameOverScreen from '../components/GameOverScreen';
import Simon from '../components/Simon';
import { restartGameThunk } from '../redux/modules/game';

type Props = {
  restart(): any,
  gameOver: boolean,
  counter: ?number,
};

type State = {
  victorious: boolean,
  gameOver: boolean,
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
    gameOver: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gameOver !== this.props.gameOver && this.props.gameOver) {
      this.setState(prevState => ({
        ...prevState,
        gameOver: true,
      }));
    }
    if (prevProps.counter !== this.props.counter && this.props.counter === 21) {
      this.setState(() => ({
        ...prevState,
        victorious: true,
      }));
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      ...prevState,
      victorious: false,
      gameOver: false,
    }));
    this.props.restart();
  };

  render() {
    const { counter } = this.props;
    const { victorious, gameOver } = this.state;
    return victorious || gameOver ? (
      <GameOverScreen
        close={this.handleClick}
        victorious={victorious}
        score={counter}
      />
    ) : (
      <Simon />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimonContainer);
