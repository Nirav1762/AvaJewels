import React from 'react'
import '../main.css'


const Hero = () => {
  return (
      <div className='hero'>
          <video className='heroVideo' autoPlay loop muted playsInline>
            <source src={`${process.env.PUBLIC_URL}/Videos/heroVideo.mp4`} type="video/mp4" />
          </video>
          <div className='heroPromoBox'>
              <div className='textBox1'>
              WE CELEBRATE THE BRILLIANCE OF YOUR SPIRIT, FORGED BY THE PRESSURES OF THE WORLD.
              </div> 
              <div className='textBox2'>
              SHINE ON, HERO OF TODAY!
              </div>
          </div>
      </div>
  )
}

export default Hero
