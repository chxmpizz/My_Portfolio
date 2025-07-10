import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex h-full pt-27 pb-18 flex-col text-5xl items-center justify-center "
    >
      <motion.h1 
      initial={{y:-50}}
      whileInView={{y:0}}
      transition={{duration : 1}}
      className="text-5xl font-normal">
        My <span className="font-extrabold">Skills</span>
      </motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10  w-auto overflow-hidden pt-15 pb-18">
        <motion.div
          initial={{ y: 50 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="px-3 py-4 rounded-2xl shadow-lg hover:duration-300 border-2  
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3"
        >
          <FaHtml5 />
          <p className="text-xl font-normal text-center mt-2">HTML</p>
        </motion.div>
        <motion.div
          initial={{ y: 55 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <FaCss3Alt />
          <p className="text-xl font-normal text-center mt-2">CSS</p>
        </motion.div>
        <motion.div
          initial={{ y: 60 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <FaJs />
          <p className="text-xl font-normal text-center mt-2">JavaScript</p>
        </motion.div>
        <motion.div
          initial={{ y: 65 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiTypescript />
          <p className="text-xl font-normal text-center mt-2">TypeScript</p>
        </motion.div>
        <motion.div
          initial={{ y: 70 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <FaReact />
          <p className="text-xl font-normal text-center mt-2">ReactJS</p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiNextdotjs />
          <p className="text-xl font-normal text-center mt-2">NextJS</p>
        </motion.div>
        <motion.div
          initial={{ y: 55 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiTailwindcss />
          <p className="text-xl font-normal text-center mt-2">TailwindCSS</p>
        </motion.div>
        <motion.div
          initial={{ y: 60 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiShadcnui />
          <p className="text-xl font-normal text-center mt-2">ShadCN</p>
        </motion.div>
        <motion.div
          initial={{ y: 65 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiPostgresql />
          <p className="text-xl font-normal text-center mt-2">PostgreSQL</p>
        </motion.div>
        <motion.div
          initial={{ y: 70 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiPrisma />
          <p className="text-xl font-normal text-center mt-2">Prisma</p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiExpress />
          <p className="text-xl font-normal text-center mt-2">ExpressJS</p>
        </motion.div>
        <motion.div
          initial={{ y: 55 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <FaNodeJs />
          <p className="text-xl font-normal text-center mt-2">NodeJS</p>
        </motion.div>
        <motion.div
          initial={{ y: 60 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300 
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiMongodb />
          <p className="text-xl font-normal text-center mt-2">MongoDB</p>
        </motion.div>
        <motion.div
          initial={{ y: 65 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ y: { duration: 1 } }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <FaPython />
          <p className="text-xl font-normal text-center mt-2">Python</p>
        </motion.div>
        <motion.div
          initial={{ y: 70 }}
          whileHover={{
            background: "black",
            color: "white",
            borderColor: "black",
          }}
          whileInView={{ y: 0 }}
          transition={{ y: { duration: 1 } }}
          className="border-2 px-3 py-3 rounded-2xl shadow-lg hover:duration-300
          flex justify-center items-center flex-col sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 max-sm:px-3 max-sm:py-3 "
        >
          <SiNestjs />
          <p className="text-xl font-normal text-center mt-2">NestJS</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
