import './main.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { loginRoutes } from './modules/login/routes';

import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Deu Ruim!</div>,
  },
];

// junta todas as rotas
const router = createBrowserRouter([
  ...mainRoutes,
  ...loginRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
