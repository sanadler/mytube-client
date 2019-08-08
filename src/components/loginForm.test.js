import React from 'react';
import { shallow } from 'enzyme';

import LogInForm from './loginForm';

describe('<LogInForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LogInForm />);
  });
});