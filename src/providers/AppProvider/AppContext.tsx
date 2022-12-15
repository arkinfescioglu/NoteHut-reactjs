import React from 'react';
import {ContextState} from "./index";
import {LocaleTypes} from "types/LocaleTypes";
import {NoteListActionType} from "types/NoteListAction";

export interface IAppContext {
    loading: boolean;
    navCollapsed: boolean;
    isAppDrawerOpen: boolean;
    noteListActionType: NoteListActionType,
    addNoteModalIsOpen: boolean;
    locale: any;
    accountSettingsTab: any;
    setLoading: (value: boolean) => void;
    setNavCollapsed: (value: boolean) => void;
    setLocale: (value: LocaleTypes) => void;
    setNoteListActionType: (action: NoteListActionType) => void;
    toggleDrawer: () => void;
    toggleAddNoteModal: () => void;
    getNoteListActionTitle: () => string;
    setAccountSettingsTab: (val: "accountSettings" | "changePassword") => any;
}

export default React.createContext<IAppContext>({
    ...ContextState,
    setLoading: (value: boolean) => null,
    setNavCollapsed: (value: boolean) => null,
    setLocale: (value: LocaleTypes) => null,
    setNoteListActionType: (action: NoteListActionType) => null,
    toggleDrawer: () => null,
    toggleAddNoteModal: () => null,
    getNoteListActionTitle: () => "",
    setAccountSettingsTab: (val: "accountSettings" | "changePassword") => "",
    accountSettingsTab: "accountSettings",
});
