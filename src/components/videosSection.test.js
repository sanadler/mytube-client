import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import VideosSection from './videosSection.js'

const mockStore = configureMockStore();
const store = mockStore({});

describe('<LoggedInNav />', () => {
    let info = {
        loggedIn: true
    };

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <VideosSection info={info} />
            </Provider>
        ))
    });

});