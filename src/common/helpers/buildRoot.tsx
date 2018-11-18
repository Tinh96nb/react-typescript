import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CheckAuth from './checkAuth'
import configureStore  from 'redux/configureStore';

export default function buildRoot(Container: any, module: any) {
  const { persistor, store } = configureStore(module);
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CheckAuth>
        	{Container}
        </CheckAuth>
      </PersistGate>
    </Provider>
    , document.getElementById('root')
  );
}
