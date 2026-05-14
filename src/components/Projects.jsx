// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// import {
//   FaArrowLeft,
//   FaArrowRight,
// } from "react-icons/fa";

// import projects from "../data/projects";

// function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative py-28 px-6 md:px-16 bg-slate-900 overflow-hidden"
//     >

//       {/* BACKGROUND GLOW */}
//       <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

//       <div className="max-w-7xl mx-auto">

//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-center mb-20"
//         >

//           <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
//             My Projects
//           </p>

//           <h1 className="text-5xl md:text-6xl font-extrabold text-white">
//             Featured Projects
//           </h1>

//           <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
//             Here are some professional applications and systems
//             developed using Laravel, ReactJS, PHP and modern web technologies.
//           </p>

//         </motion.div>

//         {/* PROJECT GRID */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

//           {projects.map((project, index) => (
//             <ProjectCard
//               key={index}
//               project={project}
//               index={index}
//             />
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project, index }) {

//   const [currentImage, setCurrentImage] = useState(0);

//   const [isHovered, setIsHovered] = useState(false);

//   // AUTO SLIDE
//   useEffect(() => {

//     if (isHovered) return;

//     if (project.images.length <= 1) return;

//     const interval = setInterval(() => {

//       setCurrentImage((prev) =>
//         (prev + 1) % project.images.length
//       );

//     }, 3000);

//     return () => clearInterval(interval);

//   }, [isHovered, project.images.length]);

//   // NEXT IMAGE
//   const nextImage = () => {

//     setCurrentImage((prev) =>
//       (prev + 1) % project.images.length
//     );

//   };

//   // PREVIOUS IMAGE
//   const prevImage = () => {

//     setCurrentImage((prev) =>
//       prev === 0
//         ? project.images.length - 1
//         : prev - 1
//     );

//   };

//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 50,
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.1,
//       }}
//       whileHover={{
//         y: -12,
//       }}
//       className="group bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition duration-500"
//     >

//       {/* IMAGE SECTION */}
//       <div
//         className="relative overflow-hidden"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >

//         <motion.img
//           key={currentImage}
//           src={project.images[currentImage]}
//           alt={project.title}
//           initial={{ opacity: 0.4, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           className="w-full h-64 object-cover"
//         />

//         {/* PREVIOUS BUTTON */}
//         {
//           project.images.length > 1 && (
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-cyan-500 transition duration-300"
//             >
//               <FaArrowLeft />
//             </button>
//           )
//         }

//         {/* NEXT BUTTON */}
//         {
//           project.images.length > 1 && (
//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-cyan-500 transition duration-300"
//             >
//               <FaArrowRight />
//             </button>
//           )
//         }

//         {/* DOTS */}
//         {
//           project.images.length > 1 && (
//             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">

//               {project.images.map((_, i) => (

//                 <button
//                   key={i}
//                   onClick={() => setCurrentImage(i)}
//                   className={`w-3 h-3 rounded-full transition duration-300 ${
//                     currentImage === i
//                       ? "bg-cyan-400 scale-125"
//                       : "bg-white/50"
//                   }`}
//                 />

//               ))}

//             </div>
//           )
//         }

//       </div>

//       {/* CONTENT */}
//       <div className="p-8">

//         <h2 className="text-2xl font-bold text-white mb-5">
//           {project.title}
//         </h2>

//         <p className="text-gray-400 leading-8 mb-6">
//           {project.description}
//         </p>

//         {/* TECHNOLOGIES */}
//         <div className="flex flex-wrap gap-3">

//           {project.technologies.map((tech, i) => (

//             <span
//               key={i}
//               className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
//             >
//               {tech}
//             </span>

//           ))}

//         </div>

//         {/* BUTTONS */}
//         <div className="flex gap-4 mt-8">

//           <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold transition duration-300">
//             Live Demo
//           </button>

//           <button className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-5 py-3 rounded-xl font-semibold transition duration-300">
//             Source Code
//           </button>

//         </div>

//       </div>

//     </motion.div>
//   );
// }

// export default Projects;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-16 bg-slate-900 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            My Projects
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white">
            Featured Projects
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Professional applications developed using
            Laravel, ReactJS, PHP and modern technologies.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {

  const [currentImage, setCurrentImage] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  const [showMore, setShowMore] = useState(false);

  // AUTO SLIDE
  useEffect(() => {

    if (isHovered) return;

    if (project.images.length <= 1) return;

    const interval = setInterval(() => {

      setCurrentImage((prev) =>
        (prev + 1) % project.images.length
      );

    }, 5000);

    return () => clearInterval(interval);

  }, [isHovered, project.images.length]);

  // NEXT IMAGE
  const nextImage = () => {

    setCurrentImage((prev) =>
      (prev + 1) % project.images.length
    );

  };

  // PREVIOUS IMAGE
  const prevImage = () => {

    setCurrentImage((prev) =>
      prev === 0
        ? project.images.length - 1
        : prev - 1
    );

  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className="group bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition duration-500"
    >

      {/* IMAGE SLIDER */}
      <div
        className="relative h-[300px] flex items-center justify-center overflow-hidden bg-slate-950"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* BACK IMAGE 3 */}
        {
          project.images.length > 2 && (
            <img
              src={
                project.images[
                  (currentImage + 2) % project.images.length
                ]
              }
              className="absolute w-[72%] h-[220px] object-cover rounded-2xl opacity-30 scale-90 translate-x-20 transition duration-500"
            />
          )
        }

        {/* BACK IMAGE 2 */}
        {
          project.images.length > 1 && (
            <img
              src={
                project.images[
                  (currentImage + 1) % project.images.length
                ]
              }
              className="absolute w-[78%] h-[240px] object-cover rounded-2xl opacity-50 scale-95 translate-x-10 transition duration-500"
            />
          )
        }

        {/* MAIN IMAGE */}
        <motion.img
          key={currentImage}
          src={project.images[currentImage]}
          alt={project.title}
          initial={{
            scale: 0.9,
            opacity: 0,
            x: 100,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative z-10 w-[85%] h-[250px] object-cover rounded-2xl shadow-2xl"
        />

        {/* LEFT BUTTON */}
        {
          project.images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg text-white flex items-center justify-center hover:bg-cyan-500 transition duration-300"
            >
              <FaArrowLeft />
            </button>
          )
        }

        {/* RIGHT BUTTON */}
        {
          project.images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur-lg text-white flex items-center justify-center hover:bg-cyan-500 transition duration-300"
            >
              <FaArrowRight />
            </button>
          )
        }

        {/* DOTS */}
        {
          project.images.length > 1 && (
            <div className="absolute bottom-5 z-20 flex gap-2">

              {project.images.map((_, i) => (

                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    currentImage === i
                      ? "bg-cyan-400 scale-125"
                      : "bg-white/40"
                  }`}
                />

              ))}

            </div>
          )
        }

      </div>

      {/* CONTENT */}
      <div className="p-8">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-white mb-5">
          {project.title}
        </h2>

        {/* DESCRIPTION */}
        <motion.div layout>

          <p className="text-gray-400 leading-8 mb-4">

            {
              showMore
                ? project.description
                : `${project.description.substring(0, 150)}...`
            }

          </p>

          {
            project.description.length > 150 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-cyan-400 hover:text-cyan-300 font-semibold transition duration-300"
              >
                {
                  showMore
                    ? "Read Less ↑"
                    : "Read More ↓"
                }
              </button>
            )
          }

        </motion.div>

        {/* TECHNOLOGIES */}
        <div className="flex flex-wrap gap-3 mt-6">

          {project.technologies.map((tech, i) => (

            <span
              key={i}
              className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-sm text-cyan-300"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">

          <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl font-semibold transition duration-300">
            Live Demo
          </button>

          <button className="border border-cyan-400 hover:bg-cyan-400 hover:text-black px-5 py-3 rounded-xl font-semibold transition duration-300">
            Source Code
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default Projects;