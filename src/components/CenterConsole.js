import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  border-radius: 100%;
  top: 50%;
  left: 50%;
  background-color: #ece7ee;
  border: 12px solid #333333;
  width: 220px;
  height: 220px;
  margin: -120px 0 0 -120px;
`;

export default () => <Wrapper />;
