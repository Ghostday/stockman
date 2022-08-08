import { Auth, ParsedProduct, Document } from '../types'
import { useEffect, useState } from 'react'
import { getDocs } from '../lib/calls';

export default function StockPage({user}: {user: Auth}) {
  const [products, setProducts] = useState<undefined | Document<ParsedProduct>[]>();

  useEffect(() => {
    getDocs("products").then(data => setProducts(data));
  }, [user]);


  return (
    <div>
      <h1>Welcome {user.name}</h1>
      {products && products.map(product => <p>{product.fields.name}</p>)}
    </div>
  )
}
