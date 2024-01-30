import { useState } from "react"
import OtpInput from "./OtpInput";


const PhoneOtpLogin = () => {
    const[phoneNumber, setPhoneNumber] = useState("");
    const[showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (e) =>{
          setPhoneNumber(e.target.value);
    }

    const HandlePhoneSubmit = (e) =>{
         e.preventDefault();

         //phone validation
         //1.check phone is a number not text and greater than 10 digit
         const regex = /[^0-9]/g;
         if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert("invalid phone number");
         }else{
            //call api
            //show otp filed
            setShowOtpInput(true);
         }  
    }


    //onOtpSubmit
    const onOtpSubmit = (otp) =>{
        console.log("login successfull", otp);
    }


  return (
    <div>
           {/**if showotp is not true means its false then show form else  */}
        {!showOtpInput? <form onSubmit={HandlePhoneSubmit}>
           <input type="text" 
           placeholder="Enter phone number"
             value={phoneNumber}
             onChange={handlePhoneNumber}
           />
           <button type="Submit">Submit</button>
        </form> : 
           
           <div> 
               <p>Enter a OTP send to : {phoneNumber}</p> 
               <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
           </div>


        } 
    </div>
  )
}

export default PhoneOtpLogin
