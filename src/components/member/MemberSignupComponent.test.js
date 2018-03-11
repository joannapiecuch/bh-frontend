import React from 'react';
import { shallow } from 'enzyme';
import MemberSignupComponent from './MemberSignupComponent';

it('submit form', () => {
  const handleSubmit = jest.fn();

  const component = shallow(<MemberSignupComponent handleSubmit={handleSubmit}/>);
  component.find('form').simulate('submit');

  expect(handleSubmit).toHaveBeenCalled();
});
