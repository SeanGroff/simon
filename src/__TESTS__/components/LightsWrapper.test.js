import React from 'react';
import { shallow } from 'enzyme';
import LightsWrapper from '../../components/LightsWrapper';

it('renders correctly', () => {
  const component = shallow(<LightsWrapper />);
  expect(component).toMatchSnapshot();
});
