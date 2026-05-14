import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaLaravel,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiMysql,
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
      className="relative py-28 px-6 md:px-16 bg-slate-950 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            My Skills
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Technical Expertise
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Experienced in frontend and backend development
            with strong knowledge in modern web technologies.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-slate-900 border border-cyan-500/10 rounded-3xl p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-500"
            >

              {/* ICON */}
              <div className={`text-6xl mb-6 ${skill.color}`}>
                {skill.icon}
              </div>

              {/* NAME */}
              <h2 className="text-2xl font-bold mb-5 text-white">
                {skill.name}
              </h2>

              {/* BAR */}
              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5 }}
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />

              </div>

              {/* PERCENT */}
              <p className="mt-4 text-cyan-400 font-semibold">
                {skill.level}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;