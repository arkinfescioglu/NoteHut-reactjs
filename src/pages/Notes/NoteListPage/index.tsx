import React, {useEffect} from 'react';
import AppsContainer from "components/AppsContainer";
import NoteListSideBarContent from "./NoteListSideBarContent";
import NoteListContent from "./NoteListContent";
import useTrans from "core/hooks/useTrans";
import useNoteService from "hooks/api/useNoteService";
import useNote from "providers/NoteProvider/useNote";

const NoteListPage = () => {

    const {trans} = useTrans();

    const {
        getAll
    } = useNoteService();

    const {
        resetNoteList
    } = useNote()

    useEffect(() => {
        getAll({
            search: null,
        });
        return () => {
            resetNoteList();
        }
    }, []);

    return(
        <>
            <AppsContainer
                title={trans("notes.title")}
                sidebarContent={<NoteListSideBarContent />}
            >
                <NoteListContent />
            </AppsContainer>
        </>
    )
}

export default NoteListPage;
