import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ReduxStoreContext } from './redux-hooks/hooks';
import { store } from './redux-hooks/store/store';

ReactDOM.render(
  <BrowserRouter>
    <ReduxStoreContext.Provider value={store}>
      <App />
    </ReduxStoreContext.Provider>
  </BrowserRouter>
  ,
  document.getElementById('root') as HTMLElement
);
