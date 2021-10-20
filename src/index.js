import React from 'react';
import ReactDOM from 'react-dom';
import { RootCmp } from './root-cmp';
import { HashRouter as Router } from 'react-router-dom';
import './assets/styles/main.scss';

ReactDOM.render(
    <Router>
      <RootCmp />
    </Router>,
  document.getElementById('root')
);

