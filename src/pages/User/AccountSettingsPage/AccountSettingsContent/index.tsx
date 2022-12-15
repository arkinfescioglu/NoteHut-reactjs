import React, {useCallback} from 'react';
import AppsContent from "components/AppsContent";
import useApp from "providers/AppProvider/useApp";
import UpdateAccountForm from "./UpdateAccountForm";
import ChangePasswordForm from "./ChangePasswordForm";
import AppsHeader from "components/AppsHeader";

const AccountSettingsContent = () => {

    const {
        accountSettingsTab
    } = useApp();

    const getNoteListActionTitle = useCallback(() => {
        const titleObject: any = {
            accountSettings: "Account Settings",
            changePassword: "Change Password"
        }
        return titleObject?.[accountSettingsTab]
            ?? titleObject["accountSettings"];
    }, [accountSettingsTab]);

    const tabComponents: any = {
        accountSettings: () => <UpdateAccountForm/>,
        changePassword: () =>   <ChangePasswordForm />,
    }

    const getTabComponent = () => {
        return tabComponents?.[accountSettingsTab]?.()
            ?? tabComponents?.["accountSettings"]?.();
    }

    return (
        <>
            <AppsHeader>
                {getNoteListActionTitle()}
            </AppsHeader>
            <AppsContent style={{padding: 10}}>
                {getTabComponent()}
            </AppsContent>
        </>
    );
}

export default AccountSettingsContent;
