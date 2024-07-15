import React, { useContext, useEffect, useState } from "react";
import uzImg from "@/assets/images/uz.svg";
import ruImg from "@/assets/images/ru.svg";
import searchImg from "@/assets/images/search.svg";
import closeImg from "@/assets/images/close.svg";
import backImg from "@/assets/images/back.svg";
import { Context } from "../context/Context";

function Header() {
    const [note, setnote] = useState(false)
    const {search, setsearch, searchNote, flag, lang, changeLange} = useContext(Context)
    useEffect(()=>{
      searchNote(search)
    }, [search])
  return (
    <header className="header">
      <div className={`header__notes ${note ? 'active' : ''}`}>
        <button className="header__lang" onClick={()=>changeLange(flag)}>
          {
            flag ? <div className="header__lang-inner">
            uz
            <img src={uzImg} alt="" />
          </div>
          : <div className="header__lang-inner">
            ru
            <img src={ruImg} alt="" />
          </div>
          }
        </button>
        <h1 className="header__title">{lang.appbartitle}</h1>
        <button className="header__search" onClick={()=> setnote(true)}>
          <img src={searchImg} alt="" />
        </button>
      </div>
      <div className="header__form">
        <button className="header__back" onClick={()=> setnote(false)}>
            <img src={backImg} alt="" />
        </button>
        <input className="header__inp" placeholder={lang.appbarseacrch} onChange={(e)=>setsearch(e.target.value)} value={search}/>
        <button className="header__close" onClick={()=> setsearch('')}>
            <img src={closeImg} alt="" />
        </button>
      </div>
    </header>
  );
}

export default Header;
