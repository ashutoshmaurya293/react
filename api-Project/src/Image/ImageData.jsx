import React, { useState } from "react";
import axios from "axios";
import ImgCard from "../Components/ImgCard";
import "./Img.css";
import Loader from "../Loader/Loader";
import SingleImgData from "./SingleImgData";


function ImageData() {
  const [Image, setImage] = useState([]);
  const [singleig, setsingleig] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(singleig);
  const getImg = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      const data = resp.data;
      setImage(data);
      setLoading(false);
      // console.log(Image);
    } catch (error) {
      console.error("img not found");
    }
  };
  const SImg = async () => {
    setLoading(true);
    try {
      const respe = await axios.get(singleig);
      const datat = respe.data;
      setsingleig([datat]);
      // setIsLoading(false);
      // console.log(Image);
    } catch (error) {
      console.error("img not found");
    }
  };
  return (
    <div className="box">
      <button onClick={getImg} className="btn">get</button>
      {singleig.map((im,i) => {
        return <SingleImgData rl={im.download_url} key={i}/>;
      })}
      
      <div className="imgBox">
        {loading
          ? <Loader/>
          : Image.map((elm, i) => {
              return (
                <ImgCard
                  id={elm.id}
                  imageUrl={elm.download_url}
                  key={i}
                  elm={elm}
                  setsingleig={setsingleig}
                  singleig={singleig}
                />
              );
            })}
      </div>
    </div>
  );
}

export default ImageData;
