import { motion } from "framer-motion";
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-16 bg-slate-900 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          // whileInView={{ opacity: 1, x: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          initial={{
            opacity: 0,
            x: -80,
            filter: "blur(10px)",
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            About Me
          </p>

          {/* <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8"> */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Passionate Full Stack Developer
          </h1>

          <p className="text-gray-400 leading-9 text-lg">
            Passionate Full Stack Developer with 2 years of
            experience in PHP, Laravel, and ReactJS development.

            Skilled in building scalable web applications,
            solving complex technical problems, and creating
            modern responsive user interfaces.

            Fast learner and problem solver with strong focus on
            performance, clean code architecture, and user experience.
          </p>

          {/* EXPERIENCE CARDS */}
          <div className="grid grid-cols-2 gap-6 mt-12">

            <div className="bg-slate-800 border border-cyan-500/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 shadow-lg hover:shadow-cyan-500/20">
              <h1 className="text-4xl font-bold text-cyan-400">
                2+
              </h1>

              <p className="text-gray-400 mt-2">
                Years Experience
              </p>
            </div>

            <div className="bg-slate-800 border border-cyan-500/10 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 shadow-lg hover:shadow-cyan-500/20">
              <h1 className="text-4xl font-bold text-cyan-400">
                20+
              </h1>

              <p className="text-gray-400 mt-2">
                Projects Completed
              </p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-2 gap-6">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl p-8 border border-cyan-500/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500"
            >
              <FaLaravel className="text-5xl text-red-500 mb-6" />

              <h2 className="text-2xl font-bold mb-4">
                Laravel Development
              </h2>

              <p className="text-gray-400 leading-7">
                Building scalable backend systems, APIs,
                authentication, payroll, ERP and business applications.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl p-8 border border-cyan-500/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500 mt-10"
            >
              <FaReact className="text-5xl text-cyan-400 mb-6" />

              <h2 className="text-2xl font-bold mb-4">
                ReactJS Frontend
              </h2>

              <p className="text-gray-400 leading-7">
                Creating responsive modern frontend UI
                with animations, interactive components and smooth UX.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl p-8 border border-cyan-500/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500"
            >
              <FaPhp className="text-5xl text-indigo-400 mb-6" />

              <h2 className="text-2xl font-bold mb-4">
                PHP Development
              </h2>

              <p className="text-gray-400 leading-7">
                Strong knowledge in core PHP development,
                dynamic modules and enterprise application architecture.
              </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-3xl p-8 border border-cyan-500/10 shadow-lg hover:shadow-cyan-500/20 transition duration-500 mt-10"
            >
              <FaDatabase className="text-5xl text-green-400 mb-6" />

              <h2 className="text-2xl font-bold mb-4">
                Database Management
              </h2>

              <p className="text-gray-400 leading-7">
                Experienced in MySQL & SQLserver database design,
                optimization and high-performance query handling.
              </p>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;