// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Light from './Light';

const LightsWrapper = styled.div`position: relative;`;

const LightsRow = styled.div`margin-bottom: -4px;`;

export default class Lights extends Component {
  constructor(props: {}) {
    super(props);
    this.state = { lightOn: 100 };
  }

  componentWillReceiveProps(nextProps: {}) {
    nextProps.lightSequence.forEach(light => {
      this.setState((prevState, props) => ({
        lightOn: light,
      }));
    });
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
          />
          <Light
            id={1}
            animate={this.state.lightOn === 1}
            topRight
            clickable={this.props.playerTurn}
            color="#9F0F17"
            lightUpColor="#ff4c4c"
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
          />
          <Light
            id={3}
            animate={this.state.lightOn === 3}
            bottomRight
            clickable={this.props.playerTurn}
            color="#094A8F"
            lightUpColor="#1c8cff"
          />
        </LightsRow>
      </LightsWrapper>
    );
  }
}
