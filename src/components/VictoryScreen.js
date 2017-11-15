// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  close: any,
};

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: black;
  color: white;
  font-size: 48px;
  text-transform: capitalize;
  :hover {
    cursor: pointer;
  }
`;

export default function VictoryScreen({ close }: Props) {
  return <Modal onClick={close}>{'You Win!'}</Modal>;
}
