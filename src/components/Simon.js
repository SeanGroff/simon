// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import powerOnOffAction from '../actions/powerOnOffAction';
import startGameAction from '../actions/startGameAction';
import LightsWrapper from './LightsWrapper';
import CenterConsole from './CenterConsole';

type Props = {
  powerOnOffAction(): { type: string, payload: boolean },
  startGameAction(randomNumber: number): { type: string, payload: number },
  power: boolean,
  counter: number,
  lightSequence: ?(Number[]),
};

const SimonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 100%;
  box-shadow: 0 0 12px #222222;
  width: 472px;
  height: 472px;
  position: relative;
`;

const mapStateToProps = state => ({
  power: state.power,
  counter: state.counter,
  lightSequence: state.lightSequence,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      powerOnOffAction,
      startGameAction,
    },
    dispatch,
  );

export const Simon = (props: Props) =>
  <SimonContainer>
    <LightsWrapper {...props} />
    <CenterConsole {...props} />
  </SimonContainer>;

const EnhancedSimon = connect(mapStateToProps, mapDispatchToProps)(Simon);

export default EnhancedSimon;
