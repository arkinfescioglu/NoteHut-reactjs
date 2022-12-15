
export interface IAppRouter {
    path: string;
    component: any;
    middleware: AppRouterMiddlewares;
}

export type AppRouterMiddlewares = "auth" | "guest" | "all"
