import { motion } from "framer-motion";

const projects = [
  {
    title: "Software Engineer",
    company: "TatvaCare | Bengaluru, karnataka, India",
    companyLogo:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/73/99/7c/73997c3e-7f80-cc42-9f6c-8f41357761e5/AppIcon-0-1x_U007emarketing-0-8-0-85-220-0.png/128x128bb.jpg",
    desc: "Built impactful health-tech solutions including the metabolic score flow (100K+ users) and a Health Coach Portal for doctors to track and guide patient progress.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZDSJOeGFhBS_OuLC842_awA2t8A6OwimQg&s",
    highlights: [
      "Developed the metabolic score flow with 90% engagement",
      "Built features for Health Coach Portal (web & mobile)",
      "Delivered high-performance solutions across platforms",
      "Collaborated in agile, cross-functional teams",
    ],
    link: "https://play.google.com/store/apps/details?id=com.mytatva.patient&hl=en_IN&pli=1",
    linkLabel: "View App",
  },
  {
    title: "Aradhana – Temple Management",
    company: "The Coding Studio | Surat, Gujrat, India",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQF15SApywBeaw/company-logo_200_200/B4DZiXoUzgHYAI-/0/1754890588237/thecodingstudio_logo?e=2147483647&v=beta&t=wAh32GxQG5bydMIeIV-cRGffymSw5u9MAf-aioLYmR8",
    desc: "A comprehensive web application designed for organizations to efficiently manage temples, events, donations, and funds. Enables organizational heads to oversee multiple temples with streamlined workflows, financial tracking, and event coordination — all in one accessible platform.",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/4c/0d/67/4c0d67ce-b22b-b3e3-f875-c58422d82772/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
    highlights: [
      "Built from scratch with a modern, responsive design",
      "Centralized management for temples, events, and donations",
      "Secure fund tracking with detailed reporting",
    ],
    link: "https://your-aradhana-live-link.com",
    linkLabel: "View Project",
  },
];

const ProjectsPreview = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-gray-900/60 border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Project Image */}
            {p.image && (
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-40 rounded-lg shadow-md object-contain bg-white border border-gray-700 group-hover:opacity-90 transition"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              />
            )}

            {/* Project Title */}
            <h3 className="text-lg font-semibold text-red-400 mt-4">
              {p.title}
            </h3>

            {/* Company Info with Animation */}
            {p.company && (
              <motion.div
                className="flex items-center gap-2 mt-1"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {p.companyLogo && (
                  <motion.img
                    src={p.companyLogo}
                    alt={p.company}
                    className="w-6 h-6 rounded-md border border-gray-600 object-cover"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.45, duration: 0.4 }}
                    viewport={{ once: true }}
                  />
                )}
                <span className="text-gray-400 text-sm">{p.company}</span>
              </motion.div>
            )}

            {/* Description */}
            <p className="text-gray-300 mt-2 text-sm">{p.desc}</p>

            {/* Highlights */}
            {p.highlights && (
              <ul className="space-y-2 text-gray-400 text-sm list-disc pl-5 mt-4">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            )}

            {/* Link Button */}
            {p.link && (
              <div className="w-full flex justify-center items-center">
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-block mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full text-white font-medium shadow-lg transition"
                >
                  {p.linkLabel || "View Project"}
                </motion.a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPreview;
