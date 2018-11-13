import { state as homeState, State as HomeState } from 'modules/home/reducers';

import { applyMiddleware, compose, createStore, Store } from 'redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';

export const MODULE_HOME = 'home';
export const MODULE_AUTH = 'auth';
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
      const reducerHrm = persistReducer(persistConfig, homeState);
      const storeHrm: Store<HomeState> = createStore(
        reducerHrm,
        compose(applyMiddleware(...middlewares))
      );
      const persistorHrm = persistStore(storeHrm);
      return { persistor: persistorHrm, store: storeHrm };
    // case MODULE_AUTH:
    //   const reducerAuth = persistReducer(persistConfig, authState);
    //   const storeAuth: Store<AuthState> = createStore(
    //     reducerAuth,
    //     compose(applyMiddleware(reduxThunk))
    //   );
    //   const persistorAuth = persistStore(storeAuth);
    //   return { persistor: persistorAuth, store: storeAuth };
  }
}
