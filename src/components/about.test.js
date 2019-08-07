import React from 'react';
import { shallow } from 'enzyme';

import About from './about.js';

describe('<About />', () => {
  it('Renders without crashing', () => {
    shallow(<About />);
  });
});