import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white"
      >
        Let’s <span className="text-red-500">Connect</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto"
      >
        Whether you have a question, a project idea, or just want to say hi, my
        inbox is always open.
      </motion.p>

      {/* Email Button */}
      <motion.a
        href="mailto:vishal@thecodingstudio.in"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-block mt-8 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg transition"
      >
        📩 Email Me
      </motion.a>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center gap-6"
      >
        <a
          href="https://github.com/vshl01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/viishall.01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 text-2xl transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/vshl01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 text-2xl transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://x.com/vshl01_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white text-2xl transition"
        >
          <FaXTwitter />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
