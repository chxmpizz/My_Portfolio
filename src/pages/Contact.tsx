import Mail from "../../public/mail.svg";
import Phone from "../../public/phone.svg";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-20 text-5xl flex flex-col items-center justify-center w-full  overflow-hidden"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold"
      >
        Let's Contact Me!
      </motion.h1>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="mt-4 text-lg"
      >
        Ready to work with your company and build a Excellent Products.
      </motion.p>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="px-5 py-8 border-t-1 flex lg:flex-row items-center justify-between w-5/6 mt-10 max-sm:flex-col max-sm:gap-5 max-sm:items-center sm:flex-col sm:gap-5 sm:items-center"
      >
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ duration: 1.3 }}
          className="text-xl font-bold max-sm:text-md sm:text-md flex"
        >
          <img src={Mail} alt="Mail" width={20} height={20} className="mr-2" />
          rattasat.onn@gmail.com
        </motion.p>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 100 }}
          transition={{ duration: 1.5 }}
          className="text-xl font-bold max-sm:text-md sm:text-md flex"
        >
          <img src={Phone} alt="Mail" width={20} height={20} className="mr-2" />
          063-527-8329
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
