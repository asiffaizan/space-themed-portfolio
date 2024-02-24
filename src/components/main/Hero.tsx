import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div  className="relative flex flex-col h-full w-full">
        <video
            autoPlay
            muted
            loop
            className='rotate-180 absolute top-[-310px] left-0 z-[1] w-full object-cover'
        >
            <source src='/assets/blackHole.webm' type='video/webm' />
        </video>
        <HeroContent/>
    </div>
  )
}

export default Hero