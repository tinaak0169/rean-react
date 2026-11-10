import React from 'react'
import { API } from '../data/API'
import { createContext, useContext, useState, useEffect } from 'react'

function ProductContext() {
    // stor product data
    const [products, setProductas]=useState([]);
    // loaing product
    const [loading,setLoading]=useState(false);
    // make sure fetch product success or not
    const [error,setError]=useState("");

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        const GetProduct =async()=>{
            try{
                setLoading(true);
                setError(null);

                const respone = await fetch(API)
                if (!respone.ok){
                    throw new Error("False to get Product");
                }
                const data=await respone.json();
                console.log("Product :",data);
                setProductas(data);

            }catch(error){
                setError(error.message);
                
            }finally{
                setLoading(false);
            }

        };
    })
  return (
    <div>
      
    </div>
  )
}

export default ProductContext
