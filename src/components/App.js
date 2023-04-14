import React from "react";
import { messages, contacts } from "../data";
import Nav from "./Nav";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Nav contacts={contacts}/>
      <Main messages={messages}/>
    </div>
  );
}

export default App;
