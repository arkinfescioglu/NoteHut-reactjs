import React from 'react';
import AppsHeader from "components/AppsHeader";
import isEqual from "react-fast-compare";

interface IProps {
    title: string;
}

const NoteListContentHeader:React.FC<IProps> = ({
    title
}) => {

    return(
        <>
            <AppsHeader>
                {title}
            </AppsHeader>
        </>
    )
}
export default React.memo(NoteListContentHeader, (prev, next) => {
    return isEqual(prev.title, next.title);
})
