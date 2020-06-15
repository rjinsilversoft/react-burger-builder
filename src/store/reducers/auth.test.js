import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/" 
        });
    });
    it('should store the token upon login', () => {
        // expect to run the reducer function with the initial State values
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/"             
        }, { 
        // expect to run the reducer function, passing an idToken and userId
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })).toEqual({
        // expect to run the reducer function, (with the above params), and the result should be 
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: "/"             
        });
    });    
});

