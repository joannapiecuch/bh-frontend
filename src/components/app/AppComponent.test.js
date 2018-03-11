import React from 'react';
import App from './AppComponent';
import {shallow} from 'enzyme';

it('renders without crashing', () => {
  const wrapper = shallow(<App/>);
  const welcome = <h2 className="title">Signup on our event</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
