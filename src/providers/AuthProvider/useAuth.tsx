import React from 'react';
import AuthContext from "./AuthContext";

export default function useAuth() {
    return React.useContext(AuthContext);
}
