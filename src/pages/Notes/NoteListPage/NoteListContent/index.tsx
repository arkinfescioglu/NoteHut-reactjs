import React from 'react';
import {Note} from "types/Models/Note";
import NoteListItem from "./NoteListItem";
import useNote from "providers/NoteProvider/useNote";
import {List} from "antd";
import useApp from "providers/AppProvider/useApp";
import AppsContent from "components/AppsContent";
import useNoteService from "hooks/api/useNoteService";
import NoteListContentHeader from "./NoteListContentHeader";
import NoteListContentFooter from "./NoteListContentFooter";

const NoteListContent = () => {

    const {
        noteList,
        showLoadMore
    } = useNote();

    const {
        getAll
    } = useNoteService();

    const {
        getNoteListActionTitle,
        noteListActionType
    } = useApp()

    const renderRow = (item: Note) => (
        <NoteListItem item={item}/>
    );

    const loadMore = () => {
        getAll({
            totalNote: noteList.length,
            isImportant: noteListActionType,
            isTrash: noteListActionType,
        });
    }

    return (
        <>
            <NoteListContentHeader
                title={getNoteListActionTitle()}
            />
            <AppsContent>
                <List
                    bordered={false}
                    dataSource={noteList}
                    renderItem={renderRow}
                />
            </AppsContent>
            <NoteListContentFooter
                loadMore={loadMore}
                showLoadMore={showLoadMore}
            />
        </>
    )
}

export default NoteListContent;
