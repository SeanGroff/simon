import React from 'react';
import { shallow } from 'enzyme';
import Light from '../../components/Light';

it('should render a Light with a green background', () => {
  const component = shallow(<Light color="green" />);
  expect(component).toMatchSnapshot();
});
