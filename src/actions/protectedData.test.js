import {
    FETCH_PROTECTED_DATA_SUCCESS,
    fetchProtectedDataSuccess,
    FETCH_PROTECTED_DATA_ERROR,
    fetchProtectedDataError
} from './protectedData';

describe('fetchProtectedDataSuccess', () => {
    it('Should give success when protected data is fetched', () => {
        const data = 'protected';
        const action = fetchProtectedDataSuccess(data);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('fetchProtectedDataError', () => {
    it('Should give error when protected data is fetched', () => {
        const error = 'this is an error';
        const action = fetchProtectedDataError(error);
        expect(action.type).toEqual(FETCH_PROTECTED_DATA_ERROR);
        expect(action.error).toEqual(error);
    });
});
