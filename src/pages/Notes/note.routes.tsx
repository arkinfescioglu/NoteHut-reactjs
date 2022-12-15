import {IAppRouter} from "../../types/IAppRouter";
import React from "react";

export const NoteRoutes: IAppRouter[] = [
    {
        path: "/notes/list",
        component: React.lazy(() => import("./NoteListPage")),
        middleware: "auth"
    },
]
