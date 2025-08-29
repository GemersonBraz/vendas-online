
import { useState } from 'react';
import { useNavigate } from "react-router";
import { useGlobalContext } from "./useGlobalContext";
import { URL_AUTH } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/erroStatus"
import { setAuthorizationToken } from "../functions/connection/auth";
import { ProductRoutes } from "../../modules/product/routes"
import { ConnectionAPIPost } from '../functions/connection/connectionAPI';
import type { AuthType } from "../../modules/login/types/AuthType";
import type { MethodType } from '../functions/connection/connectionAPI';
import ConnectionAPI from '../functions/connection/connectionAPI';





export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setNotification, setUser } = useGlobalContext();

    const request = async <T>(
        url: string,
        method: MethodType,
        saveGlobal?: (object: T) => void,
        body?: unknown,
    ): Promise<T | undefined> => {

        setLoading(true);

        const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
            .then((result) => {
                if (saveGlobal) {
                    saveGlobal(result);
                }
                return result;
            })
            .catch((error: Error) => {
                setNotification(error.message, 'error');
                return undefined;
            });
        setLoading(false);
        return returnObject;
    };

    const authRequest = async (body: unknown): Promise<void> => {
        setLoading(true);

        await ConnectionAPIPost<AuthType>(URL_AUTH, body)
            .then((result) => {
                setUser(result.user);
                setAuthorizationToken(result.accessToken);
                navigate(ProductRoutes.PRODUCT);

                return result;
            })
            .catch(() => {
                setNotification(ERROR_INVALID_PASSWORD, 'error');
                return undefined;
            });
        setLoading(false);

    };

    return {
        loading,
        authRequest,
        request,
        //aquitinha um postRequest, apaguei tava dando erro.
    };
};

