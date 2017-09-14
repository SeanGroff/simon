// @flow
import React from 'react';
import styled from 'styled-components';
import Simon from './components/Simon';

const App = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: DodgerBlue;
`;

/** */
export default (props: {}) =>
  <App>
    <Simon {...props} />
  </App>;
