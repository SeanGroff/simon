import React from 'react';
import { shallow } from 'enzyme';
import CenterConsole from '../../components/CenterConsole';

it('renders correctly', () => {
  const component = shallow(<CenterConsole />);
  expect(component).toMatchSnapshot();
});
