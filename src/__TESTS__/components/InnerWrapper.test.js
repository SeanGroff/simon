import React from 'react';
import renderer from 'react-test-renderer';
import InnerWrapper from '../../components/InnerWrapper';

it('renders correctly', () => {
  const component = renderer.create(<InnerWrapper />).toJSON();
  expect(component).toMatchSnapshot();
});
