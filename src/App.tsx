import './main.css';
import { loginRoutes } from './modules/login/routes';

import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

import { useNotification } from './shared/hooks/useNotification';
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { productScreens } from './modules/product/routes';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { verifyLoggedIn } from './shared/functions/connection/auth';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...loginRoutes];
  const routesLooggedIn: RouteObject[] = [...productScreens, ...firstScreenRoutes].map((route) => ({
    ...route,
    loader: () => verifyLoggedIn(user, setUser),
  }));

  // junta todas as rotas
  const router = createBrowserRouter([...routes, ...routesLooggedIn]);

  return (
    <>
      {contextHolder}
      < RouterProvider router={router} />
    </>

  )
}
export default App
