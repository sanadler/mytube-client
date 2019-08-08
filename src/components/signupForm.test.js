import React from 'react';
import { shallow } from 'enzyme';

import SignUpForm from './signupForm';

describe('<SignUpForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUpForm />);
  });
});