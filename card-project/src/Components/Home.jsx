import React from "react";
import "./Home.css";
import ProductCart from "./ProductCart";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

function Home() {
  const productList = [
    {
      name: "Mac Book",
      price: 15000,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZPbw47gPMdhi7FcnnZkzlhk07Y15td8TdioCwPv6nKfLNm0eATnTmZYqnWC1-6rvZB0&usqp=CAU",
      id: "qpopoi",
    },
    {
      name: "iphone",
      price: 15000,
      imgsrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eFMxnxZp3oJC7u00W6w1YnLjS66wscbCP7wfmaZHtG0t1gLZfpTMf101MFuH0Z1GOOU&usqp=CAU",
      id: "ksdfdsj",
    },
  ];
  const Dispatch = useDispatch()
  const addtoCart = (e) => {
    // console.log(e);
    toast.success("Added to cart")
    Dispatch ({type:"addToCart",payload:e})
  };

  return (
    <div className="home">
      {productList.map((e) => (
        <div className="productCart" key={e.id}>
          <ProductCart
            key={e.id}
            imgsrc={e.imgsrc}
            name={e.name}
            price={e.price}
            id={e.id}
            qty={e.qty}
            handler={addtoCart}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
