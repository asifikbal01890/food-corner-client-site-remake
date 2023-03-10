import React, { useContext, useState } from 'react';
import { FaHome, FaBlogger , FaCode } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import {ImMenu} from "react-icons/im"; 
import {AiFillCloseCircle}  from 'react-icons/ai'; 
import { NavLink } from 'react-router-dom';
import './AnotherNav.css'; 
import { AuthContext } from '../../Contexts/AuthProvider';

const AnotherNav = () => {

    const {user, logOut} = useContext(AuthContext);
   const [open, setOpen] = useState(false); 
   const handleToggle = () =>{
      setOpen(!open); 
   }
      
   return (
     <>
          <div className='menuToggler z-50 ' onClick={handleToggle} >
               {
                  open ? <AiFillCloseCircle/> : <ImMenu/>
               }
         </div>
         <nav  className={`nav-menu-bar ${open ? "openMenu" : "closeMenu"}`}>
            <ul className='nav-menu' >

               <NavLink to='/' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><FaHome/></span><span className='side-text'>Home</span></NavLink>

               <NavLink to='/foods' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}> <span className='nav-icon'><MdFastfood/></span><span className='side-text'>Foods</span></NavLink>

               <NavLink to='/addservice' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaCode/></span><span className='side-text'>Review</span></NavLink>

               <NavLink to='/blog' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FaBlogger/></span><span className='side-text'>Blog</span></NavLink>

               <NavLink to='/login' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FiLogIn/></span><span className='side-text'>Login</span></NavLink>
              {/* {
                user?.uid ?  <NavLink className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}{logOut}><span className='nav-icon'><FiLogIn/></span><span className='side-text'>Logout</span></NavLink>
                :
                <NavLink to='/login' className={`text-2xl ${({isActive})=> isActive ? 'active' : undefined}`} onClick={handleToggle}><span className='nav-icon'><FiLogIn/></span><span className='side-text'>Login</span></NavLink>
              } */}

            </ul>
         </nav>
     </>
   );
};

export default AnotherNav;