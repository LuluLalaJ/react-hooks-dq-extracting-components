import React, { useState } from "react";
import { messages, contacts } from "../data";
import Nav from "./Nav";
import Main from "./Main";

function App() {

  const activeMessage = messages.find(message => message.type === "received")
  const activeUser = activeMessage.name 

  return (
    <div className="app">
      <Nav contacts={contacts} active={activeUser}/>
      <Main messages={messages}/>
    </div>
  );
}

export default App;
