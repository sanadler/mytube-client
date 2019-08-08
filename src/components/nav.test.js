import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Nav from './nav.js'

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoggedInNav />', () => {
    let info = {
        loggedIn: false
    };

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <Nav info={info} />
            </Provider>
        ))
    });

});