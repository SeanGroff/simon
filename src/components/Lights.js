// @flow
import React from 'react';
import styled from 'styled-components';
import Light from '../containers/LightContainer';

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
        />
        <Light
          id={1}
          animate={activeLight === 'red'}
          topRight
          clickable={clickable}
          color="#9F0F17"
          lightUpColor="#ff4c4c"
          lightColor="red"
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
        />
        <Light
          id={3}
          animate={activeLight === 'blue'}
          bottomRight
          clickable={clickable}
          color="#094A8F"
          lightUpColor="#1c8cff"
          lightColor="blue"
        />
      </LightsRow>
    </LightsWrapper>
  );
}
