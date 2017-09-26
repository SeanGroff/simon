// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import powerOnOffAction from '../actions/powerOnOffAction';
import { startGameThunk } from '../actions/startGameAction';
import { roundSuccessThunk } from '../actions/roundSuccessAction';
import { nextTurnThunk } from '../actions/nextTurnAction';
import LightsWrapper from './LightsWrapper';
import CenterConsole from './CenterConsole';

type Props = {
  powerOnOffAction(payload: boolean): { type: string, payload: boolean },
  startGameThunk(): any,
  roundSuccessThunk(): any,
  nextTurnThunk(): any,
  power: boolean,
  counter: number,
  lightSequence: ?(number[]),
  playerTurn: boolean,
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
  playerTurn: state.playerTurn,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      powerOnOffAction,
      startGameThunk,
      roundSuccessThunk,
      nextTurnThunk,
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
