import React from 'react';
import { shallow } from 'enzyme';
import Simon from '../../components/Simon';

it('renders correctly', () => {
  const component = shallow(<Simon />);
  expect(component).toMatchSnapshot();
});
