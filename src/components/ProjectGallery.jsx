import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img1 from "../assets/gallery/img1.png";
import img2 from "../assets/gallery/img2.png";
import img3 from "../assets/gallery/img3.png";
import img4 from "../assets/gallery/img4.png";
import img5 from "../assets/gallery/img5.png";
import img6 from "../assets/gallery/img6.png";

gsap.registerPlugin(ScrollTrigger);

function ProjectGallery() {
  const galleryRef = useRef();

  useGSAP(() => {
    // matchMedia re-evaluates on resize/rotate instead of only checking once on mount.
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(
        ".gallery-card:not(.center-card)",
        {
          opacity: 0,
          scale: 0.3,
          duration: 2,
          stagger: 0.08,
        },
        0
      );

      tl.to(
        ".center-card",
        {
          scale: window.innerWidth < 1024 ? 1.5 : 2.2,
          duration: 3,
          ease: "power3.out",
        },
        0
      );

      tl.to(
        ".project-details",
        {
          opacity: 1,
          y: 0,
          duration: 2,
        },
        1.2
      );

      // Cleanup returned from a matchMedia handler runs automatically
      // when the media query stops matching (e.g. resizing to mobile).
      return () => tl.kill();
    });

    // Nothing runs below 768px — the gallery stays a plain, static grid.

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={galleryRef}
      id="gallery"
      className="
      relative
      w-full
      min-h-screen
      lg:h-screen
      bg-slate-950
      overflow-hidden
      py-16
      sm:py-20
      lg:py-0
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        h-full
        flex
        flex-col
        justify-center
        relative
        px-4
        sm:px-6
        "
      >
        {/* TITLE */}
        <h2
          className="
          text-center
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          text-white
          mb-6
          sm:mb-8
          lg:mb-12
          "
        >
          Project Gallery
        </h2>

        {/* GRID */}
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          gap-3
          sm:gap-4
          md:gap-6
          "
        >
          {[img1, img2, img3, img4, img5, img6].map((img, index) => (
            <div
              key={index}
              className={`gallery-card relative overflow-hidden rounded-2xl sm:rounded-3xl ${
                index === 4 ? "center-card" : ""
              }`}
              style={{
                transformOrigin: "center center",
                willChange: "transform",
              }}
            >
              <img
                src={img}
                alt=""
                className={`
                block
                w-full
                h-full
                aspect-[4/5]
                sm:aspect-square
                md:aspect-[4/3]
                object-cover
                shadow-xl
                ${
                  index === 4
                    ? "border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                    : ""
                }
                `}
              />
            </div>
          ))}
        </div>

        {/* DESKTOP / TABLET PROJECT DETAILS (animated overlay, md and up only) */}
        <div
          className="
          hidden
          md:block
          project-details
          absolute
          left-1/2
          top-[72%]
          lg:top-1/2
          -translate-x-1/2
          -translate-y-1/2
          opacity-0
          translate-y-10
          z-50
          w-[92%]
          max-w-3xl
          pointer-events-none
          md:pointer-events-auto
          "
        >
          <div
            className="
            bg-slate-950/85
            backdrop-blur-xl
            border
            border-cyan-500/20
            rounded-3xl
            p-6
            md:p-8
            lg:p-10
            shadow-2xl
            "
          >
            <h2
              className="
              text-xl
              md:text-3xl
              lg:text-5xl
              font-bold
              text-white
              text-center
              "
            >
              HR Payroll Management System
            </h2>

            <p
              className="
              text-gray-300
              mt-4
              md:mt-5
              text-sm
              md:text-base
              text-center
              leading-6
              md:leading-7
              "
            >
              Complete HR & Payroll solution including Employee Management,
              Attendance Tracking, Leave Management, Shift Scheduling, Asset
              Management, Complaint Handling and Payroll Processing.
            </p>

            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-5 md:mt-6">
              {["Laravel", "PHP", "SQL Server", "Bootstrap"].map((tech) => (
                <span
                  key={tech}
                  className="
                  px-3
                  md:px-4
                  py-1.5
                  md:py-2
                  rounded-full
                  bg-cyan-500/20
                  border
                  border-cyan-400
                  text-cyan-300
                  text-xs
                  md:text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-8">
              <button
                className="
                px-6
                md:px-8
                py-2.5
                md:py-3
                bg-cyan-500
                hover:bg-cyan-600
                rounded-xl
                font-semibold
                text-white
                text-sm
                md:text-base
                transition
                "
              >
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE CARD (plain, always visible — no JS/animation dependency) */}
        <div
          className="
          md:hidden
          mt-6
          sm:mt-8
          bg-slate-900
          border
          border-cyan-500/20
          rounded-2xl
          sm:rounded-3xl
          p-4
          sm:p-5
          "
        >
          <h3 className="text-lg sm:text-xl font-bold text-white">
            HR Payroll Management System
          </h3>

          <p className="text-gray-400 mt-3 text-sm leading-6">
            Complete HR & Payroll solution including Employee Management,
            Attendance Tracking, Leave Management, Asset Management,
            Complaint Handling and Payroll Processing.
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {["Laravel", "PHP", "SQL Server", "Bootstrap"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-cyan-500 rounded-full text-xs sm:text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            className="
            mt-5
            w-full
            py-3
            bg-cyan-500
            hover:bg-cyan-600
            rounded-xl
            font-semibold
            text-white
            transition
            "
          >
            View Project
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectGallery;