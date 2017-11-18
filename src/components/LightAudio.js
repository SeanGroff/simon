// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string,
};

const StyledLight = styled.audio`
  display: inline-block;
  background: transparent;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const LightAudio = ({ src, ...props }: Props) => {
  return <StyledLight src={src} preload="auto" controls />;
};

export default LightAudio;
