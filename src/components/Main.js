import React from "react";
import Message from "./Message";
import Form from "./Form";

function Main({messages}) {
    const renderMessages = messages.map((message) => {
        return <Message key={message.id} message={message}/>
    })

    return(
    <main>
    <h2>Messages</h2>
    <section className="messages">
        <ul>
        {renderMessages}
        </ul>
    </section>
    <Form />
    </main>
    )
}

export default Main