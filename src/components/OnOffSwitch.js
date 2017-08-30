// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  off: boolean,
};

const StyledSwitch = styled.div`
  width: 40px;
  height: 20px;
  background-color: #222222;
`;

const Toggler = styled.div`
  background-color: #fc0102;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 2px solid #222222;
  position: relative;
`;

const OnOffSwitch = (props: Props) => {
  return (
    <StyledSwitch>
      <Toggler onClick={!props.off} {...props} />
    </StyledSwitch>
  );
};

OnOffSwitch.defaultProps = {
  off: true,
};

export default OnOffSwitch;
