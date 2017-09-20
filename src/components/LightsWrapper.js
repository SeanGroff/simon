// @flow
import React from 'react';
import styled from 'styled-components';
import Light from './Light';

// .yellow.light{
//   background-color : #fed93f;
// }

// .blue.light{
//   background-color : #1c8cff;
// }

// .red.light{
//   background-color : #ff4c4c;
// }

// .green.light{
//   background-color : #13ff7c;
// }

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default (props: {}) =>
  <LightsWrapper>
    <LightsRow>
      <Light topLeft clickable={false} color="#00A74A" />
      <Light topRight clickable={false} color="#9F0F17" />
    </LightsRow>
    <LightsRow>
      <Light bottomLeft clickable={false} color="#CCA707" />
      <Light bottomRight clickable={false} color="#094A8F" />
    </LightsRow>
  </LightsWrapper>;
