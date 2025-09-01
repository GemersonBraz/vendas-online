import './main.css';
import { GlobalProvider } from './shared/hooks/useGlobalContext';
import { createRoot } from 'react-dom/client';

import App from './App';
import { DataProvider } from './shared/hooks/useDataContext';


createRoot(document.getElementById('root')!).render(
  < GlobalProvider >
    <DataProvider>
      <App />
    </DataProvider>
  </GlobalProvider>

)
