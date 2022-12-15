import React from  "react";
import {AppEnum, Fonts} from "shared/constants/AppEnums";

const SidebarLogo = () => {

    return(
        <>
            <div
                style={{
                    height: 32,
                    margin: 15,
                    color: "white",
                    textAlign: "center",
                    alignItems: "center",
                    alignContent: "center",
                    fontSize: 18,
                    fontWeight: Fonts.BOLD
                }}
            >
                {AppEnum.NAME}
                <p>
                    <small>
                        {AppEnum.VERSION}
                    </small>
                </p>
            </div>
        </>
    )
}

export default React.memo(SidebarLogo);
