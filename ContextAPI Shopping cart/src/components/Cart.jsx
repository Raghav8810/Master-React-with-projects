import { useContext } from "react";
import { CartContext } from "../Context/Cart";


const Cart = () => {
   const list = useContext(CartContext);

   const total = list.items.reduce((a,b) => a + b.price, 0);
      
  return (
    <div>
    <h1>cart</h1>
        {list &&
           list.items.map((item) =>(
              <li key={item}>
               {item.name} - ${item.price}
              </li>
           ))}
        
        <h5>
        total: {total}</h5>
    </div>
  )
}

export default Cart
