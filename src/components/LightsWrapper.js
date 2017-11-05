// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Light from './Light';

type Props = {
  toggleGamePower(payload: boolean): { type: string, payload: boolean },
  startGameThunk(): { type: string },
  nextThunk(): any,
  power: boolean,
  counter: number,
  audioPlaying: boolean, // audioPlaying
  lights: string[],
};

type State = {
  clickable: boolean,
  activeLight: string,
};

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default class Lights extends Component<Props, State> {
  state = {
    clickable: false,
    activeLight: '',
  };

  componentWillReceiveProps({ counter, lights }) {
    console.log(lights);
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

  clickHandler = (color: string) => {
    console.log('click');
    // makeGuessThunk(color);
  };

  render() {
    const activeLight = this.state.activeLight;
    const audioPlaying = this.props.audioPlaying;
    return (
      <LightsWrapper>
        <LightsRow>
          <Light
            id={0}
            animate={activeLight === 'green'}
            topLeft
            clickable={!audioPlaying} // audioPlaying
            color="#00A74A"
            lightUpColor="#13ff7c"
            onClick={() => this.clickHandler('green')}
          />
          <Light
            id={1}
            animate={activeLight === 'red'}
            topRight
            clickable={!audioPlaying}
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
            clickable={!audioPlaying}
            color="#CCA707"
            lightUpColor="#fed93f"
            onClick={() => this.clickHandler('yellow')}
          />
          <Light
            id={3}
            animate={activeLight === 'blue'}
            bottomRight
            clickable={!audioPlaying}
            color="#094A8F"
            lightUpColor="#1c8cff"
            onClick={() => this.clickHandler('blue')}
          />
        </LightsRow>
      </LightsWrapper>
    );
  }
}
