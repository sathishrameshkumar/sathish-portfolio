import { motion } from "framer-motion";

function IntroLoader() {
  return (

    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="text-center relative z-10">

        {/* SMALL TEXT */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-cyan-400 tracking-[8px] uppercase text-sm mb-6"
        >

          Welcome To My Portfolio

        </motion.p>

        {/* MAIN TITLE */}
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.3,
          }}
          className="text-5xl sm:text-7xl font-extrabold text-white"
        >

          Hi, I'm{" "}

          <span className="text-cyan-400">
            Sathish
          </span>

        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="text-gray-400 mt-8 text-lg sm:text-2xl"
        >

          Full Stack Developer

        </motion.p>

        {/* ADVANCED LOADER */}
<div className="relative w-[280px] h-[10px] mx-auto mt-14">

  {/* BACKGROUND BAR */}
  <div className="absolute inset-0 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">

    {/* ANIMATED GLOW BAR */}
    <motion.div
      initial={{
        x: "-100%",
      }}
      animate={{
        x: "100%",
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm opacity-80"
    />

    {/* MAIN PROGRESS */}
    <motion.div
      initial={{
        width: 0,
      }}
      animate={{
        width: "100%",
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.8)]"
    />

  </div>

  {/* LOADING TEXT */}
  <motion.p
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: [0.3, 1, 0.3],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
    }}
    className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-cyan-400 text-sm tracking-[4px]"
  >

    LOADING

  </motion.p>

</div>

      </div>

    </motion.div>
  );
}

export default IntroLoader;