import * as request from 'api/request_auth';
import { requestAxios } from 'redux/api';

export const DO_LOGIN = 'auth/DO_LOGIN';

const initialState = {};

export function postLogin(parameters = {}, cb) {
  return (dispatch) => {
    dispatch(requestAxios(request.postLogin(parameters)))
    .then(
      (response) => {
        cb && cb(response);
      }
    );
  };
}

export const authReducer = (state: any = initialState, action) => {
  return state;
};
