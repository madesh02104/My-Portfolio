import React from 'react'
import heroImage from '../assets/hero-image.png'
import avatar from '../assets/avatar.png'

const Hero = () => {
  return (
    <section className='w-[80%] mt-40 flex flex-col justify-center items-center gap-4'>
        <img src={avatar} alt="avatar" className='h-48' />
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold text-gray-800'>Frontend Developer, Full-Stack Aspirer.</h2>
        <h6 className='text-lg sm:text-xl text-center'>I design and code simple yet beautiful web applicatons.</h6>
        <img src={heroImage} alt="hero-image" title='Coding...' className='h-48 w-auto mt-64 sm:h-64 lg:h-96 ' />
    </section>
  )
}

export default Hero