import React from 'react';
import NoteCategoryContext from "./NoteCategoryContext";

export default function useNoteCategory() {
    return React.useContext(NoteCategoryContext);
}
