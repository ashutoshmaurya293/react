import React from 'react'

function ImgCard({id,imageUrl ,elm}) {
    const redirectToPage =() =>{
        // const[Single,setSingle]=useState([]);
        // const getData=async()=>{
        //   const responce=await fetch("https://api.slingacademy.com/v1/sample-data/photos?limit=20");
        //   const {photos}=await responce.json();
        //   setSingle(photos)
        //   console.log(photos)
        // }
      
        // useEffect(()=>{
        //   getData()
        // },[])


        console.log(elm);
    }
  return (
    <div >
         <img src={imageUrl} onClick={redirectToPage} alt="" height={300} width={250}/>
  
    </div>
  )
}

export default ImgCard