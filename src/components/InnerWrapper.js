// @flow
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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

const InnerWrapper = styled.div`position: relative;`;

const ButtonsRow = styled.div`margin-bottom: -4px;`;

export default (props: {}) =>
  <InnerWrapper>
    <ButtonsRow>
      <Button topLeft clickable={false} color="#00A74A" />
      <Button topRight clickable={false} color="#9F0F17" />
    </ButtonsRow>
    <ButtonsRow>
      <Button bottomLeft clickable={false} color="#CCA707" />
      <Button bottomRight clickable={false} color="#094A8F" />
    </ButtonsRow>
  </InnerWrapper>;
