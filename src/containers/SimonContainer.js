// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LightsWrapperContainer from '../containers/LightsWrapperContainer';
import CenterConsole from '../components/CenterConsole';
import {
  toggleGamePower,
  startGameThunk,
  nextLevelThunk,
  playSequenceThunk,
} from '../redux/modules/game';

// type Props = {
//   toggleGamePower(payload: boolean): { type: string, payload: boolean },
//   startGame(): { type: string },
//   startNextRoundAction(): { type: string },
//   power: boolean,
//   counter: number,
//   lightSequence: ?(number[]),
//   playerTurn: boolean,
// };

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: DodgerBlue;
`;

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
  power: state.game.power,
  counter: state.game.counter,
  strictMode: state.game.strictMode,
});

const mapDispatchToProps = (dispatch: *) =>
  bindActionCreators(
    {
      toggleGamePower,
      startGameThunk,
      nextLevelThunk,
      playSequenceThunk,
    },
    dispatch,
  );

export const Simon = (props: any) => (
  <Wrapper>
    <SimonContainer>
      <LightsWrapperContainer {...props} />
      <CenterConsole {...props} />
    </SimonContainer>
  </Wrapper>
);

export default connect(mapStateToProps, mapDispatchToProps)(Simon);
