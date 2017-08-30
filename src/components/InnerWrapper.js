// @flow
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
