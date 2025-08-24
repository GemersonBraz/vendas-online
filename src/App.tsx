import './main.css';
import { loginRoutes } from './modules/login/routes';

import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

import { useNotification } from './shared/hooks/useNotification';


const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <div>Tela Principal</div>,
    errorElement: <div>Deu Ruim!</div>,
  },
];

// junta todas as rotas
const router = createBrowserRouter([...mainRoutes, ...loginRoutes,]);


function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      < RouterProvider router={router} />
    </>

  )
}
export default App
