import { combineReducers } from 'redux';

import { ApiEntity } from 'common/types';
import { apiReducer } from 'redux/api';
import { JwtUserState, userReducer } from 'redux/userReducer';
import { DashboardEntity } from '../types';
import { dashboardReducer } from './dashboardReducer';

export interface State {
  api: ApiEntity;
  jwtUser: JwtUserState;
  dashbroard: any;
}

export const state = combineReducers<State>({
  api: apiReducer,
  jwtUser: userReducer,
  dashbroard: dashboardReducer,
});
