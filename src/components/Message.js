import React from "react";

function Message({message}) {
    const {id, type, name, content} = message
    return(
        <li className={"message " + type} >
            <div className="icon">{name[0]}</div>
            <span className="content">{content}</span>
        </li>
    )
}

export default Message

