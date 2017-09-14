// @flow
import React from 'react';
import styled from 'styled-components';
// import { connect } from 'react-redux';
import InnerWrapper from './InnerWrapper';
import CenterConsole from './CenterConsole';

const Simon = styled.div`
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

/**
 * @todo Connect to Redux
 */
export default (props: {}) =>
  <Simon>
    <InnerWrapper />
    <CenterConsole />
  </Simon>;
