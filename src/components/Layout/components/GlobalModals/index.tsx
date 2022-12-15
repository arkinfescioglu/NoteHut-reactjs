import React from 'react';
import useApp from "providers/AppProvider/useApp";
import CreateNoteModal from "../../../CreateNoteModal";
import isEqual from "react-fast-compare";

interface IProps {
    isLogin: boolean;
}

const GlobalModals:React.FC<IProps> = ({
    isLogin = false
}) =>{

    const {addNoteModalIsOpen} = useApp()

    return(
        <>
            {isLogin && (
                <>
                    {addNoteModalIsOpen && (
                        <CreateNoteModal />
                    )}
                </>
            )}
        </>
    )
}

export default React.memo(GlobalModals, (prev, next) => {
    return isEqual(prev.isLogin, next.isLogin);
})
