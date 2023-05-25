import { useState, React } from "react";
import "./header.css"

function Header() {

  const [onButton, setOnButton] = useState(false);

  const menuIsOpen = () => {
    setOnButton(true);
  }

  const menuIsClose = () => {
    setOnButton(false);
  }


  if(onButton === false){
    return (
      <div className='header-navbar'>
          <div className='header-nav-logo'>
            
              <p className='first-logo'>brood</p>
          </div>
          <button onClick={menuIsOpen} className='menu-button'><i class="fa-solid fa-grip-lines"></i></button>
          <div className='header-nav-link'>
              <a href='/'>Home</a>
              <a href='/features'>Features</a>
              <a href='/pricing'>Pricing</a>
              <a href='/contact'>Contact</a>
          </div>
          <div className='header-nav-log'>
              <button className='sign-button'>Sign in</button>
              <button className='login-button'>Login</button>
          </div>
      </div>
    )

  }else if(onButton === true){
    <div className='menu-open'>
      <i class="fa-solid fa-xmark"></i>
      <div></div>
      <div className='header-nav-link'>
              <a href='/'>Home</a>
              <a href='/features'>Features</a>
              <a href='/pricing'>Pricing</a>
              <a href='/contact'>Contact</a>
          </div>

          <div className='header-nav-log'>
              <button className='sign-button'>Sign in</button>
              <button className='login-button'>Login</button>
          </div>

    </div>
  }
  
  
}

export default Header