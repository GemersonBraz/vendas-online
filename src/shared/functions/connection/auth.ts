import { AUTHORIZATION_KEY } from "../../constants/authorizationConstants"
import { removeItemStorage, getItemStorage, setItemStorage } from "./storageProxy"


export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
    if (token) {
        setItemStorage(AUTHORIZATION_KEY, token);
    }

};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);
