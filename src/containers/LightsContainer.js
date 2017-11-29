import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  getActiveLightSelector,
  isLightClickableSelector,
} from '../redux/modules/lights';
import Lights from '../components/Lights';

type LightType = {
  color: string,
  active: boolean,
};

type Props = {
  activeLight: ?(LightType[]),
  isClickable: boolean,
};

type State = {
  activeLight: string,
};

const mapStateToProps = state => {
  return {
    activeLight: getActiveLightSelector(state),
    isClickable: isLightClickableSelector(state),
  };
};

class LightsContainer extends Component<Props, State> {
  state = {
    activeLight: '',
  };

  componentWillReceiveProps({ activeLight }: Props) {
    this.setState(() => ({
      activeLight,
    }));
  }

  render() {
    const { isClickable } = this.props;
    return (
      <Lights activeLight={this.state.activeLight} clickable={isClickable} />
    );
  }
}

export default connect(mapStateToProps)(LightsContainer);
