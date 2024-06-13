import { useState } from 'react';
import './navbar.css'

import { Menu, X } from 'lucide-react';
const Navbar = () => {
    const[show,setShow] = useState(false);
    const[navbar,setNavbar] = useState(false);

    //change navbar color on scroll
          const changeBg = () =>{
            console.log(window.scrollY)
            if(window.scrollY >= 60){
                setNavbar(true)
            }else{
                setNavbar(false);
            }
          }
          window.addEventListener("scroll", changeBg);

    const handleToggle = () =>{
        setShow(prev => !prev)
        console.log(show)
    }
  return (
   <>
      <nav className={navbar ? "active": ""} >
          <div className="logo">HELLO</div>
            <ul className={show ? "mobile": ""}>
                <li>HOME</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>
                
            </ul>
           <button>HEELO</button>
           <div className='mobile-menu'>
           { !show ? 
            <Menu className='icon-1' onClick={handleToggle} />
            :
             <X onClick={handleToggle}/>
              }
           
        </div>

       </nav>

       <div className="hero">
    s
       </div>
   </>
  )
}

export default Navbar
