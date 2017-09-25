// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Light from './Light';

type Props = {
  powerOnOffAction(payload: boolean): { type: string, payload: boolean },
  startGameAction(randomNumber: number): { type: string, payload: number },
  nextTurnThunk(): any,
  power: boolean,
  counter: number,
  lightSequence: ?(number[]),
  playerTurn: boolean,
};

type State = { lightOn: number };

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default class Lights extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).clickHandler = this.clickHandler.bind(this);
  }

  state = { lightOn: 100 };

  componentWillReceiveProps({ playerTurn, lightSequence }: Props) {
    if (lightSequence && lightSequence.length) {
      lightSequence.forEach((light: number): void => {
        console.log(light);
        this.setState((prevState, props) => ({
          lightOn: light,
        }));
      });
    }

    if (playerTurn && lightSequence && lightSequence.length) {
      lightSequence.forEach((light: number): void => {
        this.setState((prevState, props) => ({
          lightOn: 100,
        }));
      });
    }
  }

  clickHandler(id: number) {
    this.setState((prevState, props) => ({
      lightOn: id,
    }));
  }

  render() {
    return (
      <LightsWrapper>
        <LightsRow>
          <Light
            id={0}
            animate={this.state.lightOn === 0}
            topLeft
            clickable={this.props.playerTurn}
            color="#00A74A"
            lightUpColor="#13ff7c"
            onClick={() => this.clickHandler(0)}
          />
          <Light
            id={1}
            animate={this.state.lightOn === 1}
            topRight
            clickable={this.props.playerTurn}
            color="#9F0F17"
            lightUpColor="#ff4c4c"
            onClick={() => this.clickHandler(1)}
          />
        </LightsRow>
        <LightsRow>
          <Light
            id={2}
            animate={this.state.lightOn === 2}
            bottomLeft
            clickable={this.props.playerTurn}
            color="#CCA707"
            lightUpColor="#fed93f"
            onClick={() => this.clickHandler(2)}
          />
          <Light
            id={3}
            animate={this.state.lightOn === 3}
            bottomRight
            clickable={this.props.playerTurn}
            color="#094A8F"
            lightUpColor="#1c8cff"
            onClick={() => this.clickHandler(3)}
          />
        </LightsRow>
      </LightsWrapper>
    );
  }
}
