import {Note} from "types/Models/Note";
import React from "react";
import NoteContextState from "./NoteContextState";

interface INoteContext {
    noteList: Note[];
    currentNote: Note | null;
    selectedCategory: any;
    showLoadMore: boolean;
    setNoteList: (data: Note[]) => void;
    appendNoteList: (data: Note[] | Note) => void;
    updateNoteList: (data: Note, id: any) => void;
    deleteNoteList: (id: any) => void;
    setSelectedCategory: (id: any) => void;
    setIsImportant: (id: any, value: boolean) => void;
    toggleIsImportant: (id: any) => void;
    setShowLoadMore: (value: boolean) => void;
    setCurrentNote: (note: Note) => void;
    resetNoteList: () => void;
    resetCurrentNote: () => void;
}

export default React.createContext<INoteContext>({
    ...NoteContextState,
    setNoteList: (data: Note[]) => "",
    appendNoteList: (data: Note[] | Note) => "",
    updateNoteList: (data: Note, id: any) => "",
    deleteNoteList: (id: any) => "",
    setSelectedCategory: (id: any) => "",
    setIsImportant: (id: any, value: boolean) => "",
    toggleIsImportant: (id: any) => "",
    setShowLoadMore: (value: boolean) => "",
    resetNoteList: () => "",
    setCurrentNote: (note: Note) => {},
    resetCurrentNote: () => {},
});
