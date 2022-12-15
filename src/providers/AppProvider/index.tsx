import React, {useCallback, useReducer, useState} from 'react';
import {AppContextActions, AppContextReducer} from "./AppContextReducer";
import AppContext from "./AppContext";
import {LocaleTypes} from "../../types/LocaleTypes";
import {NoteListActions, NoteListActionType} from "../../types/NoteListAction";

export const ContextState = {
    loading: false,
    navCollapsed: false,
    locale: "en",
    noteListActionType: NoteListActions.ALL,
    isAppDrawerOpen: false,
    addNoteModalIsOpen: false,
};

const AppProvider: React.FC<any> = ({
    children
}) => {

    const [state, dispatch] = useReducer(
        AppContextReducer,
        ContextState,
        () => ContextState,
    );

    const [accountSettingsTab, _setAccountSettingsTab] = useState<any>("accountSettings");

    const setAccountSettingsTab = (val: "accountSettings" | "changePassword") => {
        _setAccountSettingsTab(val)
    }

    const setLoading = (value: boolean) => {
        dispatch({
            type: AppContextActions.SET_LOADING,
            payload: value
        });
    }

    const setNavCollapsed = useCallback((value: boolean) => {
        dispatch({
            type: AppContextActions.SET_NAV_COLLAPSED,
            payload: value
        });
    }, [])

    const setLocale = useCallback((value: LocaleTypes) => {
        dispatch({
            type: AppContextActions.SET_LOCALE,
            payload: value
        });
    }, [])

    const toggleDrawer = useCallback(() => {
        dispatch({
            type: AppContextActions.TOGGLE_DRAWER,
        });
    }, [])

    const toggleAddNoteModal = useCallback(() => {
        dispatch({
            type: AppContextActions.TOGGLE_ADD_NOTE_MODAL,
        });
    }, [])

    const setNoteListActionType = useCallback((action: NoteListActionType) => {
        dispatch({
            type: AppContextActions.SET_NOTE_LIST_ACTION_TYPE,
            payload: action
        });
    }, [])

    const getNoteListActionTitle = useCallback(() => {
        const actionTitleObj: any = {
            [NoteListActions.ALL]: "All Notes",
            [NoteListActions.ISTRASH]: "Trash Notes",
            [NoteListActions.ISIMPORTANT]: "Important Notes",
        };
        return actionTitleObj?.[state.noteListActionType] ?? actionTitleObj["all"];
    }, [state.noteListActionType])

    return (
        <>
            <AppContext.Provider
                value={{
                    ...state,
                    setLoading,
                    setNavCollapsed,
                    setLocale,
                    toggleDrawer,
                    toggleAddNoteModal,
                    setNoteListActionType,
                    getNoteListActionTitle,
                    setAccountSettingsTab,
                    accountSettingsTab
                }}
            >
                {children}
            </AppContext.Provider>
        </>
    );
}
export default AppProvider;
