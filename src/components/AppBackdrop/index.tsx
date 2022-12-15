import React from 'react';
import useApp from "providers/AppProvider/useApp";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const AppBackdrop = () => {

    const {loading} = useApp();

    return(
        <>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}

export default React.memo(AppBackdrop)
