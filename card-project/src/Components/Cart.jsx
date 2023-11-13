import React from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
const img1 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZPbw47gPMdhi7FcnnZkzlhk07Y15td8TdioCwPv6nKfLNm0eATnTmZYqnWC1-6rvZB0&usqp=CAU",

function Cart() {

  return (
    <div className="cart">
      <main>
        <CartItem 
          imgsrc={img1}
          name={macbook}
          price={100000}
          qty={1}
          id={
            "asdfaf"
          }
        
        />
      </main>
      <aside>
        <h2>Subtotal:${2000}</h2>
        <h2>shiping:${200}</h2>
        <h2>Tax:${11}</h2>
        <h2 className="total">Total:${25000}</h2>
      </aside>
    </div>
  );
}
const CartItem = ({
  imgsrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cardItem">
    <img src={imgsrc} alt="image" />
    <article>
      <h3>{name}</h3>
      <p>4{price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
