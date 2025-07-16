import Intern from "../assets/intern1.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section
    id="home"
    className="max-md:py-0 flex items-center lg:justify-around lg:h-screen max-md:h-full mx-6 
    lg:flex-row 
    w-auto
    max-md:my-0 max-md:mx-5 max-lg:flex-col-reverse "
    >
      <div className="flex flex-col justify-center items-center mt-5 md:w-[80%] lg:w-[50%] sm:w-[90%]">
        <motion.h1
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ duration: 1.3 }}
          className="text-4xl font-normal text-start max-lg:text-center leading-snug max:sm:text-xl"
        >
          Hello , I'm
          <span className="font-extrabold"> Rattasat Onnomdee </span>
          who passionate with
          <span className="outlined-text"> Technology </span>
        </motion.h1>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 100 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-normal max-lg:text-center leading-9 text-start mt-5 max-sm:text-md"
        >
          You can call me{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Champ
          </span>{" "}
          , I study in Thammasat University with Faculty of Science and
          Technology Department of Computer Science. I'm interested in
          programming such as Web Development , Mobile Application , Data
          Science (ML/DL) and{" "}
          <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
            Nice to meet you everyone
          </span>{" "}
          😊.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="flex justify-start max-lg:justify-center my-5 items-center w-full"
        >
          <motion.div
            whileHover={{ color: "#1778F2" }}
            className="mr-4 border-2 py-2 px-3 rounded-md cursor-pointer"
          >
            <a
              href="https://web.facebook.com/rattasat.onnomdee/"
              className="flex flex-row justify-center gap-2 items-center "
            >
              <FaFacebook className=" text-3xl" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ color: "#21262D" }}
            className="mr-4 border-2 py-2 px-3 rounded-md cursor-pointer"
          >
            <a
              href="https://github.com/chxmpizz"
              className="flex flex-row justify-center gap-2 items-center "
            >
              <FaGithub className=" text-3xl" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ color: "#DD2A7B" }}
            className="mr-4 border-2 py-2 px-3 rounded-md cursor-pointer"
          >
            <a
              href="https://www.instagram.com/cha_.x._p/"
              className="flex flex-row justify-center gap-2 items-center "
            >
              <FaSquareInstagram className=" text-3xl" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ color: "#06C755" }}
            className="mr-4 border-2 py-2 px-3 rounded-md cursor-pointer"
          >
            <a
              href="https://line.me/ti/p/X_mVvm5irx"
              className="flex flex-row justify-center gap-2 items-center "
            >
              <FaLine className=" text-3xl" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 1.1 }}
        src={Intern}
        alt="intern"
        className="mt-10 rounded-2xl md:w-70 sm:w-60 max-sm:w-65"
      />
    </section>
  );
};

export default Home;
