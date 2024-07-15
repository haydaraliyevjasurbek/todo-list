import React, { useContext } from 'react'
import editImg from "@/assets/images/edit.svg";
import { Context } from '../context/Context';
function AddButton() {
    const {openModal} = useContext(Context)
  return (
    <button className='addButton' onClick={()=>openModal()}>
        <img src={editImg} alt="" />
    </button>
  )
}

export default AddButton