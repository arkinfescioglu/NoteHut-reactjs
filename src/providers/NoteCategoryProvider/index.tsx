import React, {useReducer} from 'react';
import NoteCategoryContextReducer, {NoteCategoryActions} from "./NoteCategoryContextReducer";
import {NoteCategory} from "../../types/Models/NoteCategory";
import NoteCategoryContext from "./NoteCategoryContext";
import NoteCategoryContextState from "./NoteCategoryContextState";

const NoteCategoryProvider:React.FC<any> = ({
    children
}) => {

    const [state, dispatch] = useReducer(
        NoteCategoryContextReducer,
        NoteCategoryContextState,
        () => NoteCategoryContextState,
    );

    const setCategoryList = (data: NoteCategory[]) => {
        dispatch({
            type: NoteCategoryActions.SET_CATEGORY_LIST,
            payload: data
        });
    }

    const appendCategoryList = (data: NoteCategory[] | NoteCategory) => {
        dispatch({
            type: NoteCategoryActions.APPEND_CATEGORY_LIST,
            payload: data
        });
    }

    const updateCategoryList = (data: NoteCategory, id: any) => {
        dispatch({
            type: NoteCategoryActions.UPDATE_CATEGORY_LIST,
            payload: {
                id: id,
                data: data
            }
        });
    }

    const deleteCategoryList = (id: any) => {
        dispatch({
            type: NoteCategoryActions.DELETE_CATEGORY_LIST,
            payload: id
        });
    }

    const resetCategoryList = () => {
        dispatch({
            type: NoteCategoryActions.RESET_CATEGORY_LIST,
        });
    }

    const totalCategory = () => {
        return state?.categoryList?.length;
    }

    return(
        <>
            <NoteCategoryContext.Provider
                value={{
                    ...state,
                    setCategoryList,
                    appendCategoryList,
                    updateCategoryList,
                    deleteCategoryList,
                    resetCategoryList,
                    totalCategory,
                }}
            >
                {children}
            </NoteCategoryContext.Provider>
        </>
    )
}

export default NoteCategoryProvider;
