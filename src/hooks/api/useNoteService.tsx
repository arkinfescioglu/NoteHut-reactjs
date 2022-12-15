import useApi from "../../core/hooks/useApi";
import {ApiCallBack} from "../../types/GeneralTypes";
import {Note} from "../../types/Models/Note";
import useNote from "../../providers/NoteProvider/useNote";
import useApp from "../../providers/AppProvider/useApp";
import {NoteListActions} from "../../types/NoteListAction";

export default function useNoteService() {
    const {
        get,
        put
    } = useApi();

    const {
        appendNoteList,
        noteList,
        selectedCategory,
        setNoteList,
        toggleIsImportant,
        deleteNoteList,
        setShowLoadMore
    } = useNote();

    const getAll = (
        input: IGetAll,
        callback: ApiCallBack<Note[]> | null = null
    ) => {
        const totalNote = input.totalNote ?? noteList.length;

        get("notes/index", {
            ...input,
            offset: totalNote,
            categoryId: selectedCategory,
            isImportant: input?.isImportant === NoteListActions.ISIMPORTANT ? true : null,
            isTrash: input?.isTrash === NoteListActions.ISTRASH ? true : null,
        }, (response) => {
            if (response.success && response.data) {
                if (totalNote) {
                    appendNoteList(response.data);
                }
                else {
                    setNoteList(response.data);
                }
                setShowLoadMore((response?.data as any)?.length > 24)
            }
            if (typeof callback === "function")
                callback(response as any);
        });
    }

    const toggleNoteIsImportant = (
        id: any,
        callback: ApiCallBack<Note[]> | null = null
    ) => {
        get("notes/toggleIsImportant", {
            id: id
        }, (response) => {
            if(response.success && response.data) {
                toggleIsImportant(id);
            }
            if (typeof callback === "function")
                callback(response as any);
        })
    }

    const deleteById = (
        id: any,
        callback: ApiCallBack<any> | null = null
    ) => {
        get("notes/destroy", {
            id: id
        }, (response) => {
            if(response.success) {
                deleteNoteList(id);
            }
            if (typeof callback === "function")
                callback(response as any);
        })
    }

    const restoreById = (
        id: any,
        callback: ApiCallBack<any> | null = null
    ) => {
        get("notes/restoreById", {
            id: id
        }, (response) => {
            if(response.success) {
                deleteNoteList(id);
            }
            if (typeof callback === "function")
                callback(response as any);
        })
    }

    return {
        getAll,
        toggleNoteIsImportant,
        deleteById,
        restoreById
    }
}

interface IGetAll {
    search?: any;
    isImportant?: any;
    isTrash?: any;
    totalNote?: any;
}
