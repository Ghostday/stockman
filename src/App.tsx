import './App.css'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Document, ParsedProduct } from './types';
import { getDocs } from './lib/calls'
import LoginPage from './pages/Login';

function App() {
  const [products, setProducts] = useState<undefined | Document<ParsedProduct>[]>();

  useEffect(() => {
    getDocs("products").then(data => setProducts(data));
  },[]);

  console.log(products);
  return (
    <div className="App">
      {/* <LoginPage /> */}
      <Outlet />
      {/* {products && products.map(product => <p>{product.fields.price}</p>)} */}
    </div>
  )
}

export default App
