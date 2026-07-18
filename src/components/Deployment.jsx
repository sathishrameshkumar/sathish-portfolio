import {
  FaGitAlt,
  FaGithub,
  FaServer,
  FaTerminal,
  FaWindows,
} from "react-icons/fa";

import {
  SiFilezilla,
  SiCpanel,
  SiComposer,
  SiPostman,
  SiVite,
  SiNpm,
} from "react-icons/si";

const tools = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
    name: "FileZilla",
    icon: <SiFilezilla />,
    color: "text-red-500",
  },
  {
    name: "FTP / SFTP",
    icon: <FaServer />,
    color: "text-cyan-400",
  },
  {
    name: "Laravel Artisan CLI",
    icon: <FaTerminal />,
    color: "text-green-500",
  },
  {
    name: "Manual Deployment",
    icon: <FaServer />,
    color: "text-yellow-400",
  },
  {
    name: "cPanel",
    icon: <SiCpanel />,
    color: "text-orange-400",
  },
  {
    name: "XAMPP",
    icon: <FaWindows />,
    color: "text-orange-500",
  },
  {
    name: "Composer",
    icon: <SiComposer />,
    color: "text-blue-400",
  },
  {
    name: "npm",
    icon: <SiNpm />,
    color: "text-red-500",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    color: "text-purple-400",
  },
  {
    name: "Postman",
    icon: <SiPostman />,
    color: "text-orange-500",
  },
];

function Deployment() {
  return (
    <section
      id="deployment"
      className="py-28 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-cyan-400 mb-3">
            Deployment
          </p>

          <h2 className="text-5xl font-bold text-white">
            Deployment & Tools
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto">
            Experienced in deploying Laravel applications,
            managing servers, version control, package management,
            and development tools.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

          {tools.map((tool, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl border border-cyan-500/10 p-8 hover:-translate-y-2 hover:border-cyan-400 transition duration-300"
            >

              <div className={`text-6xl mb-6 ${tool.color}`}>
                {tool.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {tool.name}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Deployment;