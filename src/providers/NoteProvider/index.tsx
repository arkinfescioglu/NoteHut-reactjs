import React, {useCallback, useReducer} from 'react';
import NoteContextState from "./NoteContextState";
import NoteContextReducer, {NoteContextActions} from "./NoteContextReducer";
import {Note} from "types/Models/Note";
import NoteContext from "./NoteContext";

const NoteProvider: React.FC<any> = ({
    children
}) => {

    const [state, dispatch] = useReducer(
        NoteContextReducer,
        NoteContextState,
        () => NoteContextState,
    );

    const setNoteList = useCallback((data: Note[]) => {
        dispatch({
            type: NoteContextActions.SET_NOTE_LIST,
            payload: data
        });
    }, [])

    const appendNoteList = useCallback((data: Note[] | Note) => {
        dispatch({
            type: NoteContextActions.APPEND_NOTE_LIST,
            payload: data
        });
    }, [])

    const updateNoteList = useCallback((data: Note, id: any) => {
        dispatch({
            type: NoteContextActions.UPDATE_NOTE_LIST,
            payload: {
                id: id,
                data: data
            }
        });
    }, [])

    const deleteNoteList = useCallback((id: any) => {
        dispatch({
            type: NoteContextActions.DELETE_NOTE_LIST,
            payload: id
        });
    }, [])

    const resetNoteList = useCallback(() => {
        dispatch({
            type: NoteContextActions.RESET_NOTE_LIST,
        });
    }, [])

    const setSelectedCategory = useCallback((id: any) => {
        dispatch({
            type: NoteContextActions.SET_SELECTED_CATEGORY,
            payload: id
        });
    }, [])

    const setIsImportant = useCallback((id: any, value: boolean) => {
        dispatch({
            type: NoteContextActions.SET_IS_IMPORTANT,
            payload: {
                id: id,
                value: value
            }
        });
    }, [])

    const toggleIsImportant = useCallback((id: any) => {
        dispatch({
            type: NoteContextActions.TOGGLE_IS_IMPORTANT,
            payload: id
        });
    }, [])

    const setShowLoadMore = useCallback((value: boolean) => {
        dispatch({
            type: NoteContextActions.SET_SHOW_LOAD_MORE,
            payload: value
        });
    }, []);

    const setCurrentNote = useCallback((note: Note) => {
        dispatch({
            type: NoteContextActions.SET_CURRENT_NOTE,
            payload: note
        });
    }, []);

    const resetCurrentNote = useCallback(() => {
        dispatch({
            type: NoteContextActions.RESET_CURRENT_NOTE,
        });
    }, []);

    return (
        <>
            <NoteContext.Provider
                value={{
                    ...state,
                    setNoteList,
                    appendNoteList,
                    updateNoteList,
                    deleteNoteList,
                    resetNoteList,
                    setSelectedCategory,
                    setIsImportant,
                    toggleIsImportant,
                    setShowLoadMore,
                    setCurrentNote,
                    resetCurrentNote
                }}
            >
                {children}
            </NoteContext.Provider>
        </>
    )
}

export default NoteProvider;
