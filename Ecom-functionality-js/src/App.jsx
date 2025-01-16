
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainComponent from './components/MainComponent'
import Sidebar from './components/Sidebar'
function App() {

  return (
    <>
      <Router>
      <div className='w-full h-screen bg-slate-400 flex'>
         <Sidebar/>
         <div className="rounded w-full flex justify-between flex-wrap">
           <Routes>
              <Route path="/" element={ <MainComponent/>} />
           </Routes>
         </div>
     </div>

    </Router>
    </>
  )
}

export default App
