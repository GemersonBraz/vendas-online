
import type { RouteObject } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

export const LoginRoutes = {
    LOGIN: '/login',
} as const;

export const loginRoutes: RouteObject[] = [
    {
        path: LoginRoutes.LOGIN,
        element: <LoginScreen />,

    },
];



export type LoginRoutesEnum = typeof LoginRoutes[keyof typeof LoginRoutes];