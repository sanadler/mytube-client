import reducer from './auth';
import {setAuthToken, clearAuth, authSuccess, authError} from '../actions/auth';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.authToken).toEqual(null);
        expect(state.currentUser).toEqual(null);
        expect(state.loading).toEqual(false);
        expect(state.error).toEqual(null);
    });

   it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('setAuthToken', () => {
        it('Should set the auth token', () => {
            let state = {
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            };
            const authToken = 10;
            state = reducer(state, setAuthToken(authToken));
            expect(state.currentUser).toEqual(null);
            expect(state.loading).toEqual(false);
            expect(state.authToken).toEqual(authToken);
            expect(state.error).toEqual(null);
        });
    });

    describe('clearAuth', () => {
        it('Should clear the auth token', () => {
            let state = {
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            };
            const authToken = 10;
            state = reducer(state, setAuthToken(authToken));
            state = reducer(state, clearAuth());
            expect(state.currentUser).toEqual(null);
            expect(state.loading).toEqual(false);
            expect(state.authToken).toEqual(null);
            expect(state.error).toEqual(null);
        });
    });

    describe('authSuccess', () => {
        it('authentication should be successful', () => {
            let state = {
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            };
            const currentUser = 'sarah';
            state = reducer(state, authSuccess(currentUser));
            expect(state.currentUser).toEqual(currentUser);
            expect(state.loading).toEqual(false);
            expect(state.authToken).toEqual(null);
            expect(state.error).toEqual(null);
        });
    });

    describe('authError', () => {
        it('authentication should be unsucessful', () => {
            let state = {
                authToken: null,
                currentUser: null,
                loading: false,
                error: null
            };
            const error = 'this is an error';
            state = reducer(state, authError(error));
            expect(state.currentUser).toEqual(null);
            expect(state.loading).toEqual(false);
            expect(state.authToken).toEqual(null);
            expect(state.error).toEqual(error);
        });
    });
});
