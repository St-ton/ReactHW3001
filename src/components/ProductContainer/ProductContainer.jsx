import React from "react";
import { useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import s from './ProductContainer.module.css';

export default function ProductContainer() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(" https://dummyjson.com/products");
      const data = await resp.json();
      setProducts(data.products);
    })();
  }, []);

  const deleteProducts = (delId) => {
    const newArr = products.filter(({ id }) => id !== delId);
    setProducts(newArr);
  };

  const increment = (value) => {
    const target = products.find(({ id }) => id === value);
    target.stock++;
    setProducts([...products]);
  };

  const decrement = (value) => {
    const target = products.find(({ id }) => id === value);
    target.stock--;

    if (target.stock === 0) {
      setProducts(products.filter((el) => el !== target));
    } else {
      setProducts([...products]);
    }
  };

  const totalCount = products.reduce((acc, { stock }) => acc + stock, 0);
  const totalOldSum = products.reduce(
    (acc, { stock, price }) => acc + stock * price,
    0
  );
  
  const totalNewSum = products.reduce(
    (acc, { stock, discountPercentage, price }) =>
      acc + stock * Math.round((price * (100 - discountPercentage)) / 100),
    0
  );

  return (
    <div className={s.container}>{
        products.map(item =>
          <ProductItem
            key={item.id}
            {...item}
            increment={increment}
            decrement={decrement}
            deleteProducts={deleteProducts}
          />          
        )        
      }
    
      <div className={s.footer}>
        <div>Count: <span>{totalCount}</span> </div>
        <div>Cost without discount: <span>$ {totalOldSum} </span> </div>
        <div>Total: <span>{totalNewSum}$</span></div>
      
     </div>
      
    </div>
  );
}
