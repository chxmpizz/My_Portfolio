import ShareRecipe from "../assets/ShareRecipe.png";
import Eduai from "../assets/Eduai_Home.png";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <section
      id="projects"
      className="flex h-full flex-col pt-25 text-5xl items-center justify-center w-full bg-black text-white"
    >
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="text-5xl font-normal"
      >
        My <span className="font-bold">Projects</span>
      </motion.h1>

      <div className="grid grid-cols-1 gap-10 w-full">
        <div className="flex w-auto justify-around items-center max-lg:flex-col mx-auto my-10">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            src={ShareRecipe}
            alt="ShareRecipe"
            width={500}
            height={500}
            className="rounded-lg max-md:px-4"
          />
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1.5 }}
            className="w-1/2 max-lg:w-8/9"
          >
            <div className="items-start flex flex-col max-md:w-auto max-lg:mt-6">
              <h2 className="text-3xl">ShareRecipe</h2>
              <p className="text-lg font-normal my-5 leading-8">
                A Simple Web Application that create Your own Recipe and save on
                to your all Recipe Using NextJS for build UI for Frontend with
                ShadCN and route API for Backend via App route and Database
                management by PostgreSQL with Prisma ORM.
              </p>
            </div>
            <button className="border-2 rounded-lg p-2 cursor-pointer">
              <a
                href="https://github.com/champNewbie/Share-Recipes"
                className="text-3xl"
              >
                <FaGithub />
              </a>
            </button>
          </motion.div>
        </div>

        <div className="flex flex-row-reverse w-auto max-lg:flex-col justify-around items-center mx-auto my-10">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1 }}
            src={Eduai}
            alt="Eduai"
            width={500}
            height={500}
            className="rounded-lg max-md:px-4"
          />
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 100 }}
            transition={{ duration: 1.5 }}
            className="w-1/2 max-lg:w-8/9"
          >
            <div className="items-start max-md:justify-center flex max-md:w-auto max-lg:mt-6 flex-col">
              <h2 className="text-3xl">Eduai (Developing)</h2>
              <p className="text-[21px] font-normal ">
                <p className="text-lg font-normal my-5 leading-8">
                  A Web Application that gather Course All Category and AI Agent
                  that help you conclude you lesson course for your more
                  understanding. using NextJS for Frontend with ShadCN ,
                  authenticate With Clerk a Third party Auth , NestJS for
                  Backend API server route ,Database management by PostgreSQL
                  with Prisma ORM and AI Model with OpenAI.
                </p>
              </p>
            </div>
            <button className="border-2 rounded-lg p-2 cursor-pointer">
              <a
                href="https://github.com/champNewbie/Eduai"
                className="text-3xl"
              >
                <FaGithub />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
