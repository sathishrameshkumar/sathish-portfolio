import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import HRMFirst from "../assets/projects/HRM/First.png";
import HRMFirst1 from "../assets/projects/HRM/First1.png";
import LicenceFirst from "../assets/projects/Licence/First.png";

const projects = [
  {
    images: [HRMFirst, HRMFirst1],

    title: "HR Payroll Management System",

    description:
    "Developed a comprehensive HR Payroll Management System with modules for employee management, payroll processing, attendance and timesheet tracking, leave management, asset allocation, complaint handling, and shift management. Implemented payroll generation, deductions, salary tracking, approval workflows, document management, and reporting features using Laravel, PHP, SQL Server, AJAX, REST API, and jQuery. Designed responsive dashboards and optimized database operations for efficient HR and payroll administration.",
    technologies: ["Laravel", "PHP", "SQL Server", "Bootstrap", "Ajax", "rest api", "jQuery"],
  },

  {
    images: [project2],

    title: "Invoice PDF Generation System",

    description:
      "Created dynamic invoice generation with PDF export, WhatsApp integration, VAT calculations, digital signatures and invoice tracking functionalities.",

    technologies: ["Laravel", "DomPDF", "JavaScript", "MySQL"],
  },

  {
    images: [project3,project3],

    title: "Construction ERP Application",

    description:
      "Built construction management software including customer management, building tracking, quotation management and project monitoring modules.",

    technologies: ["Laravel", "ReactJS", "MySQL"],
  },

  {
    images: [project4],

    title: "Grammar Checker AI Project",

    description:
      "Developed AI grammar correction system using Laravel, ReactJS and HuggingFace API integration for grammar validation and sentence correction.",

    technologies: ["ReactJS", "Laravel", "API"],
  },

  {
    images: [project5],

    title: "Portfolio Website",

    description:
      "Designed and developed modern responsive developer portfolio with animations, glassmorphism UI and interactive frontend effects.",

    technologies: ["ReactJS", "Tailwind CSS", "Framer Motion"],
  },

  {
    images: [LicenceFirst],

    title: "License Hierarchy Management",

     description:
    "Developed a License Management System with modules for dashboard monitoring, branch management, license creation, license mapping, mapping list management, license registration, and license certificate generation. Implemented dynamic parent-child hierarchy structures, responsive UI design, AJAX-based data loading, and efficient license tracking functionalities using Laravel, jQuery, and AJAX.",

    technologies: ["Laravel", "jQuery", "AJAX"],
  },
];

export default projects;