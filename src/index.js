import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

// Mantine UI 
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS 
   
      theme={{
          // Override any other properties from default theme
          breakpoints: {
            xs: '30em',
            sm: '48em',
            md: '64em',
            lg: '74em',
            xl: '90em', 
          },
          colorScheme: 'dark',
          fontFamily: 'New York',
          spacing: { xs: '1rem', sm: '1.2rem', md: '1.8rem', lg: '2.2rem', xl: '2.8rem' },
        }}
      >   
      <Notifications />
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>
);
