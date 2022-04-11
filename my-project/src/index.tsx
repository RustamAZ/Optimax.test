import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './hoc/App/App';
import StoreService from './components/StoreService/StoreService';
import { StoreServiceProvider } from './components/StoreServiceContext/StoreServiceContext';
import store from './redux/store';

import './styles/index.scss';

const storeService = new StoreService;

ReactDOM.render(
    <Provider store={store}>
      <StoreServiceProvider value={storeService}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreServiceProvider>
    </Provider>,
  document.getElementById('root')
);
