import React, {useCallback, useEffect, useMemo, useState} from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import {styled} from "@mui/material/styles";
import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SaveIcon from '@mui/icons-material/Save';

import {Form} from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import useApp from "providers/AppProvider/useApp";
import useNote from "providers/NoteProvider/useNote";
import useTrans from "core/hooks/useTrans";
import useAntApi from "core/hooks/useAntApi";
import InputWithLabel from 'components/Form/InputWithLabel';
import DangerButton from "../Form/Buttons/DangerButton";
import SuccessButton from "../Form/Buttons/SuccessButton";


const ReactQuillWrapper = styled(ReactQuill)(() => {
    return {
        "& .ql-toolbar": {
            borderRadius: "8px 8px 0 0",
        },
        "& .ql-container": {
            borderRadius: "0 0 8px 8px",
            minHeight: 400,
            maxHeight: 450,
        },
    };
});

function BootstrapDialogTitle(props: any) {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

interface IProps {
    data?: any;
}

const CreateNoteModal: React.FC<IProps> = ({
    data
}) => {

    const [noteDetail, setNoteDetail] = useState<any>(null);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    const {toggleAddNoteModal, addNoteModalIsOpen} = useApp();

    const {
        appendNoteList,
        currentNote,
        updateNoteList,
        resetCurrentNote
    } = useNote();

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const QuillModules = useMemo(() => ({
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            ['code-block'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['link'],
            ['clean']
        ],
    }), []);

    const {
        form,
        post,
        put
    } = useAntApi({
        resetForm: false,
        showSuccess: true
    });

    const {trans} = useTrans();

    useEffect(() => {
        if(!!currentNote) {
            form.setFieldsValue({
                noteTitle: currentNote?.noteTitle,
                noteContent: currentNote?.noteContent
            });
            setNoteDetail(currentNote?.noteContent);
            setIsEdit(!!currentNote?.noteTitle);
        }
    }, [currentNote]);

    useEffect(() => {
        return () => {
            resetCurrentNote();
        }
    }, [addNoteModalIsOpen]);

    const handleDetailChange = (value: string) => {
        form.setFieldsValue({
            noteContent: value
        });
        setNoteDetail(value);
    }

    const handleSubmit = () => {
        if(!!currentNote) {
            update();
        } else {
            create();
        }
    }

    const create = useCallback(() => {
        post("notes/store", (response) => {
            if(response.success && response.data) {
                appendNoteList(response.data);
            }
        });
    }, [])

    const update = useCallback(() => {
        put("notes/update", (response) => {
            if(response.success && response.data) {
                updateNoteList(response.data, currentNote?.id);
            }
        }, {
            id: currentNote?.id
        });
    }, [currentNote?.id]);

    const getModalTitle = useMemo(() => {
        return isEdit
            ? "Note Info"
            : trans("notes.add");
    }, [isEdit])

    return (
        <>
            <Dialog
                fullScreen={fullScreen}
                open={true}
                fullWidth={true}
                maxWidth="xl"
                onClose={toggleAddNoteModal}
                aria-labelledby="responsive-dialog-title"
            >
                <BootstrapDialogTitle
                    id="customized-dialog-title"
                    onClose={toggleAddNoteModal}
                >
                    {getModalTitle}
                </BootstrapDialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Form form={form}>
                            <InputWithLabel
                                text={trans("notes.noteTitle")}
                                name="noteTitle"
                            />
                            <ReactQuillWrapper
                                placeholder={trans("notes.detail")}
                                onChange={handleDetailChange}
                                value={noteDetail}
                                modules={QuillModules}
                            />
                        </Form>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <DangerButton
                        text={trans("common.close")}
                        onClick={toggleAddNoteModal}
                        icon={
                            <HighlightOffIcon
                                style={{
                                    fontSize: 17,
                                    marginRight: 5
                                }}
                            />
                        }
                    />
                    <SuccessButton
                        text={trans("common.save")}
                        onClick={handleSubmit}
                        icon={
                            <SaveIcon
                                style={{
                                    fontSize: 17,
                                    marginRight: 5
                                }}
                            />
                        }
                    />
                </DialogActions>
            </Dialog>
        </>
    )
}

export default CreateNoteModal;
