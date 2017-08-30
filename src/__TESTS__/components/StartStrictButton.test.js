import React from 'react';
import { shallow } from 'enzyme';
import StartStrictButton from '../../components/StartStrictButton';

it('renders a circular button correctly', () => {
  const component = shallow(<StartStrictButton />);
  expect(component).toMatchSnapshot();
});
