import React from 'react'

const ProductCart = ({ imgsrc, id, price, handler, name }) => (
    <div>
      <img src={imgsrc} alt="image" />
      <p>{name}</p>
      <h4>${price}</h4>
      <button className='home-button'
        onClick={() => handler({ imgsrc, id, price, handler, name, quantit: 1 })}
      >
        Add to cart
      </button>
    </div>
  );

export default ProductCart