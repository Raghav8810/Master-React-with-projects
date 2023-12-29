import React, { useState } from 'react'

const Button = ({noOfbtn}) => {
    const[click,setClick] = useState("");
    const[hover,setHover] = useState("");

    const handleclick = (index) =>{
         setClick(index);
    }

    const handleMouseMove = (index) =>{
         setHover(index);
    }

  
  return (
    <div>
       {
         [...Array(noOfbtn)].map((_,index) =>{
            return(
                <button
                key={index}
                className={index === (click || hover) ? 'active': 'inactive'}
                onClick={() =>{handleclick(index)}}
                onMouseMove={() =>{handleMouseMove(index)}}
               

                >Button</button>
            )
         })
       }
    </div>
  )
}

export default Button
