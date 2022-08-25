import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'app';
import './i18n';
import 'styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
