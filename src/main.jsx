import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// src/main.jsx ou src/App.jsx
import { BrowserRouter } from 'react-router-dom'; // Importer le BrowserRouter
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import App from './App';

// Remplacez 'UA-XXXXXXXXX-X' par votre ID de suivi Google Analytics
ReactGA.initialize('UA-XXXXXXXXX-X');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

// Log la première vue de page
logPageView();

// Écouter les changements de route si vous utilisez react-router
const history = createBrowserHistory();
history.listen(logPageView);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Enveloppez App avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
