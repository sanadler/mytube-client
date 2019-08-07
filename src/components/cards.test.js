import React from 'react';
import { shallow } from 'enzyme';

import Cards from './cards.js';

describe('<Cards />', () => {
  it('Renders without crashing', () => {
    shallow(<Cards />);
  });
});