import React from 'react'
import './Single.css'

function Ak({url,Qq}) {
    console.log(url);
  return (
    <div className='single'>   
<img src={url} alt="" height={400} width={600}/>
    </div>
  )
}

export default Ak