import React from 'react';
import { shallow } from 'enzyme';

import Home from './home.js';

describe('<Home />', () => {
  it('Renders without crashing', () => {
    shallow(<Home />);
  });
});
