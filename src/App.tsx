import './main.css';
import { loginRoutes } from './modules/login/routes';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { useNotification } from './shared/hooks/useNotification';
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { productScreens } from './modules/product/routes';

// junta todas as rotas
const router = createBrowserRouter([...firstScreenRoutes, ...loginRoutes, ...productScreens]);


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
