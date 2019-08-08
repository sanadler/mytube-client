import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import MyVideos from './myVideos'

const mockStore = configureMockStore();
const store = mockStore({});

describe('<MyVideos />', () => {
    let info = {
        loggedIn: true
    };

    it('Renders without crashing', () => {
        expect(shallow(
            <Provider store={store}>
                <MyVideos info={info} />
            </Provider>
        ))
    });

});