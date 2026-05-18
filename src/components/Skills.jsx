import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
  SiExpress,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "text-orange-500",
    level: "95%",
  },

  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
    level: "90%",
  },

  {
    name: "Bootstrap 5",
    icon: <FaBootstrap />,
    color: "text-purple-500",
    level: "90%",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
    level: "92%",
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
    level: "88%",
  },

  {
    name: "ReactJS",
    icon: <FaReact />,
    color: "text-cyan-300",
    level: "85%",
  },

  {
    name: "NodeJS",
    icon: <FaNodeJs />,
    color: "text-green-500",
    level: "80%",
  },

  {
    name: "ExpressJS",
    icon: <SiExpress />,
    color: "text-gray-300",
    level: "78%",
  },

  {
    name: "AJAX",
    icon: <FaDatabase />,
    color: "text-blue-400",
    level: "90%",
  },

  {
    name: "Laravel",
    icon: <FaLaravel />,
    color: "text-red-500",
    level: "95%",
  },

  {
    name: "PHP",
    icon: <FaPhp />,
    color: "text-indigo-400",
    level: "95%",
  },

  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-500",
    level: "90%",
  },

  {
    name: "SQL Server",
    icon: <DiMsqlServer />,
    color: "text-red-400",
    level: "85%",
  },

  {
    name: "React Native",
    icon: <FaReact />,
    color: "text-cyan-300",
    level: "70%",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-5 sm:px-8 lg:px-16 bg-slate-950 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4 text-sm sm:text-base">
            My Skills
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Technical Expertise
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-8">
            Experienced in frontend and backend development
            with strong knowledge in modern web technologies.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-slate-900/80 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition duration-500"
            >

              {/* CARD GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

              {/* ICON */}
              <div className={`relative text-5xl sm:text-6xl mb-6 ${skill.color}`}>
                {skill.icon}
              </div>

              {/* NAME */}
              <h2 className="relative text-2xl font-bold text-white mb-6 leading-snug">
                {skill.name}
              </h2>

              {/* PROGRESS BAR */}
              <div className="relative w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

              </div>

              {/* PERCENT */}
              <div className="relative flex justify-between items-center mt-4">

                <p className="text-cyan-400 font-semibold text-sm sm:text-base">
                  Proficiency
                </p>

                <p className="text-white font-bold text-sm sm:text-base">
                  {skill.level}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;