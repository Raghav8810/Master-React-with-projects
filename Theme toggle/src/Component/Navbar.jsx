
import { Link } from 'react-router-dom'
import { UseTheme } from '../ThemeContext'

const Navbar = () => {
   const{theme,toggleTheme }=  UseTheme();
   //nav

  return (
    <div>
         <div className='nav'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
           <Link to="/blog">Blog</Link>
         </div>

            <div className='switch'>
              <label>
               <input type="checkbox" 
               onChange={toggleTheme}
               checked={theme === "dark"}
               />
               <span className='slider round'></span>
              </label>
            </div>
    </div>
  )
}

export default Navbar
