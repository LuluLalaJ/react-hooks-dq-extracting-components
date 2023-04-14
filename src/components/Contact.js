import React from "react";

function Contact({contact, active}) {
    const activeClass = (contact === active ? "contact active" : "contact")

    return(
        <li className={activeClass}>
        <div className="icon">{contact[0]}</div>
        {contact}
        </li>
    )
}

export default Contact