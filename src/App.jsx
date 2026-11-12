import React, { useContext } from 'react'
import { ProductContext } from './context/ProductContext';

function App() {
  const {products,setproducts}= useContext(ProductContext);
  return (
    <div>
      {products.map((item)=>(
        <h1 key={item._id}>{item.name}</h1>
      ))

      }
    </div>
  )
}

export default App
