// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Light from './Light';
import waitTime from '../utils/waitTime';
import { NEXT_LEVEL_DELAY_TIME } from '../constants';
import type { LightType } from '../types';

type Props = {
  startGameThunk(): { type: string },
  playSequenceThunk(): any,
  guessThunk({ succeeded: boolean, color: string }): any,
  nextLevelThunk(): any,
  lights: LightType[],
  counter: number,
  audioPlaying: boolean,
  gameOver: boolean,
  match: { sequence: string[], guessed: string[] },
  power: boolean,
};

type State = {
  activeLight: string,
};

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default class Lights extends Component<Props, State> {
  state = {
    activeLight: '',
  };

  componentWillMount() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
  }

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

  playSound = (sound: string) => {
    const source = this.context.createBufferSource();
    source.buffer = sound;
    source.connect(this.context.destination);
    source.start(0);
  };

  clickHandler = (color: string) => {
    const {
      match,
      gameOver,
      guessThunk,
      nextLevelThunk,
      playSequenceThunk,
    } = this.props;
    const { sequence, guessed } = match;
    const tail = guessed.length;
    const succeeded = sequence[tail] === color;

    if (!gameOver) {
      guessThunk({ succeeded, color }).then(async ({ done }) => {
        if (done) {
          nextLevelThunk();
          await waitTime(NEXT_LEVEL_DELAY_TIME);
          playSequenceThunk();
        }
      });
    }
  };

  render() {
    const activeLight = this.state.activeLight;
    const { audioPlaying, counter, power, gameOver } = this.props;
    const clickable =
      !audioPlaying && power && !gameOver && !!counter ? true : false;

    return (
      <LightsWrapper>
        <LightsRow>
          <Light
            id={0}
            animate={activeLight === 'green'}
            topLeft
            clickable={clickable}
            color="#00A74A"
            lightUpColor="#13ff7c"
            onClick={() => this.clickHandler('green')}
          />
          <Light
            id={1}
            animate={activeLight === 'red'}
            topRight
            clickable={clickable}
            color="#9F0F17"
            lightUpColor="#ff4c4c"
            onClick={() => this.clickHandler('red')}
          />
        </LightsRow>
        <LightsRow>
          <Light
            id={2}
            animate={activeLight === 'yellow'}
            bottomLeft
            clickable={clickable}
            color="#CCA707"
            lightUpColor="#fed93f"
            onClick={() => this.clickHandler('yellow')}
          />
          <Light
            id={3}
            animate={activeLight === 'blue'}
            bottomRight
            clickable={clickable}
            color="#094A8F"
            lightUpColor="#1c8cff"
            onClick={() => this.clickHandler('blue')}
          />
        </LightsRow>
      </LightsWrapper>
    );
  }
}
