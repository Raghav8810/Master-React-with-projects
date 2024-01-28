import ADD from "./components/ADD"
import Cart from "./components/Cart"



function App() {
  return (
    <>
     <div>
        <ADD name="mobile" price="2000" />
        <ADD name="laptop" price="4000" />
        <ADD name="pc" price="6000" />
        <hr />
        <Cart/>
     </div>
    </>
  )
}

export default App
