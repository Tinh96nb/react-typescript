import * as request from 'api/request_dashboard';
import { requestAxios } from 'redux/api';

const FETCH_ARTICLES = 'dashbroard/FETCH_ARTICLES';

export const fetchArticle = (parameters = {}) => {
  return (dispatch) => {
    dispatch(requestAxios(request.getListArticle(parameters)))
    .then((response) => { 
      dispatch({ type: FETCH_ARTICLES, articles: response });
    });
  }
}

const initialState = {
  articles: [],
  article: null
}
export const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, ...action };
    default:
      return state;
  }
};
