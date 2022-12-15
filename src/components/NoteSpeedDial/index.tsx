import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import useApp from "providers/AppProvider/useApp";
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const NoteSpeedDial = () => {

    const {toggleAddNoteModal} = useApp()

    return (
        <>
            <SpeedDial
                ariaLabel="Add New Note"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<NoteAddIcon />}
                onClick={toggleAddNoteModal}
            />
        </>
    );
}

export default React.memo(NoteSpeedDial)
