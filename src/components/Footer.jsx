import React from 'react';
import { FaGithub, FaTwitter, FaReddit} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";


const Footer = () => {
  return (
    <section className='bg-emerald-600 w-full pt-6 rounded-t-full'>
      <p className='mx-[30%] mb-6 text-white font-semibold text-2xl mx-auto'>Learning today and making one step at a time.</p>
      <div className='social-links mx-[39%] flex gap-8'>
        <a href=""> <FaGithub size={32} /></a>
        <a href=""> <FaTwitter size={32}/></a>
        <a href=""> <SiLeetcode size={32}/></a>
        <a href=""> <SiGeeksforgeeks size={32}/></a>
        <a href=""> <FaReddit size={32}/></a>
      </div>

    </section>
  )
}

export default Footer