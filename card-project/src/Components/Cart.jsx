import React from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  return (
    <div className="cart">
      <main>
        <CartItem />
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
