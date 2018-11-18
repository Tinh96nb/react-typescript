import { ApiEntity } from "common/types";
import { combineReducers } from 'redux';
import { apiReducer } from 'redux/api';
import { authReducer } from './authReducer';

export interface State {
  api: ApiEntity;
  auth: any;
}

export const state = combineReducers<State>({
  api: apiReducer,
  auth: authReducer,
});
