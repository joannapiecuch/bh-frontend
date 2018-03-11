import {RSAA} from 'redux-api-middleware';
import {Config} from '../../config/config'

export const MEMBER_SIGNUP_REQUEST = 'MEMBER_SIGNUP_REQUEST';
export const MEMBER_SIGNUP_SUCCESS = 'MEMBER_SIGNUP_SUCCESS';
export const MEMBER_SIGNUP_FAILURE = 'MEMBER_SIGNUP_FAILURE';

export const memberSignup = (data) => ({
  [RSAA]: {
    endpoint: Config.apiUrl + '/members',
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    types: [
      MEMBER_SIGNUP_REQUEST,
      MEMBER_SIGNUP_SUCCESS,
      MEMBER_SIGNUP_FAILURE
    ]
  }
});
