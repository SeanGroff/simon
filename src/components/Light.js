// @flow
import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  animate: boolean,
  color: string,
  lightUpColor: string,
  lightColor: string,
  clickable: boolean,
  topLeft?: boolean,
  topRight?: boolean,
  bottomLeft?: boolean,
  bottomRight?: boolean,
  handleClick(color: string): any,
};

type Animation = {
  color: string,
  lightUpColor: string,
};

const LightUp = ({ color, lightUpColor }: Animation) => keyframes`
  0% {
    background-color: ${color};;
  }
  30%, 60% {
    background-color: ${lightUpColor};
  }
  100% {
    background-color: ${color};
  }
`;

const LightWrapper = styled.span`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: ${({ color }: Props) => color};
  border: 12px solid #333333;
  border-top-left-radius: ${({ topLeft }: Props) => (topLeft ? '100%' : '0')};
  border-top-right-radius: ${({ topRight }: Props) =>
    topRight ? '100%' : '0'};
  border-bottom-left-radius: ${({ bottomLeft }: Props) =>
    bottomLeft ? '100%' : '0'};
  border-bottom-right-radius: ${({ bottomRight }: Props) =>
    bottomRight ? '100%' : '0'};
  pointer-events: ${({ clickable }: Props) => (clickable ? 'auto' : 'none')};
  animation: ${({ animate, color, lightUpColor }: Props) =>
    animate ? `${LightUp({ color, lightUpColor })} 500ms linear` : 'none'};
  :hover {
    cursor: ${({ clickable }: Props) => (clickable ? 'pointer' : 'initial')};
  }
`;

const Light = ({ handleClick, lightColor, ...props }: Props) => {
  return <LightWrapper onClick={() => handleClick(lightColor)} {...props} />;
};

Light.defaultProps = {
  animate: false,
  clickable: false,
};

export default Light;
