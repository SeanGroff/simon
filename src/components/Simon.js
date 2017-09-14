// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import powerOnOffAction from '../actions/powerOnOffAction';
import InnerWrapper from './InnerWrapper';
import CenterConsole from './CenterConsole';

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
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      powerOnOffAction,
    },
    dispatch,
  );

export const Simon = (props: {}) =>
  <SimonContainer>
    <InnerWrapper />
    <CenterConsole {...props} />
  </SimonContainer>;

const EnhancedSimon = connect(mapStateToProps, mapDispatchToProps)(Simon);

export default EnhancedSimon;
