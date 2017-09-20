// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  color: string,
  clickable: boolean,
  topLeft?: boolean,
  topRight?: boolean,
  bottomLeft?: boolean,
  bottomRight?: boolean,
};

const StyledLight = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-color: ${(props: Props) => props.color};
  border: 12px solid #333333;
  border-top-left-radius: ${(props: Props) => (props.topLeft ? '100%' : '0')};
  border-top-right-radius: ${(props: Props) => (props.topRight ? '100%' : '0')};
  border-bottom-left-radius: ${(props: Props) =>
    props.bottomLeft ? '100%' : '0'};
  border-bottom-right-radius: ${(props: Props) =>
    props.bottomRight ? '100%' : '0'};
  pointer-events: ${(props: Props) => (props.clickable ? 'auto' : 'none')};
`;

const Light = (props: Props) => <StyledLight {...props} />;

Light.defaultProps = {
  clickable: false,
};

export default Light;
