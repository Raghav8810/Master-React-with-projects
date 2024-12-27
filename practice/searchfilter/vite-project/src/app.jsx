import React, { useEffect, useState } from "react"
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const[search, setSearch] = useState("");
  const[data, setData] = useState([]);
  const [apiData, SearchApiData] = useState([]);

   const fetching = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
       setData(data);
       SearchApiData(data)
      })
   }

   useEffect(()=> {
    fetching()
   },[])

  const handleChange = (e) => {
    setSearch(e.target.value)
    const value = e.target.value
  
    if(value.trim() === ""){
      setData(apiData)
    }else{
      const filterResult = apiData.filter((item)=>(
         item.name.toLowerCase().includes(value.toLowerCase())
      ))
      setData(filterResult)
    }

  }

 // Highlight the matching letters
 const highlightText = (text, query) => {
  if (!query) return text; // If no query, return original text
  const regex = new RegExp(`(${query})`, "gi"); // Create a regex to match the query
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ fontWeight: "bold", color: "blue" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

  return(
    <>
     <div>
     <input type="text" placeholder="search" value={search} onChange={(e)=> handleChange(e)} />
     </div>
    
     <table>
     <thead>
    <tr>
    <td>id</td>
    <td>name</td>
    </tr>
     </thead>
     <tbody>
    
       {data ? (
        data.map((user) => {
           return(
            <>
            <tr>
            <td>{highlightText(user.name, search)}</td>
            <td>{highlightText(user.username, search)}</td>
            </tr>
            </>
           )
        })
       ) : "no data found"}
  
     </tbody>
     </table>
    
    </>
  )
}
