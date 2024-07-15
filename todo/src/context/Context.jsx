import { createContext, useEffect, useState } from "react";
export const Context = createContext();
import { ru, uz } from "@/language";
function ContextProvider({ children }) {
  const [modal, setmodal] = useState(false);
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [edit, setedit] = useState(false)
  const [notes, setnotes] = useState(getNotes());
  const [editNote, seteditNote] = useState({})
  const [search, setsearch] = useState('')
  const [flag, setflag] = useState(false)
  const [lang, setlang] = useState(ru)
  function getNotes(){
    
    let notesStorage = localStorage.getItem("notes")
    if(JSON.parse(notesStorage)?.length > 0){
        return JSON.parse(localStorage.notes)
    }else{
        return [
            {
              id: 1,
              title: "Assalomu Aleykum",
              text: `Biz bilan kerakli ma'lumotlaringizni qulay interfeysda saqlang!`,
              date: new Date().toLocaleDateString(),
            },
            
        ]
    }
  }
  function changeLange(bool) {
    setlang(bool ? ru : uz)
    setflag(!bool)
  }
  function addNote(title, text) {
    if (title != "" && text != "") {
      let newNote = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 1,

        title,
        text,
        date: new Date().toLocaleDateString(),
      };
      setnotes([...notes, newNote]);
      setmodal(false);
      settitle("");
      settext("");
    }
  }
  function delNote(id){
    setnotes(notes.filter((note)=>note.id != id))
  }
  function changeNote(note) {
    settitle(note.title)
    settext(note.text)
    seteditNote(note)
    setedit(true)
    setmodal(true)
  }
  function openModal() {
    settext('')
    settitle('')
    setmodal(true)
    setedit(false)
  }
  function editingNote() {
    setnotes(notes.map((note)=>{
      if (note.id === editNote.id) {
        note.title = title
        note.text = text
        note.date = new Date().toLocaleDateString()
      }
      return note
    }))
    closeModal()
  }
  function closeModal() {
    setmodal(false)
    setedit(false)
    settitle('')
    settext('')
  }
  function searchNote(word) {
    setnotes(notes.filter((note)=>note.title.toLowerCase().includes(word.toLowerCase())))
    // console.log(word)
  }
  useEffect(() => {
    localStorage.notes = JSON.stringify(notes)
  }, [notes]);
  return (
    <Context.Provider
      value={{
        modal,
        setmodal,
        title,
        settitle,
        text,
        settext,
        notes,
        addNote,
        delNote,
        edit, 
        setedit,
        changeNote,
        openModal,
        editingNote,
        seteditNote,
        search,
        setsearch,
        searchNote,
        flag,
        lang,
        changeLange
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
