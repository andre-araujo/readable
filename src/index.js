import React from 'react';
import { render } from 'react-dom';

import 'whatwg-fetch';

import './styles/generic/reset.scss';
import './styles/generic/global.scss';
import './styles/settings/fonts.scss';

import App from './components/App';

render(
  <App />,
  document.getElementById('root'),
);
