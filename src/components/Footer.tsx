import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-black text-white py-5">
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center text-lg"
      >
        @2025 Rattasat Onnomdee. Created With{" "}
        <FaReact className="text-[#61d8f8] ml-2 mr-1 inline-block" />
        ReactJS &{" "}
        <SiTailwindcss className=" ml-2 mr-1 text-[#A5F3FC] inline-block" />
        TailwindCSS
      </motion.h2>
    </div>
  );
};

export default Footer;
