// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import profileImg from "../assets/images/sathishimg.png";
// import Tilt from "react-parallax-tilt";

// function Hero() {
//   return (
//     // <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-20">
//     <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      
//       <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           {/* <p className="text-cyan-400 text-lg mb-4 tracking-widest uppercase">
//             Welcome To My Portfolio
//           </p> */}

//           <div>
//             <p className="text-cyan-400 text-lg tracking-[5px] uppercase mb-5">
//               Welcome To My Portfolio
//             </p>

//             <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
//               Hi, I'm
//             </h1>

//             <div className="mt-4 h-[90px]">
//               <TypeAnimation
//                 sequence={[
//                   "Sathish",
//                   2000,
//                   "Laravel Developer",
//                   2000,
//                   "ReactJS Developer",
//                   2000,
//                   "Php Developer",
//                   2000,
//                   "Full Stack Developer",
//                   2000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//                 className="text-cyan-400 text-4xl md:text-6xl font-bold"
//               />
//             </div>
//           </div>

//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-6">
//             PHP Laravel Full Stack Developer
//           </h2>

//           <p className="text-gray-400 text-lg leading-8 mt-8 max-w-2xl">
//             I build scalable web applications using Laravel,
//             ReactJS, JavaScript, MySQL and modern frontend
//             technologies. Passionate about creating professional,
//             responsive and high-performance applications.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-wrap gap-5 mt-10">
            
//             <button className="bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-cyan-500/30">
//               Download Resume
//             </button>

//             <button className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold">
//               Contact Me
//             </button>

//           </div>

//           {/* SOCIAL ICONS */}
//           <div className="flex gap-6 mt-10 text-3xl">
//             <a href="#" className="hover:text-cyan-400 transition">
//               <i className="ri-github-fill"></i>
//             </a>

//             <a href="#" className="hover:text-cyan-400 transition">
//               <i className="ri-linkedin-box-fill"></i>
//             </a>

//             <a href="#" className="hover:text-cyan-400 transition">
//               <i className="ri-instagram-line"></i>
//             </a>
//           </div>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//             <motion.div
//               animate={{
//                 y: [0, -12, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 ease: "easeInOut",
//               }}
//               className="flex justify-center"
//             >
//           <div className="relative">

//             {/* GLOW EFFECT */}
//             <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

//             {/* PROFILE IMAGE */}
//               <Tilt
//                 tiltMaxAngleX={10}
//                 tiltMaxAngleY={10}
//                 perspective={1000}
//                 transitionSpeed={1500}
//                 scale={1.02}
//               >
//                 <img
//                   src={profileImg}
//                   alt="Sathish"
//                   className="relative w-[320px] md:w-[420px] rounded-3xl border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 hover:scale-105 transition duration-500"
//                 />
//               </Tilt>

//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default Hero;

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

import profileImg from "../assets/images/sathishimg.png";

function Hero() {
  return (

    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden flex items-center px-6 sm:px-10 lg:px-20 py-24">

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >

          {/* SMALL TITLE */}
          <p className="text-cyan-400 text-sm sm:text-base tracking-[6px] uppercase mb-6">
            Welcome To My Portfolio
          </p>

          {/* MAIN TITLE */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
            Hi, I'm
          </h1>

          {/* TYPING */}
          <div className="mt-5 min-h-[80px]">

            <TypeAnimation
              sequence={[
                "Sathish",
                2000,
                "Laravel Developer",
                2000,
                "ReactJS Developer",
                2000,
                "PHP Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400 text-3xl sm:text-5xl lg:text-6xl font-bold"
            />

          </div>

          {/* SUBTITLE */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-8 leading-relaxed">
            PHP Laravel Full Stack Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-base sm:text-lg leading-8 mt-8 max-w-2xl">
            I build scalable web applications using Laravel,
            ReactJS, JavaScript, MySQL and modern frontend
            technologies. Passionate about creating
            professional, responsive and high-performance
            applications.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-cyan-500/30">

              Download Resume

            </button>

            <button className="border border-cyan-400 hover:bg-cyan-400 hover:text-black transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold">

              Contact Me

            </button>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition duration-300"
            >
              <i className="ri-instagram-line"></i>
            </a>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            {/* IMAGE */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1500}
              scale={1.02}
            >

              <img
                src={profileImg}
                alt="Sathish"
                className="relative w-[280px] sm:w-[340px] lg:w-[450px] rounded-3xl border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40"
              />

            </Tilt>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;