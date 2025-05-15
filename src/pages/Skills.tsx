import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt  } from "react-icons/fa";
import { FaJs  } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiBun } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import {motion} from 'framer-motion'

const iconVariants = (duration : any) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
  },
  transition: {
    duration,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
});

const Skills = () => {
  return (
    <div className="flex flex-col text-5xl items-center justify-center">
      <h1 className="text-5xl font-bold">
        Skills
      </h1> 
      <div className="flex flex-row items-center justify-center mt-10">
         <motion.div 
          variants={iconVariants(1)}
          whileHover={{scale: 1.3}}
          initial='initial'
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg text-[#ff5733] 
          flex justify-center items-center flex-col cursor-pointer">
            <FaHtml5 />
            <p className="text-xl font-semibold text-center mt-2">
              HTML
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(1.2)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#2965f1]">
            <FaCss3Alt />
            <p className="text-xl font-semibold text-center mt-2">
              CSS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(1.4)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#F0DB4F]">
            <FaJs />
            <p className="text-xl font-semibold text-center mt-2">
              JavaScript
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(1.6)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#3178C6]">
            <SiTypescript />
            <p className="text-xl font-semibold text-center mt-2">
              TypeScript
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(1.8)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#61DBFB]">
            <FaReact />
            <p className="text-xl font-semibold text-center mt-2">
              ReactJS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(2)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#000000]">
            <SiNextdotjs />
            <p className="text-xl font-semibold text-center mt-2">
              NextJS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(2.2)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#06b6d4]">
            <SiTailwindcss />
            <p className="text-xl font-semibold text-center mt-2">
              TailwindCSS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(2.4)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#000000]">
            <SiShadcnui />
            <p className="text-xl font-semibold text-center mt-2">
              ShadCN
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(2.6)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#0064a5]">
            <SiPostgresql />
            <p className="text-xl font-semibold text-center mt-2">
              PostgreSQL
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(2.8)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#4DB6AC]">
            <SiPrisma />
            <p className="text-xl font-semibold text-center mt-2">
              Prisma
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(3)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#212121]">
            <SiExpress />
            <p className="text-xl font-semibold text-center mt-2">
              ExpressJS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(3.2)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#3C873A]">
            <FaNodeJs />
            <p className="text-xl font-semibold text-center mt-2">
              NodeJS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(3.4)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#E2BD8C]">
              <SiBun />
              <p className="text-xl font-semibold text-center mt-2">
              BunJS
            </p>
          </motion.div>
          <motion.div 
          variants={iconVariants(3.6)}
          initial='initial'
          whileHover={{scale: 1.3}}
          animate='animate'
          className="bg-gray-100 px-3 py-3 mr-5 rounded-2xl shadow-lg cursor-pointer 
          flex justify-center items-center flex-col text-[#00ED64]">
            <SiMongodb />
            <p className="text-xl font-semibold text-center mt-2">
              MongoDB
            </p>
          </motion.div>
      </div>
    </div>
  )
}

export default Skills