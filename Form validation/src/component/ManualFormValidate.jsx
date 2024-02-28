import { useState } from "react"
import '../App.css'

const ManualFormValidate = () => {
    //input values
    const[formdata,setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthdate : "",
    })

    //store all errors
    const[errors,setError] = useState("");

    //handlechange

    const handlechange = (e) => {
          const{name,value} = e.target;
          setFormData({
            ...formdata, 
            [name]: value,
          })
    }

    //handle checckbox input
    const handleCheckboxchange = (e) =>{
       const{name,checked} = e.target;
       let updatedInterest = [...formdata.interests];
       if(checked){
        updatedInterest.push(name);
       }else{
        updatedInterest = updatedInterest.filter((interests) => interests!== name)
       }

       setFormData({
        ...formdata,
        interests: updatedInterest,
       })
    }

    ///validation start
       
    const isValidEmail = (email) =>{
        const emailregex =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailregex.test(email);
    }

    const isValidPhoneNumber =(phonenumber) =>{
        const phoneregex = /^\+?[1-9][0-9]{7,14}$/;
        return phoneregex.test(phonenumber)
    }

    const isValidPassword = (password) =>{
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    const isValidAge = (age) =>{
        return parseInt(age) >=18 && parseInt(age)<= 100;
    }

    //validate function for manual validation
    const ValidateForm = () =>{
         let newError = {};
         if(!formdata.firstname){
            newError.firstname = "First name is required"
         }
         if(!formdata.lastname){
            newError.lastname="Last name is required"
         }
         if(!formdata.email){
            newError.email="Email is required"
         }else if(!isValidEmail(formdata.email)){
            newError.email="Invalid Email format"
         }

         if(!formdata.phonenumber){
            newError.phonenumber = "phone number is required"
         }else if(!isValidPhoneNumber(formdata.phonenumber)){
            newError.phonenumber = "phone number must have 10 digits"
         }

         if(!formdata.password){
            newError.password = "password is required"
         }else if(!isValidPassword(formdata.password)){
            newError.password = "password must be 8 charactor with symbol,number"
         }

         if(!formdata.confirmPassword){
            newError.confirmPassword = "password is required"
         }else if(formdata.confirmPassword !== formdata.confirmPassword){
            newError.confirmPassword = "password not matched"
         }

         if(!formdata.age){
            newError.age = "age is required"
         }else if(!isValidAge(formdata.age)){
            newError.age = "age must be 18 year old"
         }
         

         if(!formdata.gender){
            newError.gender = "gender is required"
         }

         if(!formdata.interests.length === 0){
            newError.interests = "select at least one ineterest"
         }
         if(!formdata.birthdate){
            newError.birthdate = "birthdate is required"
         }

         setError(newError);

         return Object.keys(newError).length ===0;

    }

    
    console.log(errors);
    //submit form
    const handleSubmit = async(e) =>{
          e.preventDefault();
           const isvalid = ValidateForm();
       
           if(isvalid){
            console.log("submitted", formdata);
           }else{
            console.log("form validate failed");
           }
    }
  return (
    <>
       <form onSubmit={handleSubmit} className="form" >
            <div>
               <label>First Name: </label>
               <input type="text"
                 name="firstname"
                 placeholder="enter your first name"
                 value={formdata.firstname}
                 onChange={handlechange}
               />
               {errors.firstname && <div className="error">{errors.firstname}</div>}
            </div>
           
            
            <div>
            <label>Last Name: </label>
            <input type="text"
              name="lastname"
              placeholder="enter your last name"
              value={formdata.lastname}
              onChange={handlechange}
            />
            {errors.lastname && <div className="error">{errors.lastname}</div>}
         </div>

         <div>
         <label>Email: </label>
         <input type="email" className="email"
           name="email"
           placeholder="enter your email"
           value={formdata.email}
           onChange={handlechange}
         />
         {errors.email && <div className="error">{errors.email}</div>}
      </div>

      
      <div>
      <label>Phone Number: </label>
      <input type="text"
        name="phonenumber"
        placeholder="enter your phone number"
        value={formdata.phonenumber}
        onChange={handlechange}

      />
      {errors.phonenumber && <div className="error">{errors.phonenumber}</div>}
   </div>

   <div>
   <label>password: </label>
   <input type="password"
     name="password"
     placeholder="enter your password"
     value={formdata.password}
     onChange={handlechange}
   />
   {errors.password && <div className="error">{errors.password}</div>}
       </div>

       <div>
       <label>confirm password: </label>
       <input type="password"
         name="confirmPassword"
         placeholder="enter your confirm Password"
         value={formdata.confirmPassword}
         onChange={handlechange}
       />
       {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
       </div>

       
       <div>
       <label>Age: </label>
       <input type="number"
         name="age"
         placeholder="enter your age"
         value={formdata.age}
         onChange={handlechange}
       />
       {errors.age && <div className="error">{errors.age}</div>}
       </div>

       <div>
       <label>Gender: </label>
         <select name="gender" value={formdata.gender} onChange={handlechange}  >
            
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            {errors.gender && <div className="error">{errors.gender}</div>}
         </select>
       </div>

       <div>
       <label>Interests: </label>
           <label>
               <input
                type="checkbox"
                name="coding"
                checked={formdata.interests.includes("coding")}
                onChange={handleCheckboxchange}
                  
               />
               coding
           </label>

           <label>
                  <input
                   type="checkbox"
                   name="sports"
                   checked={formdata.interests.includes("sports")}
                   onChange={handleCheckboxchange}
                  />
                  Sports
           </label>       

         <label>
              <input
               type="checkbox"
               name="reading"
               checked={formdata.interests.includes("reading")}
               onChange={handleCheckboxchange}
              />
              Reading
         </label>
         {errors.interests && <div className="error">{errors.interests}</div>}
       </div>
             
       <div>
       <label>DOB: </label>
            <input type="date"
             name="birthdate"
             value={formdata.birthdate}
             placeholder="enter you date"   
             onChange={handlechange}
            />
            {errors.birthdate && <div className="error">{errors.birthdate}</div>}
       </div>
             
            <button className="btn" type="submit">SUBMIT</button>
       </form>
    </>
  )
}

export default ManualFormValidate
