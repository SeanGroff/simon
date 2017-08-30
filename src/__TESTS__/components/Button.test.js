import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

it('should render a button with a green background', () => {
  const component = shallow(<Button color="green" />);
  expect(component).toMatchSnapshot();
});
