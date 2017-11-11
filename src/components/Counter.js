// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  power: boolean,
  counter: ?number,
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
  color: ${({ power }: Props) => (power ? '#DC0D29' : '#430710')};
`;

export default function Counter({ counter, power }: Props) {
  return <StyledCounter power={power}>{counter || '--'}</StyledCounter>;
}
