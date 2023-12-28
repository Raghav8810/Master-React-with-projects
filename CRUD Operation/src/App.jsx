
import './App.css'
import Create from './component/Create'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Read from './component/Read'
import Update from './component/Update'

function App() {


  return (
    <>
    <BrowserRouter>
    <h1>CRUD</h1>
      <Routes>
         <Route exact path='/' element={<Create/>} />
         <Route exact path='/read' element={<Read/>} />
         <Route exact path='/update' element={<Update/>} />
      </Routes>
    <div>
  
 
</div>
    </BrowserRouter>
     
    </>
  )
}

export default App
