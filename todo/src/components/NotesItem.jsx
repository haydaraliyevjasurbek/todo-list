import React, { useContext } from 'react'
import delImg from "@/assets/images/del.svg";
import editImg from "@/assets/images/edit.svg";
import { Context } from '../context/Context';
function NotesItem({note}) {
  const {delNote, changeNote, lang} = useContext(Context)
  
  return (
    <div className='notes__item'>
      {note.id}
        <div className="notes__item-top">
            <h3 className="notes__item-title">{note.title}</h3>
            <p className="notes__item-date">{note.date}</p>
        </div>
        <p className="notes__item-text">{note.text}</p>
        <div className="notes__buttons">
            <button className="notes__item-btn btn edit" onClick={()=>changeNote(note)}>
              <img src={editImg} alt="" />
              <span>{lang.editbtn}</span>
            </button>
            <button className="notes__item-btn btn del" onClick={()=>delNote(note.id)}>
              <img src={delImg} alt="" />
              <span>{lang.deledit}</span>
            </button>
        </div>
    </div>
  )
}

export default NotesItem