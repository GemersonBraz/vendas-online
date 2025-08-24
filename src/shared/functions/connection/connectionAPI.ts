import axios from "axios";

import { MethodsEnum } from "../../enums/methods.enum";
import { ERROR_ACCESS_DENIED, ERROR_UNAUTHORIZED, ERROR_NOT_FOUND, ERROR_INTERNAL_SERVER, ERROR_UNEXPECTED } from "../../constants/erroStatus";

export default class ConnectionAPI {
    static async call<T>(url: string, method: string, body?: unknown) {
        switch (method) {
            case MethodsEnum.GET:
                return (await axios.get<T>(url)).data;
            case MethodsEnum.DELETE:
                return (await axios.delete<T>(url)).data;
            case MethodsEnum.POST:
                return (await axios.post<T>(url, body)).data;
            case MethodsEnum.PUT:
                return (await axios.put<T>(url, body)).data;
            case MethodsEnum.PATCH:
            default:
                return (await axios.patch<T>(url, body)).data;

        }
    }

    static async connect<T>(url: string, method: string, body?: unknown): Promise<T> {
        return ConnectionAPI.call<T>(url, method, body).catch((error) => {
            if (error.response) {
                switch (error.response.status) {
                    case 400:
                        throw new Error(ERROR_ACCESS_DENIED);
                    case 401:
                        throw new Error(ERROR_ACCESS_DENIED);
                    case 403:
                        throw new Error(ERROR_UNAUTHORIZED);
                    case 404:
                        throw new Error(ERROR_NOT_FOUND);
                    case 500:
                        throw new Error(ERROR_INTERNAL_SERVER);
                    default:
                        throw new Error(ERROR_UNEXPECTED);
                }
            }
            throw new Error(ERROR_UNEXPECTED);
        });
    }
}

export const ConnectionAPIGet = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect(url, MethodsEnum.GET);
};
export const ConnectionAPIDelete = async <T>(url: string): Promise<T> => {
    return ConnectionAPI.connect(url, MethodsEnum.DELETE);
};
export const ConnectionAPIPut = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MethodsEnum.PUT, body);
};
export const ConnectionAPIPost = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MethodsEnum.POST, body);
};
export const ConnectionAPIPatch = async <T>(url: string, body: unknown): Promise<T> => {
    return ConnectionAPI.connect(url, MethodsEnum.PATCH, body);
};