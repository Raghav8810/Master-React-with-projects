import { useEffect, useRef, useState } from "react"

const OtpInput = ({length=4, onOtpSubmit}) => {
   const[otp,setOtp] = useState(new Array(length).fill(""));
   console.log(otp);  
 

    const inputRefs = useRef([]) //it takes reference of all input array


    useEffect(()=>{
       if(inputRefs.current[0]){
         inputRefs.current[0].focus();
       }
    },[])
    // console.log(inputRefs);


    //input change function
    const handleChange = (index,e) =>{
           const value = e.target.value;
           if(isNaN(value))return; 

           const newOtp = [...otp];
           //allow only one input
           newOtp[index] = value.substring(value.length - 1);
           setOtp(newOtp)   
   

           //submit trigger
           const combinedOtp = newOtp.join("");
           if(combinedOtp.length === length){
            onOtpSubmit(combinedOtp);
           }

           //move to next input if current filled is fill.
             if(value && index < length -1  && inputRefs.current[index+1]){
                inputRefs.current[index+ 1].focus();
             }
         
    }
    
    //input click function
    const handleClick = (index) =>{
          inputRefs.current[index].setSelectionRange(1,1);

          //validation
          if(index > 0 && !otp[index -1]){
             inputRefs.current[otp.indexOf("")].focus();
          }

    }
   
    //input keydown backspace function
    const handleKeyDown = (index, e) =>{
         if(
          e.key === "Backspace"
           && !otp[index] 
           && index > 0 
           && inputRefs.current[index-1]){
            inputRefs.current[index- 1].focus();
         }
    }

  return (
    <div>
       {
        otp.map((value,index) =>{
          return <input
           type="text"
          ref={(input) => (inputRefs.current[index] = input)}
           key={index}
           value={value}
           onChange={(e)=>handleChange(index,e)}
           onClick={(e)=>handleClick(index,e)}  
           onKeyDown={(e)=>handleKeyDown(index,e)}
           className="otpInput"
                                  
          />
        })
       }
    </div>
  )
}

export default OtpInput


//first otp input is already focus when otp component render
