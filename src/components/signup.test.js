import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import SignUp from './signup.js'

const mockStore = configureMockStore();
const store = mockStore({});

describe('<SignUp />', () => {
    let info = {
        loggedIn: true
    };

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <SignUp info={info} />
            </Provider>
        ))
    });

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <SignUp info={!info} />
            </Provider>
        ))
    });

});