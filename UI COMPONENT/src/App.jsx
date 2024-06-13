import './App.css'
import Sidebar from './Components/sidebar/Sidebar'
import Home from '../src/Pages/Home'
// import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MultiCar from './Components/multicarousel/MultiCar'

function App() {
 

  return (
    <>
    <BrowserRouter>
      {/**  <Routes>
            <Route path='/' element={<Sidebar/>} />
            <Route path='/home' element={<Home/>} />
       </Routes>
       */}
       <MultiCar/>
    </BrowserRouter>
    
    </>
  )
}

export default App