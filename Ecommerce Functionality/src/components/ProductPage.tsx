import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface Product{
    id: number,
    title: string,
    price: number,
    rating: number,
    description: string,
    images: string[],
}

const ProductPage = () => {
    const{id} = useParams<{id: string}>();
    const navigate = useNavigate()
    const[product, setProduct] = useState<Product | null>(null)

    useEffect(()=> {
        if(id){
            axios.get<Product>(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },[id])

    if(!product){
        return <div>...loading</div>
    }
   

    return (
  <>
  <div className='p-5 w-[60%]'>
      <button onClick={()=> navigate(-1)} className='mb-4 px-4 py-2 bg-black text-white rounded'>Back</button>
 
    <img src={product.images[0]} alt="" className='w-[50%] h-auto mb-5' />

    <h1 className='text-2xl mb-4 font-bold'>{product.title}</h1>
    <p className='mb-4 text-gray-700 w-[70%]'>{product.description}</p>
    <div className='flex'>

        <p className=''>Price: {product.price}</p>
        <p className='ml-10'>Rating: {product.rating}</p>
    </div>
  </div>
  </>
  )
}

export default ProductPage
