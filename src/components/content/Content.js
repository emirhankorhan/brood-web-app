import React from 'react'
import "./content.css"
import Focus from '../focus/Focus'
import { Route, Routes } from "react-router-dom";
function Content() {
  return (
    <div className='content-app'>
      <p className='first-content'>Brood.com is a seemingly simple note-taking app
        but why would we argue it's better than the others?</p>
      <p className='second-content'>Because we are in more and more developing technology
        and outside the working environment we need. That's why
        brood.com meets daily with new updates and new features
        to be one of the most advanced websites to handle focus
        and success.</p>
      <div className='content-button'>
        <button className='focus-button'><i class="fa-solid fa-bolt fa-fade"></i>Focus Assist</button>
        <button className='free-button'><a href='/focus'>Try for Free</a></button>
        <Routes>
          <Route path='/focus' element={<Focus />} />
        </Routes>
      </div>
    </div>
  )
}

export default Content