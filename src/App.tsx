import { useEffect, useState } from 'react'
import './App.css'
import { Product, Document, ParsedProduct } from './types';
import { getDocs } from './lib/calls'

function App() {
  const [products, setProducts] = useState<undefined | Document<ParsedProduct>[]>();

  useEffect(() => {
    getDocs("products").then(data => setProducts(data));
  },[]);

  console.log(products);
  return (
    <div className="App">
      {products && products.map(product => <p>{product.fields.price}</p>)}
    </div>
  )
}

export default App
