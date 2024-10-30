import React from 'react'

const Header = () => {
  return (
    <section className='flex justify-between m-8 mx-8 md:mx-16 lg:mx-24'>
        <p className='text-gray-600 font-medium text-xl sm:text-2xl p-1 rounded-lg transition ease-in debuildlay-100 duration-100 hover:border-b-2'>Madesh</p>
        <button className='font-medium text-xl sm:text-2xl p-1 px-4 text-emerald-600 border-2 border-emerald-600 rounded-2xl transition ease-in delay-100 duration-100 hover:bg-emerald-600 hover:text-white active:scale-90'>Ping me !</button>
    </section>
  )
}

export default Header