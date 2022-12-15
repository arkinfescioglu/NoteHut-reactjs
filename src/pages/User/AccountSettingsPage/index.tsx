import React from 'react';
import AppsContainer from "components/AppsContainer";
import AccountSettingsSidebarContent from "./AccountSettingsSidebarContent";
import AccountSettingsContent from "./AccountSettingsContent";
import useTrans from "core/hooks/useTrans";

const AccountSettingsPage = () => {

    const {trans} = useTrans();

    return(
        <>
            <AppsContainer
                title={trans("users.accountSettings")}
                sidebarContent={<AccountSettingsSidebarContent />}
            >
                <AccountSettingsContent />
            </AppsContainer>
        </>
    )
}

export default AccountSettingsPage;
