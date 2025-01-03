import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";
import { Tally3 } from "lucide-react";
import axios from "axios";
import BookCard from "./BookCard";

const MainContent = () => {
  const {
    searchQuery,
    selectedCategory,
    minPrice,
    maxPrice,
    keyword,
  } = useFilter();

  const [products, setProducts] = useState<any[]>([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownopen] = useState(false);
  const itemsPerPage = 12;

  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;

    if (keyword) {
      url = `https://dummyjson.com/products/search?q=${keyword}`;
    }

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        // console.log(res.data.products);
      })
      .catch((err) => {
        console.log("fetch data error", err);
      });
  }, [currentPage, keyword]);

  //filter product

  const getFilterProducts = () => {
    let filteredProducts = products;
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if(minPrice!== undefined){
        filteredProducts.filter((product)=>(
            product.price >=  minPrice
        ))
    }

    if(maxPrice!== undefined){
        filteredProducts.filter((product)=> (
            product.price <= maxPrice
        ))
    }

    if(searchQuery){
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    switch(filter){
        case"expensive": 
        return filteredProducts.sort((a,b)=> b.price - a.price )

        case"cheap": 
        return filteredProducts.sort((a,b)=> a.price - b.price )

        
        case"popular": 
        return filteredProducts.sort((a,b)=> b.rating - a.price )

        default: 
        return filteredProducts
    }

    

  };
  const filteredProducts = getFilterProducts()
  console.log(filteredProducts)

  //pagination
const totalProducts = 100
const totalPages = Math.ceil(totalProducts/itemsPerPage)
  const handleChangePage = (page: number) => {
    if(page > 0 && page <= totalPages){
        setCurrentPage(page)
    }
  }

  //getpaginatin

  const getPagination = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1,currentPage - 2)
    let endPage = Math.min(totalPages, currentPage + 2)

    if(currentPage -2  < 1){
        endPage = Math.min(totalPages,endPage + (2 - currentPage - 1))

    }

    if(currentPage + 2  >totalPages){
        startPage = Math.min(1,startPage - (2 - totalPages - currentPage))

    }

    for(let page = startPage; page <= endPage; page++){
        buttons.push(page)
    }

    return buttons
  }

  return (
    <>
      <section className="xl:w-[55rem] lg:w-[55rem] sm:w-[40rem] xs:w-[20rem] p-5 bg-red-50">
        <div className="mb-5">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="relative mb-5 mt-5">
              <button onClick={()=> setDropdownopen(!dropdownOpen)} className="border px-4 py-2 rounded-full flex items-center">
                <Tally3 className="mr-2" />

                {filter === "all"
                  ? "filter"
                  : filter.charAt(0).toLowerCase() + filter.slice(1)}
              </button>

              {dropdownOpen && (
                <div className="absoulte bg-white border-gray-300 rounded mt-2 w-full sm:w-40">
                  <button
                    onClick={() => setFilter("cheap")}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  >
                    cheap
                  </button>
                  <button
                    onClick={() => setFilter("cheap")}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  >
                    expensive
                  </button>
                  <button
                    onClick={() => setFilter("cheap")}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  >
                    popular
                  </button>
                  <button
                    onClick={() => setFilter("cheap")}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  >
                    cheap
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* content// */}
          <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {/* book card// */}
            {filteredProducts.map((product) => {
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
      

          {/* pagination */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-5">
              <button className="border px-4 py-2 mx-2 rounded-full "
              onClick={()=> handleChangePage(currentPage - 1)}
              disabled={currentPage === 1}
              >PREVOUS</button>
           
            <div className="flex flex-wrap justify-center">
                 {getPagination().map((page)=> {
                    return(
                        <button key={page} onClick={()=> handleChangePage(page)}
                         className={`border py-2 px-4 mx-1 rounded-full ${page === currentPage ? "bg-black text-white": ""}`}
                        >{page}</button>
                    )
                 })}
            </div>
         
              <button 
              className="border px-4 py-2 mx-2 rounded-full "
              onClick={()=> handleChangePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              
              >NEXT</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default MainContent;
