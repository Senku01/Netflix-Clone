import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'
function Nav() {

const [show,handleShow] = useState(false);
const history = useHistory()


const transistionNavBar = () =>{
  if (window.pageYOffset > 100){
    handleShow(true);
  }
  else
  {
    handleShow(false);
  }
};

useEffect(()=>{
  window.addEventListener("scroll", transistionNavBar);
  return ()=> window.removeEventListener("scroll", transistionNavBar);
}, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}> 
      {/* `nav ${show && "nav__black"}` */}
      <div className='nav_contents'>
        <img 
          onClick={()=> history.push("/")}
          className='nav_logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <img 
          onClick={()=> history.push("/profile")}
          className='nav_avatar'
          src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png'
          alt=''
        />
      </div>
    </div>
  )
}

export default Nav