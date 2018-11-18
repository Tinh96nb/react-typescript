import * as request from 'api/request_auth';
import * as jwt from 'common/helpers/jwt'
import { requestAxios } from 'redux/api';

export const FETCH_JWT_USER = 'user/FETCH_JWT_USER';
const DELETE_JWT_USER = 'user/DELETE_JWT_USER';

export interface JwtUserState {
  authChecked: boolean;
  me: any;
}
const initialState = {
  authChecked: false,
  me: null,
};

export function verifyUser() {
  return (dispatch) => {
    dispatch(requestAxios(request.postVerifyUser()))
      .then((response) => {
        dispatch({
          type: FETCH_JWT_USER,
          payload: { me: response, authChecked: true },
        });
      })
      .catch(() => {
        dispatch({
          type: FETCH_JWT_USER,
          payload: { ...initialState, authChecked: false },
        });
      });
  };
}

export function killJwtUser(cb) {
  return (dispatch) => {
    dispatch(requestAxios(request.postLogout())).then((response) => {
      jwt.removeStorage();
      jwt.removeHeaderAuthorization();
      dispatch({
        type: DELETE_JWT_USER,
        payload: initialState,
      });
      cb(response);
    });
  };
}

export const userReducer = (state: JwtUserState = initialState, action) => {
  const { type, payload = {} } = action;
  switch (type) {
    case FETCH_JWT_USER:
    case DELETE_JWT_USER:
      return { ...payload };
    default:
      return state;
  }
};
