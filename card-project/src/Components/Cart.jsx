import React from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const { cartItems, subTotal, shiping, Tax, Total } = useSelector(
    (state) => state.cart
  );
  const Dispatch = useDispatch();
  const increment = (id) => {
    Dispatch({ type: "addToCart", payload: { id } });
    Dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    Dispatch({ type: "decrement", payload: id });
    Dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    Dispatch({ type: "deleteHandler", payload: id });
    Dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((e) => (
            <CartItem
              imgsrc={e.imgsrc}
              name={e.name}
              price={e.price}
              qty={e.quantit}
              id={e.id}
              increment={increment}
              decrement={decrement}
              deleteHandler={deleteHandler}
              key={e.id}
            />
          ))
        ) : (
          <h1>No Item is Available</h1>
        )}
      </main>
      <aside className="total-wala">
        <h2 className="sub">Subtotal:{subTotal}</h2>
        <h2>shiping:{shiping}</h2>
        <h2>Tax:{Tax}</h2>
        <h2 className="total">Total:{Total}</h2>
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
      <p>{price}</p>
    </article>
    <div className="button-section">
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandler(id)} className="delete-button" />
  </div>
);

export default Cart;
