import type { UserType } from "../../../modules/login/types/UserType";
import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants"
import { URL_USER } from "../../constants/urls";
import { ConnectionAPIGet } from "./connectionAPI";
import { removeItemStorage, getItemStorage, setItemStorage } from "./storageProxy"



export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATION_KEY, token);
    }

};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = async (user?: UserType, setUser?: (user?: UserType) => void) => {
    const token = getAuthorizationToken();
    if (!token) {
        location.href = '/login';
    }
    if (!user) {
        await ConnectionAPIGet<UserType>(URL_USER)
            .then((userReturn) => {
                if (setUser) {
                    setUser(userReturn);
                }
            })
            .catch(() => {
                unsetAuthorizationToken();
                location.href = '/login';
            });
    }
    alert('Entrou');
    return null;
};