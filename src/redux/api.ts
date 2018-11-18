import * as jwtToken from 'common/helpers/jwt'
import { ApiEntity } from 'common/types';

const INCREMENT_LOADINGS = 'api/INCREMENT_LOADINGS';
const DECREMENT_LOADINGS = 'api/DECREMENT_LOADINGS';
const CATCH_API_ERROR = 'api/CATCH_API_ERROR';
const DELETE_API_ERROR = 'api/DELETE_API_ERROR';

export function requestAxios(axiosObj, useErrorModal = true, returnHeader = false) {
  return (dispatch) => {
    const startRequest = () => {
      dispatch({
        type: INCREMENT_LOADINGS,
      });
    };

    const finishedRequest = () => {
      dispatch({
        type: DECREMENT_LOADINGS,
      });
    };

    startRequest();

    return axiosObj
      .then((response) => {
        finishedRequest();
        if (returnHeader) {
          return response
        }
        return response.data;
      })
      .catch((error) => {
        finishedRequest();
        if (useErrorModal) {
          dispatch(createAxiosErrorAction(error));
        }
        if (error.response && error.response.data) {
          throw new Error(JSON.stringify(error.response.data));
        } else {
          throw new Error(JSON.stringify(error));
        }
      });
  };
}

function createAxiosErrorAction(error) {
  const response = error.response;
  let payload = {};

  if (error.response && error.response.data && error.response.data.message) {
    const message =
      typeof error.response.data.message === 'object'
        ? JSON.stringify(error.response.data.message)
        : error.response.data.message;
    payload = {
      status: response.status,
      messageCode: response.data.code ? response.data.code : response.status,
      message
    };
  } else {
    let message = 'Cannot connect network. Please check and try again.';
    if (error.message) {
      message += `[${error.message}]`;
    }
    payload = {
      status: null,
      messageCode: null,
      message
    };
  }

  return {
    type: CATCH_API_ERROR,
    payload
  };
}

export function deleteAxiosError() {
  return (dispatch) => {
    dispatch({ type: DELETE_API_ERROR });
  };
}

const createEmptyXhrState = (): ApiEntity => ({
  loadings: 0,
  error: null,
});

export const apiReducer = (state: ApiEntity  = createEmptyXhrState(), action) => {
  let loadings = state.loadings;

  switch (action.type) {
    case INCREMENT_LOADINGS:
      loadings += 1;
      return { ...state, loadings };
    case DECREMENT_LOADINGS:
      loadings = loadings > 0 ? loadings - 1 : 0;
      return { ...state, loadings };
    case DELETE_API_ERROR:
      return { ...state, error: null };
    case CATCH_API_ERROR:
      if (action.payload.status === 401) {
        jwtToken.removeStorage();
        jwtToken.removeHeaderAuthorization();
        window.location.href = `/auth.html?code=401`;
        return state;
      }
      if (action.payload.status === 403) {
        window.location.href = `/error.html?code=403`;
        return state;
      }

      return { ...state, error: action.payload };
  }
  return state;
};
