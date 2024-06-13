import { useRef } from "react"
import Card from "./Card"
import './multi.css'

const MultiCar = () => {
    const scrollRef = useRef(null);
    const btnpressPrev = () =>{
        let width = scrollRef.clientWidth;
        console.log("left")
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= width; // Adjust scroll distance as needed
          }
    }

    const btnpressNext = () =>{
        console.log("right")
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += width; // Adjust scroll distance as needed
          }
    }

  return (
    <div className="carou">
        <button className="left" onClick={btnpressPrev}  ><p>left</p></button>
        <button className="right" onClick={btnpressNext} ><p>right</p></button>
       
        <div className="container" ref={scrollRef} >
             <Card no="1" />
             <Card no="2" />
             <Card no="3" />
             <Card no="4" />
             <Card no="5" />
             <Card no="6" />
             <Card no="7" />
             <Card no="8" />
        </div>

  
    </div>
  )
}

export default MultiCar
