// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import powerOnOffAction from '../actions/powerOnOffAction';
import startGameAction from '../actions/startGameAction';
import { nextTurnThunk } from '../actions/nextTurnAction';
import LightsWrapper from './LightsWrapper';
import CenterConsole from './CenterConsole';

type Props = {
  powerOnOffAction(): { type: string, payload: boolean },
  startGameAction(randomNumber: number): { type: string, payload: number },
  nextTurnThunk(): any,
  power: boolean,
  counter: number,
  lightSequence: ?(Number[]),
  playerTurn: boolean,
};

type State = {
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      powerOnOffAction,
      startGameAction,
      nextTurnThunk,
    },
    dispatch,
  );

export class Simon extends Component<Props, State> {
  state: State = { playerTurn: false };

  componentWillUpdate(nextProps: Props) {
    if (
      nextProps.lightSequence !== this.props.lightSequence &&
      nextProps.lightSequence &&
      nextProps.lightSequence.length
    ) {
      nextProps.nextTurnThunk();
    }
  }

  render() {
    return (
      <SimonContainer>
        <LightsWrapper {...this.props} />
        <CenterConsole {...this.props} />
      </SimonContainer>
    );
  }
}

const EnhancedSimon = connect(mapStateToProps, mapDispatchToProps)(Simon);

export default EnhancedSimon;
