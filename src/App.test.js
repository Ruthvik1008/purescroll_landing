import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from './App';

const history = createMemoryHistory();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <>
      <App />
      div
    </>
  );
  ReactDOM.unmountComponentAtNode(div);
});
