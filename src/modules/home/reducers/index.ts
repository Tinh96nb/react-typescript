import { ApiEntity } from 'common/types';
import { combineReducers } from 'redux';
import { apiReducer } from 'redux/api';
import { homeReducer } from './homeReducer';

import { HomeEntity } from '../types';

export interface State {
  api: ApiEntity;
  home: HomeEntity;
}

export const state = combineReducers<State>({
  api: apiReducer,
  home: homeReducer,
});
