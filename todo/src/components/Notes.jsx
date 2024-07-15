import { useContext, useState } from 'react'
import listImg from "@/assets/images/list.svg";
import gridImg from "@/assets/images/grid.svg";
import NotesItem from './NotesItem';
import { Context } from '../context/Context';
function Notes() {
    const [grid, setgrid] = useState(false)
    const {notes, search, setsearch, lang } = useContext(Context)
  return (
    <div className={`notes container ${grid ? 'active' : ''}`}>
        <div className="notes__top">
            <h2 className="notes__title">{lang.infobar}</h2>
            <button className="notes__btn" onClick={()=> setgrid(!grid)}>
                <img src={grid ? gridImg : listImg} alt="" />
                <span>{grid ? lang.grid : lang.list}</span>
            </button>
        </div>
        <div className="notes__list">
           {
            notes.map((el,index)=>{
                return <NotesItem key={index} note={el}/>
            })
           }
        </div>
    </div>
  )
}

export default Notes