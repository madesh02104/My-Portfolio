import React from 'react';
import { FaGithub, FaTwitter, FaReddit} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";


const Footer = () => {
  return (
    <section>
      <section className='bg-emerald-600 w-full pt-6 rounded-t-2xl flex flex-col justify-center items-center gap-6'>
      <p className='text-white  font-semibold text-md sm:text-2xl'>Learning today and making one step at a time.</p>
      <div className='w-fit flex gap-8 mb-4'>
        <a href="https://github.com/madesh02104" target='_blank'> <FaGithub size={32} /></a>
        <a href="https://x.com/madesh02104" target='_blank'> <FaTwitter size={32}/></a>
        <a href="https://leetcode.com/u/IMqC2Ksi4Y/" target='_blank'> <SiLeetcode size={32}/></a>
        <a href="https://www.geeksforgeeks.org/user/madeshlvc3/" target='_blank'> <SiGeeksforgeeks size={32}/></a>
      </div>
    </section>
            <p className='text-md italic text-emerald-1000 text-center'>&copy; Built by <a href='https://github.com/madesh02104' target='_blank'>@Madesh</a></p>
    </section>

  )
}

export default Footer