import { motion } from "framer-motion";
import HeroImage from "../../assets/images/photo_2025-08-15 16.59.28.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-12 lg:px-20">
      {/* Left: Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center md:justify-end w-full md:w-1/2 mb-8 md:mb-0"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 md:mr-16 lg:mr-24"
        >
          <motion.img
            src={HeroImage}
            alt="Vishal"
            className="w-full h-full object-cover rounded-full border-4 border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.9)]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div className="absolute inset-0 rounded-full bg-red-500/10 blur-2xl animate-pulse"></div>
        </motion.div>
      </motion.div>

      {/* Right: Text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { staggerChildren: 0.25, duration: 0.8 },
          },
        }}
        className="text-center md:text-left w-full md:w-1/2"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-red-500">Vishal</span>
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-lg lg:max-w-xl"
        >
          I blend creativity with technical expertise to turn ideas into
          impactful digital experiences.
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full font-medium shadow-lg transition"
          >
            View My Work
          </button>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 border border-red-500 hover:bg-red-500/10 rounded-full font-medium transition"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
