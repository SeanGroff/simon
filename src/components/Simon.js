// @flow
import React from 'react';
import styled from 'styled-components';

import Lights from '../containers/LightsContainer';
import CenterConsole from '../containers/CenterConsoleContainer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: DodgerBlue;
`;

const BoardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 100%;
  box-shadow: 0 0 12px #222222;
  width: 472px;
  height: 472px;
  position: relative;
`;

export default function Simon(props: any) {
  return (
    <Wrapper>
      <BoardWrapper>
        <Lights />
        <CenterConsole />
      </BoardWrapper>
    </Wrapper>
  );
}
