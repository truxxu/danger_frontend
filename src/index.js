import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider as TopicsProvider } from './context/TopicsContext';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <TopicsProvider>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </TopicsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
