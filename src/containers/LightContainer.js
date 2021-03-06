import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LightAudio from '../components/LightAudio';
import Light from '../components/Light';
import {
  playSequenceThunk,
  guessThunk,
  nextLevelThunk,
} from '../redux/modules/game';
import { tryAgainThunk } from '../redux/modules/match';
import waitTime from '../utils/waitTime';
import { NEXT_LEVEL_DELAY_TIME } from '../constants';

type Props = {
  tryAgainThunk(): any,
  playSequenceThunk(): any,
  guessThunk({ succeeded: boolean, color: string }): any,
  nextLevelThunk(): any,
  gameOver: boolean,
  match: { sequence: string[], guessed: string[] },
  strictMode: boolean,
};

const mapStateToProps = state => ({
  match: state.match,
  gameOver: state.game.gameOver,
  strictMode: state.game.strictMode,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      tryAgainThunk,
      playSequenceThunk,
      guessThunk,
      nextLevelThunk,
    },
    dispatch,
  );

class LightContainer extends Component<Props> {
  componentDidUpdate(prevProps) {
    /** Play sound only when Light turns ON */
    if (!prevProps.animate && this.props.animate) {
      this.light.firstChild.play();
    }
  }

  handleLightClick = (color: string) => {
    this.light.firstChild.play();
    const {
      match,
      gameOver,
      strictMode,
      tryAgainThunk,
      guessThunk,
      nextLevelThunk,
      playSequenceThunk,
    } = this.props;
    const { sequence, guessed } = match;
    const tail = guessed.length;
    const succeeded = sequence[tail] === color;
    if (!gameOver) {
      guessThunk({ succeeded, color }).then(async ({ done, victorious }) => {
        if (done && victorious) {
          nextLevelThunk();
        } else if (done) {
          nextLevelThunk();
          await waitTime(NEXT_LEVEL_DELAY_TIME);
          playSequenceThunk();
        } else if (!succeeded && !strictMode) {
          await tryAgainThunk();
          playSequenceThunk();
        }
      });
    }
  };

  render() {
    return (
      <Light
        innerRef={el => (this.light = el)}
        handleClick={this.handleLightClick}
        {...this.props}
      >
        <LightAudio {...this.props} />
      </Light>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LightContainer);
