import React,{createContext,useContext,useEffect, useState} from "react";


const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [keyword, setKeyword] = useState("");

    return(
        <FilterContext.Provider
        value={{
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
          }}
        >
        {children}
        </FilterContext.Provider>
    )
}


// Custom hook to use the FilterContext
export const useFilter = () => {
    return useContext(FilterContext);
  };