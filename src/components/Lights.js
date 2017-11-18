// @flow
import React from 'react';
import styled from 'styled-components';
import Light from '../containers/LightContainer';
import {
  AUDIO_GREEN,
  AUDIO_RED,
  AUDIO_YELLOW,
  AUDIO_BLUE,
} from '../constants/index';

type Props = {
  activeLight: string,
  clickable: boolean,
  handleClick(color: string): any,
};

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default function Lights({ activeLight, clickable, handleClick }: Props) {
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
          lightColor="green"
          src={AUDIO_GREEN}
        />
        <Light
          id={1}
          animate={activeLight === 'red'}
          topRight
          clickable={clickable}
          color="#9F0F17"
          lightUpColor="#ff4c4c"
          lightColor="red"
          src={AUDIO_RED}
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
          lightColor="yellow"
          src={AUDIO_YELLOW}
        />
        <Light
          id={3}
          animate={activeLight === 'blue'}
          bottomRight
          clickable={clickable}
          color="#094A8F"
          lightUpColor="#1c8cff"
          lightColor="blue"
          src={AUDIO_BLUE}
        />
      </LightsRow>
    </LightsWrapper>
  );
}
