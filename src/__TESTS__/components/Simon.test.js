import React from 'react';
import renderer from 'react-test-renderer';
import Simon from '../../components/Simon';

it('renders correctly', () => {
  const component = renderer.create(<Simon />).toJSON();
  expect(component).toMatchSnapshot();
});
