import React from 'react'
import Hero from './Hero'
import AboutMe from './AboutMe'
import IKnow from './IKnow'
import Projects from './Projects'
import OpenToWork from './OpenToWork'

const Body = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <Hero />
        <AboutMe />
        <IKnow />
        <Projects />
        <OpenToWork />
    </section>
  )
}

export default Body