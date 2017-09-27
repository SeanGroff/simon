// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Light from './Light';
import { getSequenceOfRandomNumbers, playSequence } from '../utils/logic';

type Props = {
  toggleGamePowerAction(payload: boolean): { type: string, payload: boolean },
  startGameThunk(): any,
  roundSuccessThunk(): any,
  nextTurnThunk(): any,
  power: boolean,
  counter: number,
  lightSequence: ?(number[]),
  playerTurn: boolean,
};

type State = {
  sequence: ?(number[]),
  clickable: boolean,
  lightOn: number,
};

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default class Lights extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this: any).clickHandler = this.clickHandler.bind(this);
    (this: any).toggleClickable = this.toggleClickable.bind(this);
    (this: any).playSequence = this.playSequence.bind(this);
  }

  /**
   * @todo change lightOn to lightSequence
   *
   * @memberof Lights
   */
  state = {
    sequence: [],
    clickable: false,
    lightOn: 100,
  };

  /**
   * @todo When the component mounts GET an Array of random numbers
   *  with a size of 25 and set the lightSequence local state to that Array
   *
   * @memberof Lights
   */
  componentWillMount() {
    // this.setState(() => ({
    //   sequence: getSequenceOfRandomNumbers(),
    // }));
  }

  /**
   *
   * @todo fix this lifecycle method if statement
   *
   * @param {Props} { playerTurn, lightSequence }
   * @memberof Lights
   */
  componentWillReceiveProps({ playerTurn, lightSequence, counter }: Props) {
    /**
     * Resets the lights before the Players turn
     */
    // if (playerTurn && lightSequence && lightSequence.length) {
    //   lightSequence.forEach((light: number): void => {
    //     this.setState((prevState, props) => ({
    //       lightOn: 100,
    //     }));
    //   });
    // }
    /**
     * Sets the state to the light that should light up in the sequence
     */
    // if (
    //   !playerTurn &&
    //   counter &&
    //   this.state.sequence &&
    //   this.state.sequence.length
    // ) {
    //   this.playSequence();
    // }
  }

  clickHandler(id) {
    console.log('click');
    // this.lightUp(id);
    // const lightSeq = this.props.lightSequence;
    // this.setState((prevState, props) => ({
    //   lightOn: id,
    // }));

    // if (lightSeq && lightSeq.length) {
    //   const results = lightSeq.filter(light => light === id);
    //   if (results && results.length === lightSeq.length) {
    //     console.log('success!');
    //     this.props.roundSuccessThunk();
    //   } else {
    //     console.log('WRONG!');
    //     // fire INCORRECT_CHOICE action
    //   }
    // }
  }

  toggleClickable(isClickable: boolean) {
    // this.setState(() => ({
    //   clickable: isClickable,
    // }));
  }

  playSequence() {
    // const seq = this.state.sequence;
    // this.toggleClickable(false);
    // if (seq && seq.length) {
    //   seq.forEach((light: number): void => {
    //     setTimeout(
    //       this.setState(() => ({
    //         lightOn: light,
    //       })),
    //       500,
    //     );
    //   });
    // }
    // setTimeout(this.toggleClickable(true), this.props.counter * 1000);
  }

  render() {
    const lightOn = this.state.lightOn;
    return (
      <LightsWrapper>
        <LightsRow>
          <Light
            id={0}
            animate={lightOn === 0}
            topLeft
            clickable={this.props.playerTurn}
            color="#00A74A"
            lightUpColor="#13ff7c"
            onClick={() => this.clickHandler(0)}
          />
          <Light
            id={1}
            animate={lightOn === 1}
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
            animate={lightOn === 2}
            bottomLeft
            clickable={this.props.playerTurn}
            color="#CCA707"
            lightUpColor="#fed93f"
            onClick={() => this.clickHandler(2)}
          />
          <Light
            id={3}
            animate={lightOn === 3}
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
