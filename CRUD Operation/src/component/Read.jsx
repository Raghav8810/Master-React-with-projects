import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [data,setData] = useState([]);
    const[tabledark,setTable] = useState("");

  
 
    const Getdata = () =>{
        axios.get("https://658d6bcd7c48dce9473926ca.mockapi.io/crud-project")
            .then((res) =>{
                console.log(res);
                setData(res.data);
            });
    }

     useEffect(() =>{
        Getdata();
     },[data]);

     const handleDelete = (id) =>{
        axios.delete(`https://658d6bcd7c48dce9473926ca.mockapi.io/crud-project/${id}`
        ).then(() =>{
            Getdata();
        })
    };


    const setToLocalStorage = (id,name,email) =>{
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

  


  return (
    <>
    <div className="form-check form-switch toglediv">
  <input className="form-check-input togle" type="checkbox" id="flexSwitchCheckDefault" onClick={() => {
    if(tabledark === "table-dark"){
        setTable("")
    }else{
        setTable("table-dark");
    }
  }}/>
  <Link to="/">
  <button type="button" className="btn btn-primary" >Create New</button>
  </Link>
  

  </div>
    <h2>READ</h2>
    <div className="read-table">
   
    <table className={`table ${tabledark}`} >
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  {
    data.map((item) =>{
        return(
            <>
            <tbody>
            <tr key={item}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
           
              <td>
                <Link to="/update">
                <button type="button" className="btn btn-success" onClick={() => setToLocalStorage(item.id,item.name,item.email)}>Edit</button>
                </Link>
              </td>
              <td>
              <button type="button" className="btn btn-danger" onClick={() =>{handleDelete(item.id)}} >DELETE</button>
              </td>
            </tr>
         
          </tbody>
            </>
        )
    })
}
</table>
    </div>
    </>
  )
}

export default Read
