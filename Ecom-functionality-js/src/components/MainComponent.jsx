import React, { useEffect, useState } from 'react'
import { useFilter } from '../store/dataContext';
import axios from "axios";
import BookCard from './BookCard';

const MainComponent = () => {
      const {
          searchQuery,
          setSearchQuery,
          selectedCategory,
          setSelectedCategory,
          minPrice,
          setMinPrice,
          maxPrice,
          setMaxPrice,
          keyword,
          setKeyword,
        } = useFilter();

        const [products, setProducts] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const itemsPerPage = 12;

  useEffect(()=>{
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    axios
    .get(url)
    .then((res) => {
      setProducts(res.data.products);
      // console.log(res.data.products);
    })
    .catch((err) => {
      console.log("fetch data error", err);
    });


      },[currentPage,searchQuery])

  const getFilter = () => {
    let filteredProducts = products;
    if(searchQuery){
      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }
  return filteredProducts
  }
  const filterss = getFilter()
  console.log(filterss)

  return (
    <div className='bg-red-400 w-full mt-2'>
    <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
    {/* book card// */}
    {filterss.map((product) => {
        return(
            <BookCard 
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.thumbnail}
            price={product.price}

            />
        )
    })}
  </div>
    </div>
  )
}

export default MainComponent
