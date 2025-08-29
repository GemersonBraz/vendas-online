

export const MethodsEnum = {
    GET: "get",
    POST: "post",
    PUT: "put",
    DELETE: "delete",
    PATCH: "patch",
} as const;

// Tipo para uso nos métodos
export type MethodsEnum = typeof MethodsEnum[keyof typeof MethodsEnum];
