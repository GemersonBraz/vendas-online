
import type { RouteObject } from "react-router-dom";
import Product from "./screens/Product";


export const ProductRoutes = {
    PRODUCT: '/product',
} as const;

export const productScreens: RouteObject[] = [
    {
        path: ProductRoutes.PRODUCT,
        element: <Product />,

    },
];

export type ProductRoutesEnum = typeof ProductRoutes[keyof typeof ProductRoutes];