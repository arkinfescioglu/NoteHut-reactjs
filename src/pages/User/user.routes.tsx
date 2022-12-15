import {IAppRouter} from "../../types/IAppRouter";
import React from "react";

export const UserRoutes: IAppRouter[] = [
    {
        path: "/user/account-settings",
        component: React.lazy(() => import("./AccountSettingsPage")),
        middleware: "auth"
    },
]
