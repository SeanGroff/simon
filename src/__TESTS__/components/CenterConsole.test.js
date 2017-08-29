import React from 'react';
import renderer from 'react-test-renderer';
import CenterConsole from '../../components/CenterConsole';

it('renders correctly', () => {
  const component = renderer.create(<CenterConsole />).toJSON();
  expect(component).toMatchSnapshot();
});
