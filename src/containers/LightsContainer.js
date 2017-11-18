import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lights from '../components/Lights';

type LightType = {
  color: string,
  active: boolean,
};

type Props = {
  tryAgain(): { type: string },
  playSequenceThunk(): any,
  guessThunk({ succeeded: boolean, color: string }): any,
  lights: LightType[],
  counter: number,
  audioPlaying: boolean,
  gameOver: boolean,
  power: boolean,
};

type State = {
  activeLight: string,
};

const mapStateToProps = state => ({
  lights: state.lights,
  counter: state.game.counter,
  audioPlaying: state.game.audioPlaying,
  gameOver: state.game.gameOver,
  power: state.game.power,
});

class LightsContainer extends Component<Props, State> {
  state = {
    activeLight: '',
  };

  componentWillReceiveProps({ counter, lights }: Props) {
    if (counter) {
      this.setState(() => ({
        activeLight: lights.reduce((accum, light) => {
          if (light.active) {
            return light.color;
          }
          return accum;
        }, ''),
      }));
    }
  }

  render() {
    const clickable =
      !this.props.audioPlaying &&
      this.props.power &&
      !this.props.gameOver &&
      this.props.counter !== 'X' &&
      !!this.props.counter
        ? true
        : false;
    return (
      <Lights activeLight={this.state.activeLight} clickable={clickable} />
    );
  }
}

export default connect(mapStateToProps)(LightsContainer);
