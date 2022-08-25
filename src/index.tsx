import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app';
import './i18n';
import 'styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, HashRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);
