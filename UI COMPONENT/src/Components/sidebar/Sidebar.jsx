import { Aperture, Home, LayoutDashboard, Menu } from 'lucide-react';
import { Store } from 'lucide-react';
import './sidebar.css'
import { useState } from 'react';



const Sidebar = () => {
    const[isopen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(prev => !prev)
        console.log(isopen);
    };
   
    const menuitem = [
        {
            path: "/",
            name:"Dashboard",
            icon: <Aperture />
        },
        {
            path: "/services",
            name:"Services",
            icon: <LayoutDashboard size={16} color="#ffffff" strokeWidth={1.5} />
        },
        {
            path: "/about",
            name:"About",
            icon: <Store size={16} color="#ffffff" strokeWidth={1.5} />
        },
        {
            path: "/home",
            name:"comment",
            icon: <Home />
        },
    ]


  return (
   <div className="container">
   
        <div  className={ !isopen ? "sidebar" : "sidebar2"} >
             <div className="topsection">
                  <h1  style={{display: !isopen ? "block"  : "none", transition: "all 1s"}}>logo</h1>
                  <div className="bars">
                      <Menu onClick={toggle} />
                  </div>
             </div> 

             {
                menuitem.map((item,index)=>(
                    <div  key={index} className="link" >
                         <div className="icon">{item.icon}</div>
                         <div className='text'>{item.name}</div>
                    </div>
                ))
             }
        </div>
        <main>
        xsss  
        </main>
   </div>
  )
}

export default Sidebar
