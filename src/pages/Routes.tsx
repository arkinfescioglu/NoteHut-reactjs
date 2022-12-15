import {AuthRoutes} from "./Auth/auth.routes";
import {IAppRouter} from "../types/IAppRouter";
import React from "react";
import {NoteRoutes} from "./Notes/note.routes";
import {UserRoutes} from "./User/user.routes";

const RouteList: IAppRouter[] = [
    {
        middleware: "auth",
        path: "/",
        component: React.lazy(() => import("./Dashboard")),
    },
    ...AuthRoutes,
    ...NoteRoutes,
    ...UserRoutes,
];

export default RouteList;
