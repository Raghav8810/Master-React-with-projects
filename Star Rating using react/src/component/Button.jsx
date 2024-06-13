import  { useState } from 'react'

const Button = () => {
    // const[click,setClick] = useState("");
    // const[hover,setHover] = useState("");

    // const handleclick = (index) =>{
    //      setClick(index);
    // }

    // const handleMouseMove = (index) =>{
    //      setHover(index);
    // }

    const[rating,setRating] = useState(0);
    const[hover,setHover] = useState(0);
    

  
  return (
    <div> 
         {
          [1,2,3,4,5].map((num) => (
              <Button
                key={num}
                onClick={()=> setRating(num) }
                onMouseOver={()=> setHover(num)}
                onMouseLeave={()=> setHover(rating)}
                classname={
                `star ${
                  num<= ((rating && hover) || hover) ? 'on': 'of'
                }`
                }
              >
              
                 ^sss
              </Button>
          ))
         }
    </div>
  )
}

export default Button


// {
//   [...Array(noOfbtn)].map((_,index) =>{
//      return(
//          <button
//          key={index}
//          className={index === (click || hover) ? 'active': 'inactive'}
//          onClick={() =>{handleclick(index)}}
//          onMouseMove={() =>{handleMouseMove(index)}}
        

//          >Button</button>
//      )
//   })
// }