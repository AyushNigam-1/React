import React from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const state = {
        "name":"Harry",
        "class":"5th"
    }
return (
    <NoteContext.Provider value={state}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;