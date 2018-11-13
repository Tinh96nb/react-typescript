//import { ApiEntity } from 'common/types';
import { combineReducers } from 'redux';
//import { apiReducer } from 'redux/api';
//import { sessionUserReducer, SessionUserState } from 'redux/sessionUser'
import { homeReducer } from './homeReducer';

import { HomeEntity } from '../types';

export interface State {
  //api: ApiEntity;
  //sessionUser: SessionUserState,
  home: HomeEntity;
}

export const state = combineReducers<State>({
  //api: apiReducer,
  //sessionUser: sessionUserReducer,
  home: homeReducer,
});
