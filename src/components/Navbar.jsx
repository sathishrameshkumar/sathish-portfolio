import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-cyan-500/10">

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-white">Sat</span>
            <span className="text-cyan-400">hish</span>
          </h1>

          <p className="text-[11px] tracking-[4px] text-gray-400 uppercase">
            Full Stack Developer
          </p>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">

          <li>
            <a
              href="#about"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              About

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              Skills

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              Projects

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative hover:text-cyan-400 transition duration-300 group"
            >
              Contact

              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

        </ul>

        {/* RIGHT BUTTON */}
        <div className="hidden md:block">
          <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-cyan-500/20">
            Hire Me
          </button>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {
              menuOpen
                ? <HiX size={30} />
                : <HiMenuAlt3 size={30} />
            }
          </button>
        </div>

      </nav>

      {/* MOBILE MENU */}
      {
        menuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-cyan-500/10">

            <ul className="flex flex-col px-6 py-6 gap-6 text-lg">

              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>

              <li>
                <a href="#skills" onClick={() => setMenuOpen(false)}>
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>

              <button className="bg-cyan-500 py-3 rounded-xl font-semibold">
                Hire Me
              </button>

            </ul>

          </div>
        )
      }

    </header>
  );
}

export default Navbar;