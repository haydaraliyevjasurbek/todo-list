import React from "react";
import Header from "./components/Header";
import Notes from "./components/Notes";
import AddButton from "./components/AddButton";
import Modal from "./components/Modal";
import ContextProvider from "./context/Context";
function App() {
  return (
    <ContextProvider>
      <Header />
      <Notes />
      <AddButton />
      <Modal />
    </ContextProvider>
  );
}

export default App;
