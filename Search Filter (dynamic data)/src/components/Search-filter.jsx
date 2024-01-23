import { useEffect, useState } from "react"
import { Data } from "./Api"


const Searchfilter = () => {
  const [search, setSearch] = useState([]); //search state
  const[filtervalue, setfiltervalue] = useState(''); //filter usestate
   
  const [SearchApiData, setSearchApiData] = useState([]); // use to search from api

   

   useEffect(()=>{
    Data().then((users) => {
        setSearch(users)
        setSearchApiData(users)
     
    })
   },[])

   const handleFilter =(e)=>{
            if(e.target.value == ''){
               setSearch(SearchApiData)
            }else{
               const filterResult = SearchApiData.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()) || item.username.toLowerCase().includes(e.target.value.toLowerCase()))
               setSearch(filterResult);
            }
            setfiltervalue(e.target.value)
   }



  return (
    <>
               
       <div>
       <div style={{margin: '30px 50px'}}>
       <input type="text"placeholder="search" value={filtervalue} onChange={(e)=> handleFilter(e)}  />
   </div>

          <table>
             <th>name</th>
             <th>username</th>
             <th>email</th>
             <th>phone</th>
             {
                 search ? search.map((users) => (
                       <tr key={users.id}>
                         <td>{users.name}</td>
                         <td>{users.username}</td>
                         <td>{users.email}</td>
                          <td>{users.phone}</td>
                       </tr>
                 )) : 
                 <p>no data</p>
             }
          </table>
       </div>
    </>
    
  )
}

export default Searchfilter 
