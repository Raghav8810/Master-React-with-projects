import React, { useEffect } from 'react'
import { useFilter } from '../store/dataContext';

const Sidebar = () => {
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
  
    useEffect(()=>{
        const FetchData = async()=>{
            const res = await fetch('https://dummyjson.com/products')
            const data = await res.json()
            const uniqueCategory = data.products.map((product) => product.category)
            const filterCategory = uniqueCategory.filter((category, index)=> uniqueCategory.indexOf((category)) === index)
          
            setSelectedCategory(filterCategory)
        }
        FetchData()
    },[])

  return (
   <>
   <div className='w-64 h-full bg-orange-200 p-3' >
   <h3 className='pb-5 flex justify-center text-xl font-semibold'>Tools</h3>
   <input
   placeholder='search items'
       value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
   />

   <div className='pt-5 pb-3 text-xl font-semibold'>
     <h2>Categories</h2>
     
   </div>
 </div>
   </>
  )
}

export default Sidebar
