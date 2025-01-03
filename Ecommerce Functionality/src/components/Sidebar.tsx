import React, { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

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
    setKeyword,
    keyword,
  } = useFilter();
  const [categories, setCategories] = useState<string[]>([]);
  const [keyWords] = useState<string[]>([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  //fetching the data
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await res.json();

        //find uniqe categories
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  //min price change function
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  //max price change function
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  //radio category
  const handleRadioChangeCategory = (category: string)=> {
        setSelectedCategory(category)
  }

  //handle keyword click 
  const handleKeywordClick = (keyword:string) => {
    setKeyword(keyword)
  }

  //handlereset
  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined)
    setMaxPrice(undefined)
    setKeyword("");
}

  return (
    <div className="w-64 p-5 h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-10 mt-4">React Store</h1>
      <section>
        <input
          type="text"
          className="border-2 rounded px-2 sm:mb-0"
          placeholder="Search product"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex justify-center items-center">
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            className="border-2 mr-2 px-5 py-3 mb-3 w-full"
            placeholder="Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
          />
        </div>
        {/* categories */}
        <div className="mb-5">
          <h2 className="text-xl font-semibold mb-3 ">Categories</h2>
        </div>

        <section>
          {categories.map((category, index) => {
            return (
              <>
                <label key={index} className="block mb-2">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    onChange={()=> handleRadioChangeCategory(category)}
                    checked={selectedCategory === category}
                    className="mr-2 w-[16px] h-[16px]"
                  />
                  {category.toUpperCase()}
                </label>
              </>
            );
          })}
        </section>
        {/* keyword// section */}
        <div className="mb-5 mt-4">
          <h2 className="text-xl font-semibold mb-3">Keywords</h2>
          <div>
            {keyWords.map((keyword, index) => {
              return (
                <>
                  <button
                    key={index}
                    className="block mb-2 px-4 py-2 w-full text-left border rounded hover:bg-gray-200"
                    onClick={()=> handleKeywordClick(keyword)}
                  >
                    {keyword.toUpperCase()}
                  </button>
                </>
              );
            })}
          </div>
        </div>

        <button className="w-full mb-[4rem] py-2 bg-black text-white rounded  mt-5"
        onClick={handleReset}
        >
          Reset filter
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
