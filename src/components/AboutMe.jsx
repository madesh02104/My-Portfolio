import React from 'react'

const AboutMe = () => {
  return (
    <section className='w-full'>
        <div className='w-full h-50 sm:h-60 md:h-80 bg-emerald-600 flex flex-col justify-between items-center '>
          <h2 className='text-4xl text-white font-bold mt-24'>Hi, I'm Madesh,</h2>
          <div className='bg-white border border-gray-300 rounded-md w-[80%] md:w-[70%] lg:w-[60%] p-4 shadow-lg translate-y-20'>
            <p className='font-medium text-center text-gray-900 md:text-lg'>I'm a Developer specializing in building interactive, responsive, high performing web applications. With solid foundation in various frontend concepts I have worked on various personal projects in the process of learning. Currently working on to expand my area of knowledge in tech. Feel free to reach me out for any project work or collaboration related to development.</p>
          </div>
        </div>
    </section>
  )
}

export default AboutMe