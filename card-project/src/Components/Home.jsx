import React from "react";
import './Home.css'

function Home() {
  const productList = [
    { name: "Mac Book", price: 15000, imgsrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZPbw47gPMdhi7FcnnZkzlhk07Y15td8TdioCwPv6nKfLNm0eATnTmZYqnWC1-6rvZB0&usqp=CAU", id: "qpopoi" },
    { name: "iphone", price: 15000, imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7eFMxnxZp3oJC7u00W6w1YnLjS66wscbCP7wfmaZHtG0t1gLZfpTMf101MFuH0Z1GOOU&usqp=CAU", id: "ksdfdsj" },
  ];
  const addtoCart = (e) => {
    console.log(e);
  };

  return (
    <div className="home">
      {productList.map((e) => (
        <div className="productCart">
        <ProductCart
          key={e.id}
          imgsrc={e.imgsrc}
          name={e.name}
          price={e.price}
          id={e.id}
          handler={addtoCart}
        /></div>
      ))}
    </div>
  );
}
const ProductCart = ({ imgsrc, id, price, handler, name }) => (
  <div>
    <img src={imgsrc} alt="image" />
    <p>{name}</p>
    <h4>${price}</h4>
    <button
      onClick={() => handler({ imgsrc, id, price, handler, name, quantit: 1 })}
    >
      Add to cart
    </button>
  </div>
);

export default Home;
