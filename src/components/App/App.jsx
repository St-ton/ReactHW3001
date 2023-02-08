import ProductContainer from "../ProductContainer/ProductContainer";
import s from './App.module.css';

export default function App() {
  return (
    <div>
      <h1 className={s.title}>PRODUCTS</h1>
      <ProductContainer />
       </div>
  );
}


