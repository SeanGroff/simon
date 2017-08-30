import React from 'react';
import { shallow } from 'enzyme';
import InnerWrapper from '../../components/InnerWrapper';

it('renders correctly', () => {
  const component = shallow(<InnerWrapper />);
  expect(component).toMatchSnapshot();
});
