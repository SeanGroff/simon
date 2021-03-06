// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  toggleGamePower(power: boolean): { type: string, payload: boolean },
  power: boolean,
};

const StyledSwitch = styled.div`
  width: 40px;
  height: 20px;
  background-color: #222222;

  :hover {
    cursor: pointer;
  }
`;

const Toggler = styled.div`
  background-color: #fc0102;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid #222222;
  position: relative;
  left: ${({ power }: Props) => (power ? '20px' : '0')};
  transition: left 0.1s ease-out;
`;

export default function OnOffSwitch({ toggleGamePower, power }: Props) {
  const handleClick = () => toggleGamePower(!power);
  return (
    <StyledSwitch onClick={handleClick}>
      <Toggler power={power} />
    </StyledSwitch>
  );
}
