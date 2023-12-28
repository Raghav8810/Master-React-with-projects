import axios from "axios";
import { useEffect, useState } from "react"
import {  useNavigate,Link } from "react-router-dom";

const Update = () => {
  
        const [id,setId] = useState(0);
        const[name,setName] = useState("");
        const[email,setEmail] = useState("");
        const navigate = useNavigate();

        useEffect(() =>{
          setId(localStorage.getItem("id"));
          setName(localStorage.getItem("name"));
          setEmail(localStorage.getItem("email"));
        },[]);

        const handleUpdate = (e) =>{
            e.preventDefault();
            axios.put(`https://658d6bcd7c48dce9473926ca.mockapi.io/crud-project${id}`,
           { name: name,email: email,
        }).then(() =>{
          navigate("/read");
        });

        } ;

  return (
    <>
    <h2>UPDATE</h2>
    <div className="form-container">
    <form>
    <div className="mb-3">
      <label  className="form-label">Name</label>
      <input type="text" className="form-control"
        value={name}
        onChange={(e) =>{setName(e.target.value)}}
      />
    </div>

    <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp"
     value={email}
     onChange={(e) =>{setEmail(e.target.value)}}
    />
    <div className="form-text">We will never share your email with anyone else.</div>
  </div>

  
    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
    <Link to="/read">
    <button className="btn btn-secondary mx-2"> Back </button>
  </Link>
  </form>
  </div>
    </>
  )
}

export default Update;
