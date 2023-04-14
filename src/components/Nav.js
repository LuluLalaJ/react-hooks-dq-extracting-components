import React from "react"
import Contact from './Contact'

function Nav({contacts}) {
    console.log('inside nav', contacts)
    const renderContacts = contacts.map(contact => {
        return <Contact key={contact.id} contact={contact.name}/>
    })

    return(
    <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
            {renderContacts}
        </ul>
    </nav>
    )
}

export default Nav