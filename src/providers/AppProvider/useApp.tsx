import React from 'react';
import AppContext from "./AppContext";

export default function useApp() {
    return React.useContext(AppContext);
}
