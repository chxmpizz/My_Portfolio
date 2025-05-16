// import {Link} from 'react-router-dom'
import { motion ,AnimatePresence} from 'framer-motion'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to any threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className={`fixed 
    max-sm:w-[100%] max-sm:  lg:w-full top-0 left-0 right-0 text-black bg-white z-10 ${scrolled ? 'shadow-md' : ''}` }>
      <nav className="flex justify-between items-center p-4 text-black">
        <h1 className="text-4xl font-bold">Portfolio</h1>
        <div className="hidden lg:flex text-xl font-semibold space-x-4 px-5 justify-around items-center">
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
          whileHover={{scale: 1.3}} className=''>
            <a href="https://line.me/ti/p/X_mVvm5irx" 
            className='cursor-pointer'>
              <FaLine className=' text-3xl'/>
            </a>
          </motion.div >
        </div>
        <button onClick={handleToggle} className="lg:hidden cursor-pointer">
          <RxHamburgerMenu className='text-3xl'/>
        </button>
      </nav>
      <AnimatePresence>
      {
            toggle ? 
            (<motion.div 
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}} 
            exit={{opacity: 0, x: -100}}
            transition={{duration: 0.2}}
            className='h-screen w-60 flex flex-col justify-start items-start px-5 fixed rounded-tr-xl rounded-br-xl bg-[#e7e7e7] py-5'>
               <motion.div
                whileHover={{color: '#1778F2'}}
                className='pb-5'
                onClick={() => window.scrollTo(0, 0)}>
                  <a href="https://web.facebook.com/rattasat.onnomdee/" className='flex flex-row justify-center gap-2 items-center '>
                    <FaFacebook className=' text-3xl'/>
                    <h1 className='text-xl'>FaceBook</h1>
                  </a>
                </motion.div>
               <motion.div
                whileHover={{color: '#21262D'}}
                className='pb-5'
                onClick={() => window.scrollTo(0, 0)}>
                  <a href="https://github.com/champNewbie" className='flex flex-row justify-center gap-2 items-center '>
                    <FaGithub className=' text-3xl'/>
                    <h1 className='text-xl'>GitHub</h1>
                  </a>
                </motion.div>
               <motion.div
                whileHover={{color: '#DD2A7B'}}
                className='pb-5'
                onClick={() => window.scrollTo(0, 0)}>
                  <a href="https://www.instagram.com/cha_.x._p/" className='flex flex-row justify-center gap-2 items-center '>
                    <FaSquareInstagram className=' text-3xl'/>
                    <h1 className='text-xl'>Instagram</h1>
                  </a>
                </motion.div>
               <motion.div
                whileHover={{color: '#06C755'}}
                className='pb-5'
                onClick={() => window.scrollTo(0, 0)}>
                  <a href="https://line.me/ti/p/X_mVvm5irx" className='flex flex-row justify-center gap-2 items-center '>
                    <FaLine className=' text-3xl'/>
                    <h1 className='text-xl'>Line</h1>
                  </a>
                </motion.div>
            </motion.div>) : ''
          }</AnimatePresence>
    </div>
  )
}

export default Nav