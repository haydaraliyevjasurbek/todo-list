import React, { useContext } from "react";
import { Context } from "../context/Context";

function Modal() {
  const {
    modal,
    setmodal,
    title,
    settitle,
    text,
    settext,
    addNote,
    edit,
    setedit,
    editingNote,
    lang
  } = useContext(Context)
  return (
    <div className={`modal ${modal ? 'active' : ''}`}>
      <div className="modal__window">
        <h2 className="modal__title">{edit ? lang.titlewindowedit : lang.titlewindow}</h2>
        <label>
          <span>{lang.modalTitle}</span>
          <input type="text" placeholder={lang.modalTitle} value={title} onChange={(e) => settitle(e.target.value)} />
        </label>
        <label>
          <span>{lang.modalContent}</span>
          <input type="text" placeholder={lang.modalContent} value={text} onChange={(e) => settext(e.target.value)} />
        </label>
        <div className="modal__buttons">
          <button className="btn del" onClick={() => setmodal(false)}>{lang.closebtn}</button>
          {
            edit ?
              (<button className="btn edit" onClick={() => editingNote()}>{lang.editwindowbtn}</button>)
              : (<button className="btn edit" onClick={() => addNote(title, text)}>{lang.addbtn}</button>)
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
