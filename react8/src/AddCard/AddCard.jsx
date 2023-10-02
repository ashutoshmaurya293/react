import React, { useState } from 'react'
import './AddCard.css'
import { NavLink } from 'react-router-dom'

function AddCard({updateData,preData}) {
    const [cardData,setcardData] = useState({
        title:"",
        img:"",
        desc:""
    })
    const submit = ()=>{
      updateData([cardData,...preData])
      console.log(cardData);
}
  return (
    <div className='form'>
    <h1>Add your Note</h1>
    <input type="text" placeholder='inter url' value={cardData.img} onChange={(e)=>{setcardData({...cardData,img: e.target.value})}}/>
    <input type="text" placeholder='inter name ' value={cardData.title} onChange={(e)=>{setcardData({...cardData,title: e.target.value})}}/>
    <input type="text" placeholder='inter desc' value={cardData.desc}onChange={(e)=>{setcardData({...cardData,desc: e.target.value})}}/>

<NavLink to={'/'}><button onClick={submit}>Add</button></NavLink>
    </div>
  )
}

export default AddCard