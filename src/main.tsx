import './main.css';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';


createRoot(document.getElementById('root')!).render(
  < GlobalProvider >
    <StrictMode>
      <App />
    </StrictMode>
  </GlobalProvider>

)
