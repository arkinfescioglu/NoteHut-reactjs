
export enum NoteListActions {
    ALL = "all",
    ISTRASH = "isTrash",
    ISIMPORTANT = "isImportant"
}
export type NoteListActionType =
    NoteListActions.ALL
    | NoteListActions.ISTRASH
    | NoteListActions.ISIMPORTANT;
