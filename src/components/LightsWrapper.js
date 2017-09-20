// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Light from './Light';

// .yellow.light{
//   background-color : #fed93f;
// }

// .blue.light{
//   background-color : #1c8cff;
// }

// .red.light{
//   background-color : #ff4c4c;
// }

// .green.light{
//   background-color : #13ff7c;
// }

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
            animate={this.state.lightOn === 0}
            topLeft
            clickable={false}
            color="#00A74A"
            lightUpColor="#13ff7c"
          />
          <Light
            animate={this.state.lightOn === 1}
            topRight
            clickable={false}
            color="#9F0F17"
            lightUpColor="#ff4c4c"
          />
        </LightsRow>
        <LightsRow>
          <Light
            animate={this.state.lightOn === 2}
            bottomLeft
            clickable={false}
            color="#CCA707"
            lightUpColor="#fed93f"
          />
          <Light
            animate={this.state.lightOn === 3}
            bottomRight
            clickable={false}
            color="#094A8F"
            lightUpColor="#1c8cff"
          />
        </LightsRow>
      </LightsWrapper>
    );
  }
}
