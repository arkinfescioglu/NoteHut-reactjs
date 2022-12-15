import useApi from "core/hooks/useApi";
import {ApiCallBack} from "types/GeneralTypes";
import {NoteCategory} from "types/Models/NoteCategory";
import useNoteCategory from "providers/NoteCategoryProvider/useNoteCategory";
import useAntApi from "core/hooks/useAntApi";

export default function () {

    const {
        get,
        deleteReq
    } = useApi();

    const antApi = useAntApi();

    const {
        setCategoryList,
        appendCategoryList,
        updateCategoryList,
        deleteCategoryList
    } = useNoteCategory()

    const getMyCategories = (
        callback: ApiCallBack<NoteCategory> | null = null
    ) => {
        get("notes/categories/index", null, (response) => {
            if (response.success && response.data) {
                setCategoryList(response.data);
            }
            if (typeof callback === "function")
                callback(response as any);
        });
    }

    const create = (
        callback: ApiCallBack<NoteCategory> | null = null
    ) => {
        antApi.post("notes/categories/store", (response) => {
            if (response.success && response.data) {
                appendCategoryList(response.data);
            }
            if (typeof callback === "function")
                callback(response as any);
        });
    }

    const update = (
        id: any,
        callback: ApiCallBack<NoteCategory> | null = null
    ) => {
        antApi.put("notes/categories/update", (response) => {
            if (response.success && response.data) {
                updateCategoryList(response.data, id);
            }
            if (typeof callback === "function")
                callback(response as any);
        }, {
            id
        });
    }

    const destroy = (
        id: any,
        callback: ApiCallBack<any> | null = null
    ) => {
        deleteReq("notes/categories/destroy", {id},(response) => {
            if (response.success) {
                deleteCategoryList(id);
            }
            if (typeof callback === "function")
                callback(response as any);
        });
    }

    return {
        form: antApi.form,
        getMyCategories,
        create,
        update,
        destroy
    }
}
