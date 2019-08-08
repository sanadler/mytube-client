import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import LogIn from './login.js'

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LogIn />', () => {
    let info = {
        loggedIn: false
    };

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <LogIn info={info} />
            </Provider>
        ))
    });
    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <LogIn info={!info} />
            </Provider>
        ))
    });


});