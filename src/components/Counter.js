// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  on: false,
  count: 0,
};

const StyledCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #222222;
  background-color: #32050c;
  font-size: 32px;
  border-radius: 10px;
  width: 50px;
  color: ${(props: Props) => (props.on ? '#DC0D29' : '#430710')};
`;

const Counter = (props: Props) =>
  <StyledCounter>
    {props.count}
  </StyledCounter>;

Counter.defaultProps = {
  on: false,
  count: 0,
};

export default Counter;
