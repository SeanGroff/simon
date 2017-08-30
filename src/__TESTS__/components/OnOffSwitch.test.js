import React from 'react';
import { shallow } from 'enzyme';
import OnOffSwitch from '../../components/OnOffSwitch';

it('renders a toggle switch correctly', () => {
  const component = shallow(<OnOffSwitch />);
  expect(component).toMatchSnapshot();
});

// it('should contain <Toggler />', () => {
//   const component = shallow(<OnOffSwitch />);
//   const toggler = component.find('Toggler');
//   expect(toggler.length).toBe(1);
// });
