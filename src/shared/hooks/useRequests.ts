import axios from "axios";
import { useState } from 'react';
import { useGlobalContext } from "./useGlobalContext";
import { ConnectionAPIPost } from "../functions/connection/connectionAPI";
import { URL_AUTH } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/erroStatus"
import { useNavigate } from "react-router";
import { ProductRoutes } from "../../modules/product/routes"
import { setAuthorizationToken } from "../functions/connection/auth";
import type { AuthType } from "../../modules/login/types/AuthType";




export const useRequests = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setNotification, setUser } = useGlobalContext();

    const getRequest = async (url: string) => {

        setLoading(true);

        return await axios({
            method: "get",
            url: url,
        })
            .then((result) => {
                return result.data;
            })
            .catch(() => {
                alert('Erro.');
            });
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

    return { loading, getRequest, authRequest };
};

