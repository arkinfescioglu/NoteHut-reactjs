import {List, Popconfirm, Tooltip} from 'antd';
import React, {useMemo} from 'react';
import {Note} from "types/Models/Note";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useNoteService from "hooks/api/useNoteService";
import useApp from "providers/AppProvider/useApp";
import {NoteListActions} from "types/NoteListAction";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import useNote from "providers/NoteProvider/useNote";
import InfoIcon from '@mui/icons-material/Info';

interface IProps {
    item: Note;
}

const NoteListItem: React.FC<IProps> = ({
    item
}) => {

    const {
        toggleNoteIsImportant,
        deleteById,
        restoreById
    } = useNoteService();

    const {
        noteListActionType,
        toggleAddNoteModal
    } = useApp();

    const {
        setCurrentNote,
    } = useNote();

    const handleDelete = () => {
        deleteById(item.id);
    }

    const handleRestore = () => {
        restoreById(item.id);
    }

    const handleIsImportant = () => {
        toggleNoteIsImportant(item.id);
    }

    const handleShowNote = () => {
        setCurrentNote(item);
        toggleAddNoteModal();
    }

    const deleteIcon = useMemo(() => (
        <Popconfirm
            title="Are you sure to delete this note?"
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
        >
            <Tooltip placement="top" title="Move to trash">
                <IconButton color="secondary" aria-label="Move to trash">
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </Popconfirm>
    ), [item.isTrash]);

    const getRestoreButton = useMemo(() => {
        if (noteListActionType === NoteListActions.ISTRASH) {
            return (
                <>
                    <Popconfirm
                        title="Are you sure to restore this note?"
                        onConfirm={handleRestore}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Tooltip placement="top" title="Restore note">
                            <IconButton color="primary" aria-label="Restore note">
                                <RestoreFromTrashIcon/>
                            </IconButton>
                        </Tooltip>
                    </Popconfirm>
                </>
            );
        }
        return <></>
    }, [noteListActionType]);

    const getInfoButton = useMemo(() => (
        <>
            <Tooltip placement="top" title="Show Note">
                <IconButton
                    color="primary"
                    aria-label="Note info"
                    onClick={handleShowNote}
                >
                    <InfoIcon/>
                </IconButton>
            </Tooltip>
        </>
    ), [noteListActionType]);

    const importantIcon = useMemo(() => {
        if (noteListActionType === NoteListActions.ISTRASH) {
            return <></>
        }
        return (
            <Tooltip placement="top" title="İmportant">
                <IconButton
                    color="primary"
                    aria-label="important"
                    onClick={handleIsImportant}
                >
                    {item.isImportant ? <StarIcon/> : <StarBorderIcon/>}
                </IconButton>
            </Tooltip>
        )
    }, [item.isImportant, noteListActionType]);

    return (
        <>
            <List.Item
                actions={[
                    getInfoButton,
                    importantIcon,
                    getRestoreButton,
                    deleteIcon
                ]}
                className="note-list-item"
            >
                <div
                    onClick={handleShowNote}
                >
                    {item.noteTitle}
                </div>
            </List.Item>
        </>
    )
}

export default NoteListItem;
