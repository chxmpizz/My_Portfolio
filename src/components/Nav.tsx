// import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to any threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className={`fixed top-0 left-0 right-0 text-black bg-white z-10 ${scrolled ? 'shadow-md' : ''}` }>
      <nav className="flex justify-between items-center  p-4 text-black mx-15 ">
        <div className="text-3xl font-bold">Portfolio</div>
        <div className="flex text-xl font-semibold space-x-4 px-5 justify-around items-center">
          <motion.div 
          whileHover={{scale: 1.3}}
          className='pr-10'
          onClick={() => window.scrollTo(0, 0)}>
            <a href="https://web.facebook.com/rattasat.onnomdee/" 
            className='cursor-pointer'>
              <FaFacebook className=' text-3xl'/>
            </a>
          </motion.div>
          <motion.div 
          whileHover={{scale: 1.3}} 
          className='pr-10'
         >
            <a href="https://github.com/champNewbie" 
            className='cursor-pointer'>
              <FaGithub className=' text-3xl'/>
            </a>
          </motion.div >
          <motion.div 
          whileHover={{scale: 1.3}} className='pr-10'> 
            <a href="https://www.instagram.com/cha_.x._p/" 
            className='cursor-pointer'>
              <FaSquareInstagram className=' text-3xl'/>
            </a>
          </motion.div >
          <motion.div 
          whileHover={{scale: 1.3}} className='pr-10'>
            <a href="https://line.me/ti/p/X_mVvm5irx" 
            className='cursor-pointer'>
              <FaLine className=' text-3xl'/>
            </a>
          </motion.div >
        </div>
      </nav>
    </div>
  )
}

export default Nav