import {IAppRouter} from "types/IAppRouter";
import React from "react";

export const AuthRoutes: IAppRouter[] = [
    {
        path: "/login",
        component: React.lazy(() => import("./LoginPage")),
        middleware: "guest"
    },
    {
        path: "/register",
        component: React.lazy(() => import("./RegisterPage")),
        middleware: "guest"
    },
]
