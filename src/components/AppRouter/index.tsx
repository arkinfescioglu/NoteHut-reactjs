import React, {Suspense, useCallback, useMemo} from 'react';
import {Routes, Route} from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";
import AllRoutes from "./AllRoutes";
import RouteList from "pages/Routes";
import {AppRouterMiddlewares, IAppRouter} from "types/IAppRouter";
import Loader from "../Loader";

const AppRouter = () => {

    const routeList = useMemo<IAppRouter[]>(() => RouteList, [])

    const getComponent = useCallback((
        middlewareName: AppRouterMiddlewares,
        component: any
    ) => {
        const middlewareObject = {
            "auth": () => (
                <AuthRoutes
                    Component={component}
                />
            ),
            "guest": () => (
                <GuestRoutes
                    Component={component}
                />
            ),
            "all": () => (
                <AllRoutes
                    Component={component}
                />
            ),
        }
        return middlewareObject?.[middlewareName]?.() ?? middlewareObject["all"]();
    }, []);

    const mapRoutes = () => {
        return routeList.map((item, index) => (
            <Route
                key={`routeList--${index}--${item.path}`}
                path={item.path}
                element={getComponent(item.middleware, item.component)}
            />
        ))
    }

    return(
        <>
            <Suspense fallback={<Loader />}>
                <Routes>

                    {mapRoutes()}

                    {/*<Route path="*" element={<NoMatch />} />*/}
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRouter;
