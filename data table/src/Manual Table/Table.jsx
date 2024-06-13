import { useEffect, useRef, useState } from 'react'

const Table = () => {
    const[formdata,setFormdata] = useState({name: "", gender: "", age: ""});
    const[data,setData] = useState([]);
    const[editid, setEditId] = useState(false);
    const outsideClick = useRef(false)
    const[searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        if(!editid) return;
        let selectItem = document.querySelectorAll(`[id='${editid}']`);
        selectItem[0].focus();
        

    }, [editid])

    //edit focus close when user click outside the screen
    useEffect(()=>{
        const handleClickoutside= (e) =>{
            if(outsideClick.current && !outsideClick.current.contains(e.target)){
                    setEditId(false);
            }
        }
      document.addEventListener("click", handleClickoutside)

      return() =>{
        document.removeEventListener("click", handleClickoutside)
      }
    },[])

    const handleInput = (e) =>{
       setFormdata({...formdata, [e.target.name] : e.target.value})

    }
   
     const handleClick = () =>{
       if(formdata.name && formdata.gender && formdata.age){
        const newItems = {
            id: Date.now(),
            name: formdata.name,
            gender: formdata.gender,
            age: formdata.age,
        };

        setData([...data, newItems])
        setFormdata({name: "", gender: '', age: ""});
       }
     }
console.log(data)
const handleDelete = (id) =>{
    const updateList = data.filter((item) => item.id !==id);
    setData(updateList)
 }

 //handle edit 
 const handleEdit = (id,updatedData) =>{
    if(!editid || editid !== id ){
        return
    }

    const updatedList = data.map((item) => item.id === id ? {...item, ...updatedData}: '' );
    setData(updatedList)
 }

 ///search
 const filterItem = data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase))
 const handleSearch = (e) =>{
  setSearchTerm(e.target.value);
    
 }
 

  return (
    <div className='container'>
         <div className='addContainer'>
           <div className="information">
                <input type="text" name='name' placeholder='name' value={formdata.name} onChange={handleInput} />
                <input type="text" name='gender' placeholder='gender' value={formdata.gender} onChange={handleInput} />
                <input type="text" name='age' placeholder='age' value={formdata.age} onChange={handleInput} />
           </div>
           <button className='add' onClick={handleClick}>ADD THIS</button>     
         </div>

         <div className="searchtableContainer">
         <input type="search by name" name='' placeholder='search' value={searchTerm} onChange={handleSearch} />

         <table ref={outsideClick}>
           <thead>
             <tr>
                <th>Name</th>
                <th>gender</th>
                <th>age</th>
                <th>action</th>
             </tr>
           </thead>

           <tbody>
           
           {
            filterItem.map((item,i) => (
                <tr key={i}>
            <td id={item.id} contentEditable={editid === item.id} onBlur={(e) => handleEdit(item.id, {name: e.target.innerText})} >{item.name}</td>
            <td id={item.id} contentEditable={editid === item.id}  onBlur={(e) => handleEdit(item.id, {gender: e.target.innerText})}>{item.gender}</td>
            <td id={item.id} contentEditable={editid === item.id}  onBlur={(e) => handleEdit(item.id, {age: e.target.innerText})}>{item.age}</td>
            <td className='actions'>
            <button onClick={()=>setEditId(item.id)} >edit</button>
            <button onClick={()=>handleDelete(item.id)} >delete</button>
           </td>
           </tr>
            ))
           }
         </tbody>
         </table>
        
         <div className="pagination">
         
         </div>
         </div>
    </div>
  )
}

export default Table
