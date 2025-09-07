import './main.css';
import { loginRoutes } from './modules/login/routes';

import { createBrowserRouter, RouterProvider, type RouteObject } from "react-router-dom";

import { useNotification } from './shared/hooks/useNotification';
import { firstScreenRoutes } from './modules/firstScreen/routes';
import { productScreens } from './modules/product/routes';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useRequests } from './shared/hooks/useRequests';
import { useEffect } from 'react';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';


const routes: RouteObject[] = [...loginRoutes];
const routesLooggedIn: RouteObject[] = [...productScreens, ...firstScreenRoutes].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

// junta todas as rotas
const router = createBrowserRouter([...routes, ...routesLooggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useGlobalContext();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser)
  }, [])

  return (
    <>
      {contextHolder}
      < RouterProvider router={router} />
    </>

  )
}
export default App
