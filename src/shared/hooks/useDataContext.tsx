
import { createContext, useState, useContext } from "react";
import type { ProductType } from "../../modules/product/types/ProductType";


interface DataContext {
    products?: ProductType[];
}

interface DataContextProps {
    // Defina aqui as propriedades que você quer compartilhar globalmente   
    data: DataContext;
    setData: (data: DataContext) => void;
};


const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
    children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
    const [data, setData] = useState<DataContext>({});

    return (
        <DataContext.Provider value={{ data: data, setData: setData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => {
    const { data, setData } = useContext(DataContext);

    const setProducts = (products: ProductType[]) => {
        setData({
            ...data,
            products,
        })
    }

    return {
        products: data?.products || [],
        setProducts,
    };

};