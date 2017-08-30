import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../../components/Counter';

it('renders a counter display', () => {
  const component = shallow(<Counter />);
  expect(component).toMatchSnapshot();
});
