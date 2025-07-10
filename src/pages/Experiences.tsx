import {motion } from 'framer-motion'
import MeeSolution from "../assets/mee-solution.png";

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="bg-black text-white flex py-30 flex-col text-5xl items-center justify-center w-full"
    >
      <motion.h1 
       initial={{x:100 , opacity:0}}
       whileInView={{x:0 , opacity:100}}
       transition={{duration : 1}}
       className="text-5xl font-bold">
        Experiences
      </motion.h1>
      <motion.div 
      initial={{y:100 , opacity:0}}
      whileInView={{y:0 , opacity:100}}
      transition={{duration : 1}}
      className="flex flex-col items-center w-5/6 rounded-2xl border-2 border-white mt-10 py-10 px-5">
        <div className=" flex justify-between items-center w-full">
          <div className="flex items-center">
            <img
              src={MeeSolution}
              alt="mee-solution"
              width={60}
              height={60}
            />
            <p className="ml-4 text-2xl">
              Internship at{" "}
              <motion.div 
              initial={{background : 'black'}}
              whileHover={{background : 'linear-gradient(to right, #61A2C6, #263B6D, #EF8673)'}}
              transition={{duration:2}}
              className='inline-block rounded-xl p-0.5'>
                <div className='bg-black rounded-xl p-1'>
                  <a href='https://meesolution.com/' 
                  className="
                  text-3xl bg-gradient-to-r from-[#61A2C6] via-[#263B6D] to-[#EF8673] bg-clip-text text-transparent">
                    Mee Solution Consulting Co. Ltd.
                  </a>
                </div>
              </motion.div>
            </p>
          </div>
          <p className="text-2xl text-gray-400">June - Aug 2025</p>
        </div>
        <div className="mt-4">
          <p className="text-xl text-start font-normal">
            At Mee-Solution Consulting, I served as a Software Engineer, focusing on 
            the implementation of frontend UI from Design Requirement , responsive design and fix bug. Working on projects that involved
            Education Game platform like Kaigai.io from Monkey Everyday , CDD-library , SingHa Museum.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;
