
export const NoteContextActions = {
    SET_NOTE_LIST: "SET_NOTE_LIST",
    APPEND_NOTE_LIST: "APPEND_NOTE_LIST",
    UPDATE_NOTE_LIST: "UPDATE_NOTE_LIST",
    DELETE_NOTE_LIST: "DELETE_NOTE_LIST",
    RESET_NOTE_LIST: "RESET_NOTE_LIST",
    SET_SELECTED_CATEGORY: "SET_SELECTED_CATEGORY",
    SET_IS_IMPORTANT: "SET_IS_IMPORTANT",
    TOGGLE_IS_IMPORTANT: "TOGGLE_IS_IMPORTANT",
    SET_SHOW_LOAD_MORE: "SET_SHOW_LOAD_MORE",
    SET_CURRENT_NOTE: "SET_CURRENT_NOTE",
    RESET_CURRENT_NOTE: "RESET_CURRENT_NOTE",
}

export default function NoteContextReducer(
    state: any,
    action: any
) {
    switch (action.type) {

        case NoteContextActions.SET_NOTE_LIST: {
            return {
                ...state,
                noteList: action.payload
            }
        }

        case NoteContextActions.APPEND_NOTE_LIST: {
            let newData: any[] = [];
            if (Array.isArray(action.payload)) {
                newData = [
                    ...state.noteList,
                    ...action.payload
                ];
            } else {
                newData = [
                    ...state.noteList,
                    action.payload
                ];
            }
            return {
                ...state,
                noteList: newData
            }
        }

        case NoteContextActions.UPDATE_NOTE_LIST: {
            let newData: any[] = state.noteList.filter((item: any) => item.id !== action.payload.id);
            return {
                ...state,
                noteList: [
                    ...newData,
                    action.payload.data
                ]
            }
        }

        case NoteContextActions.SET_IS_IMPORTANT: {
            let noteList = [
                ...state.noteList
            ];
            const index = noteList.findIndex((note: any) => note.id === action.payload.id);
            noteList[index] = {
                ...noteList[index],
                isImportant: !Boolean(action.payload.value)
            }
            return {
                ...state,
                noteList: noteList
            }
        }

        case NoteContextActions.TOGGLE_IS_IMPORTANT: {
            let noteList = [
                ...state.noteList
            ];
            const index = noteList.findIndex((note: any) => note.id === action.payload);
            noteList[index] = {
                ...noteList[index],
                isImportant: !Boolean(noteList[index]["isImportant"])
            }
            console.log({
                2: noteList[index]
            })
            return {
                ...state,
                noteList: noteList
            }
        }

        case NoteContextActions.DELETE_NOTE_LIST: {
            return {
                ...state,
                noteList: state.noteList.filter((item: any) => item.id !== action.payload)
            }
        }

        case NoteContextActions.RESET_NOTE_LIST: {
            return {
                ...state,
                noteList: []
            }
        }

        case NoteContextActions.SET_SELECTED_CATEGORY: {
            return {
                ...state,
                selectedCategory: action.payload
            }
        }

        case NoteContextActions.SET_SHOW_LOAD_MORE: {
            return {
                ...state,
                showLoadMore: action.payload
            }
        }

        case NoteContextActions.SET_CURRENT_NOTE: {
            return {
                ...state,
                currentNote: action.payload
            }
        }

        case NoteContextActions.RESET_CURRENT_NOTE: {
            return {
                ...state,
                currentNote: null
            }
        }

        default:
            return state;

    }
}
