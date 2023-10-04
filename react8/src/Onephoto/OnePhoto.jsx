import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function OnePhoto({cardData}) {
    const {id} = useParams()
    console.log(id);
const [Single, setSingle] = useState({})
useEffect(()=>{
const singArr=cardData.filter((e,i)=>{
    return id == i
})
setSingle({...singArr[0]})
console.log(singArr);
},[id])

  return (
    <div>
   <img src={Single?.img}alt="" />
   <h1>title:{Single?.title}</h1>
   <p>desc:{Single?.desc} </p>
    </div>
  )
}

export default OnePhoto