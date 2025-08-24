

export const MethodsEnum = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
} as const;

// Tipo para uso nos métodos
export type MethodsEnum = typeof MethodsEnum[keyof typeof MethodsEnum];
