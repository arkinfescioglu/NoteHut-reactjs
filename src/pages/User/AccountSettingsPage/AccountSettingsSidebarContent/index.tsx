import React, {useMemo} from 'react';
import useTrans from "core/hooks/useTrans";
import {Box, List, Zoom} from "@mui/material";
import AppScrollbar from "components/AppScrollbar";
import AppList from "components/AppList";
import AccountSettingsSideListItem from "./AccountSettingsSideListItem";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const AccountSettingsSidebarContent = () => {
    const {trans} = useTrans();

    const actionList = useMemo(() => [
        {
            key: "accountSettings",
            label: trans("users.accountSettings"),
            icon: ManageAccountsIcon
        },
        {
            key: "changePassword",
            label: trans("users.changePassword"),
            icon: LockOpenIcon
        },
    ], []);

    const renderActionListItem = (item: any) => (
        <AccountSettingsSideListItem
            key={item.id}
            item={item}
            Icon={item.icon}
        />
    );

    return (
        <>

            <Box
                sx={{
                    alignContent: "center",
                    textAlign: "center",
                    pt: {xs: 2, md: 2},
                    pb: 1,
                }}
            >
                <Zoom in style={{transitionDelay: "300ms"}}>
                    <h5>Menu</h5>
                </Zoom>
            </Box>

            <AppScrollbar className="scroll-app-sidebar">
                <Box
                    sx={{
                        pr: 4,
                        pb: {xs: 4, md: 5, lg: 6.2},
                    }}
                >
                    <List
                        sx={{
                            mb: {xs: 2, xl: 2},
                        }}
                        component="nav"
                        aria-label="main task folders"
                    >
                        <AppList
                            data={actionList}
                            renderRow={renderActionListItem}
                        />
                    </List>

                </Box>
            </AppScrollbar>
        </>
    );
}
export default AccountSettingsSidebarContent;
