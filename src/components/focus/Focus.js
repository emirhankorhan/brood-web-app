import './focus.css';
import { useState, React } from "react";
import Content from "../content/Content"
// import Features from './components/features/Features';
// import Featurestwo from './components/featurestwo/Featurestwo';
import Focuscontent from './focus-content/Focuscontent';



function Focus() {

  const [onButton, setOnButton] = useState(false);


  const menuIsOpen = () => {
    setOnButton(true);

  }

  const menuIsClose = () => {
    setOnButton(false);

  }

  if (onButton === false) {
    return (
      <div className='appp'>
        <div className='header-navbar'>
          <div className='header-nav-logo'>

            <p className='first-logo'>brood</p>
          </div>
          <button onClick={menuIsOpen} className='menu-button'><i class="fa-solid fa-layer-group"></i></button>
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
        <Focuscontent/>

      </div>


    )

  } else if (onButton === true) {
    return (
      <div className='app'>

        <div className="menu-open">

          <div className="close-button"><i onClick={menuIsClose} class="fa-solid fa-xmark"></i></div>
          <div className='header-nav-close-link'>
            <a href='/'>Home</a>
            <a href='/features'>Features</a>
            <a href='/pricing'>Pricing</a>
            <a href='/contact'>Contact</a>
          </div>

          <div className='header-nav-close-log'>
            <button className='sign-button'>Sign in</button>
            <button className='login-button'>Login</button>
          </div>

        </div>
        <div className='header-navbar'>
          <div className='header-nav-logo'>

            <p className='first-logo'>brood</p>
          </div>
          <button onClick={menuIsOpen} className='menu-button'><i class="fa-solid fa-layer-group"></i></button>
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
        <Focuscontent/>
      </div>
    )
  }
}

export default Focus;
