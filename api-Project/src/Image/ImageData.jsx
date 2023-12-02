import React, { useState } from "react";
import axios from "axios";
import ImgCard from "../Components/ImgCard";
import "./Img.css";
import Loader from "../Loader/Loader";
import SingleImgData from "./SingleImgData";

function ImageData() {
  const [Image, setImage] = useState([]);
  const [singleig, setsingleig] = useState([]);
  const [loading, setLoading] = useState(false);
  const getImg = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        "https://picsum.photos/v2/list?page=2&limit=100"
      );
      const data = resp.data;
      setImage(data);
      setLoading(false);
    } catch (error) {
      console.error("img not found");
    }
  };
  return (
    <div className="box">
      <button onClick={getImg} className="btn">
        get
      </button>
      {singleig.map((im, i) => {
        return <SingleImgData rl={im.download_url} key={i} />;
      })}

      <div className="imgBox">
        {loading ? (
          <Loader />
        ) : (
          Image.map((elm, i) => {
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
          })
        )}
      </div>
    </div>
  );
}

export default ImageData;
