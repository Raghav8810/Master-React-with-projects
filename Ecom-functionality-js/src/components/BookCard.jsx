import React from 'react'
import { Link } from 'react-router-dom'

const BookCard = ({image,title,price,id}) => {
  return (
    <div className='border p-4 rounded'>
    <Link to={`/product/${id}`} >
    <img src={image} alt={title}  className='w-full h-32 object-cover mb-2'/>

    <h2 className='font-bold'>{title}</h2>
    <p className=''>${price}</p>
    </Link>
  </div>
  )
}

export default BookCard
