import * as request from 'api/request_dashboard';
import { requestAxios } from 'redux/api';

const FETCH_ARTICLES = 'home/FETCH_ARTICLES';
const FETCH_MENU = 'home/FETCH_MENU';

export const fetchArticle = (parameters = {}) => {
  return (dispatch) => {
    dispatch(requestAxios(request.getListArticle(parameters)))
    .then((response) => { 
      dispatch({ type: FETCH_ARTICLES, articles: response });
    });
  }
}

export const fetchMenu = (parameters) => {
  return (dispatch) => {
    const listMenu = [
        {
            title: 'Menu1',
            link: 'link1'
        },
        {
            title: 'Menu2',
            link: 'link2'
        }
    ]
    dispatch({ type: FETCH_MENU, menu: listMenu });
  }
}

const initialState = {
  menu: [],
  articles: [],
}
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
    case FETCH_ARTICLES:
      return { ...state, ...action };
    default:
      return state;
  }
};
