import React from "react";
import s from "./ProductItem.module.css";

export default function ProductItem({
  id,
  title,
  thumbnail,
  discountPercentage,
  price,
  decrement,
  increment,
  stock,
  deleteProducts  
}) {

  const procent = Math.round(100 - discountPercentage);
  const newPrice = `${(price * procent) / 100}`;

  return (
      <div className={s.card}>
      <img src={thumbnail} alt={title} />
      <p className={s.title}>{ title }</p>
      <div className={s.price_container}>
        <p className={s.old_price}>{ price }$</p>
        <p className={s.new_price}>{ newPrice }$</p>
      </div>
      
      <div className={s.btn}>
        <button onClick={() => decrement(id)}>-</button>
         {stock }
        <button onClick={() => increment(id)}>+</button>
      </div>
      <button className={s.del_btn} onClick={() => deleteProducts(id)}>Delete</button>
    </div>
    
  );
}
