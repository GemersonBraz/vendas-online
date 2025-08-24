
import { createContext, useState, useContext } from "react";

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
    message: string;
    type: NotificationType;
    description?: string;
}

interface GlobalData {
    accessToken?: string;
    notification?: NotificationProps;
}

interface GlobalContextProps {
    // Defina aqui as propriedades que você quer compartilhar globalmente   
    globalData: GlobalData;
    setGlobalData: (globalData: GlobalData) => void;
};


const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
    children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [globalData, setGlobalData] = useState<GlobalData>({});

    return (
        <GlobalContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    const { globalData, setGlobalData } = useContext(GlobalContext);

    const setAccessToken = (accessToken: string) => {
        setGlobalData({
            ...globalData,
            accessToken: accessToken,
        });
    };

    const setNotification = (message: string, type: NotificationType, description?: string) => {
        setGlobalData({
            ...globalData,
            notification: {
                message,
                type,
                description,
            },
        });
    };
    return {
        notification: globalData?.notification,
        accessToken: globalData?.accessToken,
        setAccessToken,
        setNotification,
    }
};