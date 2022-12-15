import React from "react";
import NoteContext from "./NoteContext";

export default function useNote() {
    return React.useContext(NoteContext);
}
