import React from 'react';
import LayoutMain from "./components/Layout";
import AppRouter from "./components/AppRouter";
import AppProvider from "./providers/AppProvider";
import AuthProvider from "./providers/AuthProvider";
import AuthMiddleware from "./components/AuthMiddleware";
import LocaleProvider from "./providers/LocaleProvider";
import NoteCategoryProvider from "./providers/NoteCategoryProvider";
import NoteProvider from "./providers/NoteProvider";

function App() {
    return (
        <>
            <AppProvider>
                <LocaleProvider>
                    <AuthProvider>
                        <NoteCategoryProvider>
                            <NoteProvider>
                                <AuthMiddleware>
                                    <LayoutMain>
                                        <AppRouter/>
                                    </LayoutMain>
                                </AuthMiddleware>
                            </NoteProvider>
                        </NoteCategoryProvider>
                    </AuthProvider>
                </LocaleProvider>
            </AppProvider>
        </>
    );
}

export default App;
