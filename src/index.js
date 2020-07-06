import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider as TopicsProvider } from './context/TopicsContext';

ReactDOM.render(
  <React.StrictMode>
    <TopicsProvider>
      <App />
    </TopicsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
