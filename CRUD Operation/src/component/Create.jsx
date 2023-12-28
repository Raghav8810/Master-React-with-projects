import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";



const Create = () => {
   const [name, setName] = useState("");
   const [email,setEmail] = useState("");
   const history = useNavigate();

   const header = {"Access-control-Allow-origin" : "*"};

   const HandleSubmit = (e) =>{
    e.preventDefault();
      console.log("submit button click");
      axios.post("https://658d6bcd7c48dce9473926ca.mockapi.io/crud-project",
        { name: name,   email: email,header,}
      )
      .then(() =>{
        history("/read");
      });

     
   }

  return (
    <>
    <h2>CREATE</h2>
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
    <div className="form-text">Well never share your email with anyone else.</div>
  </div>

  
    <button type="submit" className="btn btn-primary" onClick={HandleSubmit}>Submit</button>
  </form>
  </div>
    </>
  )
}

export default Create
