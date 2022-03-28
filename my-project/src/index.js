import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './hoc/App/App';
import StoreService from './components/StoreService/StoreService';
import { StoreServiceProvider } from './components/StoreServiceContext/StoreServiceContext';
import store, { persistor } from './store';


import './styles/index.scss';

const storeService = new StoreService;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StoreServiceProvider value={storeService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StoreServiceProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
