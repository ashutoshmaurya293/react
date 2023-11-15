import React from "react";
import "./Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux"
const img1 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZPbw47gPMdhi7FcnnZkzlhk07Y15td8TdioCwPv6nKfLNm0eATnTmZYqnWC1-6rvZB0&usqp=CAU";

function Cart() {
  const { cartItems } = useSelector(state => state.cart)
  const Dispatch = useDispatch()
  const increment = (id) => {
    Dispatch ({type:"addToCart",payload:{id}})
  }
  const decrement = (id) => {
    Dispatch ({type:"decrement",payload:id})
  }
  const deleteHandler = (id) => {
    Dispatch ({type:"deleteHandler",payload:id})
  }
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ?
          (
            cartItems.map(e => (
              <CartItem
                imgsrc={e.imgsrc}
                name={e.name}
                price={e.price}
                qty={e.quantit}
                id={e.id}
                increment={increment}
                decrement={decrement}
                deleteHandler={deleteHandler}
              />
            ))
          ):
          <h1>No Item is Available</h1>
}
      </main>
      <aside className="total-wala">
        <h2 className="sub">Subtotal:${2000}</h2>
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
