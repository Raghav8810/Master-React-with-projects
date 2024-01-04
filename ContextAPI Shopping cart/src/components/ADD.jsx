import { useContext } from "react";
import { CartContext } from "../Context/Cart";

const ADD = ({name,price}) => {
      const cart = useContext(CartContext);
      console.log(cart);
  return (
    <div>
        <h1>{name}</h1>
        <p>{price}</p>
        <button onClick={()=> cart.setItem([...cart.items, {name : name, price : price}])} >Add To Cart</button>
    </div>
  )
}

export default ADD;
