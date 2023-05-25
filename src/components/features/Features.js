import React from 'react'
import "./features.css"

function Features() {
  return (
    <div className='features-app'>
        <div className='feature-app-edit'>
        <div className='feature-one'>
            <div className='feature-one-title'>Simple and Useful</div>
            <div className='feature-one-text'>Brood.com's simple interface means you don't have to 
            deal with difficult things. It's much more than a simple note-taking app. Start doing 
            what you want with ready-made templates.</div>
        </div>
        <div className='feature-two'>
            <div className='feature-two-title'>Everything is in Order</div>
            <div className='feature-two-text'>If there are noises and messes in your head, 
            make them for a while Brood.com entrust it to and relax. We'll make everything 
            all right until you get here.</div>
        </div>
        <div className='feature-three'>
            <div className='feature-three-title'>Focusing Help</div>
            <div className='feature-three-text'>Sometimes it is almost impossible to focus. Brood.com the simple 
            interface of does not make you worry and guides you to get things done. Just get started and 
            try to make things right.</div>
        </div>
        </div>
    </div>
  )
}

export default Features