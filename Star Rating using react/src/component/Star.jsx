import { useState } from "react"

import '../App.css'
import { FaStar } from 'react-icons/fa';


const Star = ({noOfStar}) => {
    const[rating,setRating] = useState();
    const[hover,setHover] = useState(0);

    const handleClick = (index) =>{
         setRating(index);
    }

    const handleMouseMove = (index) =>{
           setHover(index);
    }

    const handleMouseLeave = () =>{
          setHover(rating);
    }

  return (
    <>
    <div className="star">
          {
            [...Array(noOfStar)].map((_,index) =>{
                       index+=1
                return(<FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                      onClick={() =>{handleClick(index)}}
                      onMouseMove={()=>{handleMouseMove(index)}}
                      onMouseLeave={()=>{handleMouseLeave}}
                      size={60}
                    />

                )
                })
          }
    </div>
    </>
  )
}

export default Star
