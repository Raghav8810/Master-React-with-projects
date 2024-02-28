import { useEffect, useState } from "react"
import Loader from '../component/Loader'


const Form = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
    })
    const[submit, setsubmit] = useState(false);
   

    const handlechange = (e) =>{
       const {id,value} = e.target;
        setForm({...form,[id]: value})
    }

    const HandleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true); // Start loading indicator
        try {
              await new Promise((resolve) => setTimeout(resolve,2000));
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
         
        console.log(form);
        setForm({
          name: "",
          email: "",
        });
        setsubmit(true);

    }


  return (
    <>
   
      <form  onSubmit={HandleSubmit}>
        
         <div>
            <label name="name">name</label>
            <input type="text" placeholder=" enter name"
            id="name"
             value={form.name}
             onChange={handlechange}
            />
         </div>
         <div>
         <label name="email">email</label>
            <input type="text" placeholder=" enter email"
            id="email"
            value={form.email}
            onChange={handlechange}
            />
         </div>
         

         <button type="submit">SUBMIT</button>
      </form>
      {loading && <Loader/>}
 
      
     { submit && <div>
        <h1>Your name is : {form.name}</h1>
        <h1>Your email is : {form.email}</h1>
     </div>
     }
    </>
  )
}

export default Form

