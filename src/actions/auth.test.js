import {
    SET_AUTH_TOKEN,
    setAuthToken,
    CLEAR_AUTH,
    clearAuth,
    AUTH_REQUEST,
    authRequest,
    AUTH_SUCCESS,
    authSuccess,
    AUTH_ERROR,
    authError
} from './auth';

describe('setAuthToken', () => {
    it('Should set auth token', () => {
        const authtoken = 'authenticate';
        const action = setAuthToken(authtoken);
        expect(action.type).toEqual(SET_AUTH_TOKEN);
       // expect(action.authtoken).toEqual(authtoken);
    });
});

describe('clearAuth', () => {
    it('Should clear auth', () => {
        const action = clearAuth();
        expect(action.type).toEqual(CLEAR_AUTH);
    });
});

describe('authRequest', () => {
    it('Should send auth request', () => {
        const action = authRequest();
        expect(action.type).toEqual(AUTH_REQUEST);
    });
});

describe('authSuccess', () => {
    it('Should send auth success', () => {
        const currentUser = 'sarah';
        const action = authSuccess(currentUser);
        expect(action.type).toEqual(AUTH_SUCCESS);
        expect(action.currentUser).toEqual(currentUser);
    });
});


describe('authError', () => {
    it('Should send auth error', () => {
        const error = 'this is an error';
        const action = authError(error);
        expect(action.type).toEqual(AUTH_ERROR);
        expect(action.error).toEqual(error);
    });
});