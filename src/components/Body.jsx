import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import IKnow from './IKnow'

const Body = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <Hero />
        <AboutMe />
        <IKnow />
    </section>
  )
}

export default Body