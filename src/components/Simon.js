// @flow
import React from 'react';
import styled from 'styled-components';
import InnerWrapper from './InnerWrapper';
import CenterConsole from './CenterConsole';

const Wrapper = styled.div`
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

export default (props: {}) =>
  <Wrapper>
    <InnerWrapper />
    <CenterConsole />
  </Wrapper>;
