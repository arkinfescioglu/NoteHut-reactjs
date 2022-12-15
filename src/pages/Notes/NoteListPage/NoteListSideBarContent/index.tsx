import React, { useMemo} from "react";
import {Box, Button, List, Zoom} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AppScrollbar from "components/AppScrollbar";
import AppList from "components/AppList";
// import useNoteCategory from "providers/NoteCategoryProvider/useNoteCategory";
import CategoryListItem from "./CategoryListItem";
import {NoteCategory} from "types/Models/NoteCategory";
// import {Fonts} from "shared/constants/AppEnums";
// import useNoteCategoryService from "../../../../hooks/api/useNoteCategoryService";
import useApp from "providers/AppProvider/useApp";
import ActionListItem from "./ActionListItem";
import BallotIcon from '@mui/icons-material/Ballot';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import useTrans from "core/hooks/useTrans";

const NoteListSideBarContent = () => {

    const {
        toggleAddNoteModal
    } = useApp()

    const {trans} = useTrans();

    // const {
    //     categoryList
    // } = useNoteCategory();

    // const {
    //     getMyCategories
    // } = useNoteCategoryService();

    // useEffect(() => {
    //     getMyCategories()
    // }, []);

    const actionList = useMemo(() => [
        {
            key: "all",
            label: trans("notes.all"),
            icon: BallotIcon
        },
        {
            key: "isImportant",
            label: trans("notes.important"),
            icon: PriorityHighIcon
        },  {
            key: "isTrash",
            label: trans("notes.trash"),
            icon: DeleteSweepIcon
        },
    ], []);

    const renderCategoryListItem = (item: NoteCategory) => (
        <>
            <CategoryListItem
                key={item.id}
                item={item}
            />
        </>
    )

    const renderActionListItem = (item: any) => (
        <ActionListItem
            key={item.id}
            item={item}
            Icon={item.icon}
        />
    )

    return (
        <>
            <Box
                sx={{
                    px: { xs: 4, md: 7 },
                    pt: { xs: 2, md: 2 },
                    pb: 1,
                }}
            >
                <Zoom in style={{ transitionDelay: "300ms" }}>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            padding: "8px 28px",
                            borderRadius: 8,
                            "& .MuiSvgIcon-root": {
                                fontSize: 26,
                            },
                        }}
                        startIcon={<AddIcon />}
                        onClick={toggleAddNoteModal}
                    >
                        {trans("notes.add")}
                    </Button>
                </Zoom>
            </Box>

            <AppScrollbar className="scroll-app-sidebar">
                <Box
                    sx={{
                        pr: 4,
                        pb: { xs: 4, md: 5, lg: 6.2 },
                    }}
                >
                    <List
                        sx={{
                            mb: { xs: 2, xl: 2 },
                        }}
                        component="nav"
                        aria-label="main task folders"
                    >
                        <AppList
                            data={actionList}
                            renderRow={renderActionListItem}
                        />
                    </List>

                    {/*<Box*/}
                    {/*    component="h4"*/}
                    {/*    sx={{*/}
                    {/*        mt: { xs: 2, xl: 2 },*/}
                    {/*        px: { xs: 3, md: 3, lg: 3 },*/}
                    {/*        fontWeight: Fonts.REGULAR,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    Categories*/}
                    {/*</Box>*/}

                    {/*<List component="nav" aria-label="main mailbox folders">*/}
                    {/*    <AppList*/}
                    {/*        data={categoryList}*/}
                    {/*        renderRow={renderCategoryListItem}*/}
                    {/*    />*/}
                    {/*</List>*/}

                </Box>
            </AppScrollbar>
        </>
    );
}

export default NoteListSideBarContent;
