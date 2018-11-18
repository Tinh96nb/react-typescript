import { state as authState, State as AuthState } from 'modules/auth/reducers';
import { state as homeState, State as HomeState } from 'modules/home/reducers';
import { state as dashboardState, State as DashboardState } from 'modules/dashboard/reducers';

import { applyMiddleware, compose, createStore, Store } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';

export const MODULE_HOME = 'home';
export const MODULE_AUTH = 'auth';
export const MODULE_DASHBOARD = 'dashboard';
export const MODULE_ERROR = 'error';


const persistConfig = {
  key: 'phamtinh',
  storage,
  whitelist: <any>[]
};

const isDebugging = process.env.ENV === 'dev' ? true : false;
const debugMode = !!window.location.search.match(/debug/gi);

let middlewares = <any>[];
if (isDebugging && debugMode) {
  middlewares = [ reduxThunk, logger];
} else {
  middlewares = [ reduxThunk];
}

export default function configureStore(module = MODULE_HOME) {
  switch (module) {
    case MODULE_HOME:
      const reducerHome = persistReducer(persistConfig, homeState);
      const storeHome: Store<HomeState> = createStore(
        reducerHome,
        compose(applyMiddleware(...middlewares))
      );
      const persistorHrm = persistStore(storeHome);
      return { persistor: persistorHrm, store: storeHome };
    case MODULE_AUTH:
      const reducerAuth = persistReducer(persistConfig, authState);
      const storeAuth: Store<AuthState> = createStore(
        reducerAuth,
        compose(applyMiddleware(reduxThunk))
      );
      const persistorAuth = persistStore(storeAuth);
      return { persistor: persistorAuth, store: storeAuth };
    case MODULE_DASHBOARD:
      const reducerDashbard = persistReducer(persistConfig, dashboardState);
      const storeDashboard: Store<DashboardState> = createStore(
        reducerDashbard,
        compose(applyMiddleware(reduxThunk))
      );
      const persistorDashboard = persistStore(storeDashboard);
      return { persistor: persistorDashboard, store: storeDashboard };
  }
}
