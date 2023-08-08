import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { Auth0ProviderWithNavigate } from "./contexts/auth0-provider-with-navigate";
import { LoadingProvider } from './contexts/loading-context';
import { CategoryProvider } from './contexts/category-selected-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoadingProvider>
      <CategoryProvider>
        <Auth0ProviderWithNavigate      >
          <App />
        </Auth0ProviderWithNavigate >
      </CategoryProvider>
    </LoadingProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
