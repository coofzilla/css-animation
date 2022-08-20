import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import Ball from 'components/Ball/Ball';
import { GlobalStyle } from 'components/index.styled';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Root = () => {
  return (
    <App>
      <GlobalStyle />
      <Ball />
    </App>
  );
};

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
