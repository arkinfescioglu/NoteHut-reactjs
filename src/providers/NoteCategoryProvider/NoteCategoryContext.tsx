import {NoteCategory} from "../../types/Models/NoteCategory";
import React from "react";
import NoteCategoryContextState from "./NoteCategoryContextState";

export interface INoteCategoryContext {
    categoryList: NoteCategory[];
    setCategoryList: (data: NoteCategory[]) => void;
    appendCategoryList: (data: NoteCategory[] | NoteCategory) => void;
    updateCategoryList: (data: NoteCategory, id: any) => void;
    deleteCategoryList: (id: any) => void;
    resetCategoryList: () => void;
    totalCategory: () => number;
}

export default React.createContext<INoteCategoryContext>({
    ...NoteCategoryContextState,
    setCategoryList: (data) => null,
    appendCategoryList: (data) => null,
    updateCategoryList: (data, id) => null,
    deleteCategoryList: (id) => null,
    resetCategoryList: () => null,
    totalCategory: () => 0,
});
