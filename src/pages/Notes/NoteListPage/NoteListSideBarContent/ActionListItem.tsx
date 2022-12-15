import React from 'react';
import {alpha, ListItem, ListItemText} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Fonts} from "shared/constants/AppEnums";
import useApp from "providers/AppProvider/useApp";
import {NoteListActionType} from "types/NoteListAction";
import useNote from "providers/NoteProvider/useNote";
import useNoteService from "hooks/api/useNoteService";

interface NavListItemProps {
    [x: string]: any;
}

const NavListItem: React.FC<NavListItemProps> = (props) => (
    <ListItem
        {...props}
    />
);

const NoteListSidebarListWrapper = styled(NavListItem)(({theme}) => {
    return {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: "0 30px 30px 0",
        marginBottom: 1,
        marginTop: 1,
        color: theme.palette.text.primary,
        cursor: "pointer",
        [theme.breakpoints.up("md")]: {
            paddingLeft: 20,
            paddingRight: 20,
        },
        [theme.breakpoints.up("lg")]: {
            paddingLeft: 24,
            paddingRight: 24,
        },

        "& .MuiSvgIcon-root": {
            marginRight: 14,
            fontSize: 20,
        },

        "&:hover,&:focus,&.active": {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
        },

        "&.active": {
            color: theme.palette.primary.main,
            "& .list-item-text": {
                "& .MuiTypography-body1": {
                    fontWeight: Fonts.SEMI_BOLD,
                },
            },
        },
    };
});

interface IProps {
    item: any;
    Icon: any;
}

const ActionListItem: React.FC<IProps> = ({
    item,
    Icon
}) => {

    const {
        setNoteListActionType,
        noteListActionType
    } = useApp();

    const {
        getAll
    } = useNoteService();

    const {
        resetNoteList
    } = useNote();

    const handleClick = () => {
        setNoteListActionType(item.key as NoteListActionType);
        resetNoteList();
        getAll({
            search: null,
            isImportant: item.key,
            isTrash: item.key,
            totalNote: 0
        });
    }

    return (
        <>
            <NoteListSidebarListWrapper
                onClick={handleClick}
                className={`${item.key === noteListActionType ? "active": ""}`}
            >
                <Icon/>
                <ListItemText
                    sx={{
                        "& .MuiTypography-body1": {
                            fontSize: 14,
                        },
                    }}
                    primary={item.label}
                    className="list-item-text"
                />
            </NoteListSidebarListWrapper>
        </>
    );
}

export default ActionListItem;
