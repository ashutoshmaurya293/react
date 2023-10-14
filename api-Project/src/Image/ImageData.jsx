import React, { useState } from "react";
import axios from "axios";
import ImgCard from "../Components/ImgCard";
import './Img.css'

function ImageData() {
  const [Image, setImage] = useState([]);
  const [singleig, setsingleig] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const getImg = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      const data = resp.data;
      setImage(data);
      setIsLoading(false);
      console.log(Image);
    } catch (error) {
      console.error("img not found");
    }
  };
  return (
    <div className="box">
      <button onClick={getImg}>get</button>
      <div className="imgBox">
        {isLoading
          ? "Loading... "
          : Image.map((elm, i) => {
              return (
                <ImgCard id={elm.id} imageUrl={elm.download_url} key={i} elm={elm} setsingleig={setsingleig} singleig={singleig}/>
              );
            })}
      </div>
    </div>
  );
}

export default ImageData;
