import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Videos from './allVideos'

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Videos />', () => {
    let info = {
        loggedIn: true
    };

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <Videos info={info} />
            </Provider>
        ))
    });

});