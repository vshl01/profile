import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFramer,
  SiExpress,
  SiPostgresql,
  SiNextdotjs,
  SiRust,
  SiCplusplus,
  SiSolidity,
} from "react-icons/si";

const techStack = [
  { icon: <FaReact className="text-sky-400" />, name: "React" },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  {
    icon: <SiNextdotjs className="text-white dark:text-white" />,
    name: "Next.js",
  },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
  { icon: <SiPostgresql className="text-sky-500" />, name: "PostgreSQL" },
  { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
  { icon: <SiRust className="text-orange-500" />, name: "Rust" },
  { icon: <SiCplusplus className="text-blue-400" />, name: "C++" },
  { icon: <FaPython className="text-yellow-400" />, name: "Python" },
  { icon: <SiSolidity className="text-gray-400" />, name: "Solidity" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS" },
  { icon: <SiFramer className="text-pink-400" />, name: "Framer Motion" },
  { icon: <FaGitAlt className="text-orange-400" />, name: "Git" },
];

const AboutPreview = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white"
      >
        About Me
      </motion.h2>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-3 sm:grid-cols-5 gap-8 max-w-3xl mx-auto"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="text-5xl">{tech.icon}</div>
            <p className="text-gray-300 text-sm">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-10 text-gray-300 max-w-2xl mx-auto leading-relaxed"
      >
        Full-Stack Engineer passionate about building innovative, scalable, and
        user-friendly solutions. I blend creativity with technical expertise to
        turn ideas into impactful digital experiences, specializing in React,
        TypeScript, Next.js, Node.js, and modern UI/UX.
      </motion.p>

      {/* Professional Experience with Image */}
      

      {/* Read More Button */}
    </section>
  );
};

export default AboutPreview;
