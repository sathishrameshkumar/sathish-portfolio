import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-5 sm:px-8 lg:px-16 bg-slate-950 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4 text-sm sm:text-base">
            Contact Me
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Let's Work Together
          </h1>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-8 px-2">
            Feel free to contact me for web development,
            freelance projects, collaborations or professional opportunities.
          </p>

        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >

            {/* EMAIL CARD */}
            <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-500">

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Email
                  </h2>

                  <a
                    href="mailto:sathishrameshkumar2001@gmail.com"
                    className="text-gray-400 mt-2 block hover:text-cyan-400 transition duration-300 break-all"
                  >
                    sathishrameshkumar2001@gmail.com
                  </a>
                </div>

              </div>

            </div>

            {/* PHONE CARD */}
            <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-500">

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Phone
                  </h2>

                  <p className="text-gray-400 mt-2">
                    +91 86818 21300
                  </p>
                </div>

              </div>

            </div>

            {/* WHATSAPP CARD */}
            <div className="bg-white/5 backdrop-blur-lg border border-green-500/10 rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-green-500/20 transition duration-500">

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 text-2xl">
                  <FaWhatsapp />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    WhatsApp
                  </h2>

                  <a
                    href="https://wa.me/918681821300?text=Hello%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 mt-2 block hover:text-green-400 transition duration-300"
                  >
                    Chat on WhatsApp
                  </a>
                </div>

              </div>

            </div>

            {/* LOCATION CARD */}
            <div className="bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-cyan-500/20 transition duration-500">

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    Location
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

              </div>

            </div>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-4">

              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-cyan-500/10 flex items-center justify-center text-xl sm:text-2xl text-white hover:bg-cyan-500 hover:text-black transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-cyan-500/10 flex items-center justify-center text-xl sm:text-2xl text-white hover:bg-cyan-500 hover:text-black transition duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-cyan-500/10 flex items-center justify-center text-xl sm:text-2xl text-white hover:bg-cyan-500 hover:text-black transition duration-300"
              >
                <FaInstagram />
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/5 backdrop-blur-lg border border-cyan-500/10 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg"
          >

            <form className="space-y-8">

              {/* NAME */}
              <div>
                <label className="text-white block mb-3 text-base sm:text-lg font-medium">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-slate-900 border border-cyan-500/10 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white outline-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-white block mb-3 text-base sm:text-lg font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-slate-900 border border-cyan-500/10 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white outline-none focus:border-cyan-400 transition duration-300"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-white block mb-3 text-base sm:text-lg font-medium">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-slate-900 border border-cyan-500/10 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white outline-none focus:border-cyan-400 transition duration-300 resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;