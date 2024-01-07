
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Navbar from './Component/Navbar'
import { ThemeProvider } from './ThemeContext'


function App() {
  

  return (
    <>
       <ThemeProvider>
     
      <BrowserRouter>
      <Navbar/>
          <Routes>
         
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/blog' element={<Blog/>}/>
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
