import React from 'react'
import './HeroLoop.css'

function HeroLoop() {
  return (
  <div>
    <video loop autoPlay muted id="hero-loop">
      <source src={require('./hero_loop.mp4')} type="video/mp4" />
    </video>
  </div>
  )
}

export default HeroLoop