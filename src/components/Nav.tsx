import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import saveAs from "file-saver";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  const buttonVariants = {
    initial: { rotate: 0 },
    hover: { scale: 1.1 },
  };

  const imgVariants = {
    initial: { rotate: 0 },
    hover: { rotate: -15 }, // You can customize this
  };
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Change 50 to any threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const resumeDownload = () => {
    saveAs("/Resume.pdf", "resume.pdf");
  };

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.8 }}
      className={`fixed z-99 duration-300
    max-sm:w-[100%] max-sm: lg:w-full top-0 left-0 right-0 ${
      scrolled ? "bg-black text-white shadow-lg shadow-red-500/30" : "bg-white text-black shadow-lg shadow-blue-500/30"
    }`}
    >
      <nav className="flex justify-around items-center p-4">
        <h1 className="text-4xl font-bold">Portfolio</h1>

        <div className="hidden lg:flex text-xl font-semibold space-x-4 px-5 justify-around items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="pr-10"
            onClick={() => window.scrollTo(0, 0)}
          >
            <a href="#home" className="cursor-pointer scroll-auto">
              <p>Home</p>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="pr-10"
            onClick={() => window.scrollTo(0, 0)}
          >
            <a href="#experiences" className="cursor-pointer scroll-auto">
              <p>Experiences</p>
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="pr-10"
            onClick={() => window.scrollTo(0, 0)}
          >
            <a href="#skills" className="cursor-pointer scroll-auto">
              <p>Skills</p>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="pr-10"
            onClick={() => window.scrollTo(0, 0)}
          >
            <a href="#projects" className="cursor-pointer scroll-auto">
              <p>Projects</p>
            </a>
          </motion.div>
        </div>

        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => resumeDownload()}
          transition={{ duration: 0.1 }}
          className={`flex px-2 py-3 rounded-lg cursor-pointer ${
            scrolled ? "text-black bg-white" : "text-white bg-black"
          }`}
        >
          Resume
          <motion.img
            variants={imgVariants}
            className="mx-1"
            src={scrolled ? `/download.svg` : `/downloadWhite.svg`}
            alt="download"
          />
        </motion.button>

        <button onClick={handleToggle} className="lg:hidden cursor-pointer">
          <RxHamburgerMenu className="text-3xl" />
        </button>
      </nav>

    </motion.div>
  );
};

export default Nav;
