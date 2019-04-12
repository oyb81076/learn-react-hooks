import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { ReduxStoreContext } from './hooks';
import { store } from './store/store';

ReactDOM.render(
  <ReduxStoreContext.Provider value={store}>
    <App />
  </ReduxStoreContext.Provider>,
  document.getElementById('root') as HTMLElement
);
