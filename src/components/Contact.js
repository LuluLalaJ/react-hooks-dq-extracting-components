import React from "react";

function Contact({contact}) {
    return(
        <li className="contact">
        <div className="icon">{contact[0]}</div>
        {contact}
        </li>
    )
}

export default Contact


/* <li className="contact active">
        <div className="icon">P</div>
        Pamela
        </li> 
        ---> need to add state? to change activity */