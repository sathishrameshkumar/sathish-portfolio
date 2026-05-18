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
    technologies: ["Laravel", "PHP", "SQL Server", "Bootstrap","JavaScript", "Ajax", "rest api", "jQuery","DomPDF","php5Grid"],
  },

  {
  images: [project2],

  title: "Vehicle Management System",

  description:
    "Developed a comprehensive Vehicle Management System for managing vehicle operations, assignments, maintenance tracking, and usage monitoring. Implemented modules for vehicle registration, vehicle type and model management, condition tracking, active vehicle assignments, maintenance scheduling, and vehicle usage logs. The system helps streamline fleet management operations with organized records, responsive dashboards, and efficient data handling using Laravel, JavaScript, MySQL,SQLServer, and DomPDF.",

  technologies: ["Laravel","PHP","JavaScript","Ajax",, "jQuery","MySQL","SQL Server","Bootstrap","DomPDF","AJAX","php5Grid"]
},

 {
  images: [project3, project3],

  title: "Gas Customer Management System",

  description:
    "Developed a complete Gas Customer Management System for a Dubai-based gas company to manage customer billing, meter readings, invoice processing, emergency services, prepaid/postpaid customer handling, building management, payment tracking, and operational reports. Implemented modules for invoice approval, customer onboarding, emergency complaint handling, service charge management, material tracking, and payment reporting using Laravel, JavaScript, and SQLServer.",

  technologies: ["Laravel","PHP","JavaScript","Ajax",, "jQuery","MySQL","SQL Server","Bootstrap","DomPDF","AJAX","php5Grid","WhatsappAPI","SmsAPI","EmailAPI"]
},

 {
    images: [LicenceFirst],

    title: "License Hierarchy Management",

     description:
    "Developed a License Management System with modules for dashboard monitoring, branch management, license creation, license mapping, mapping list management, license registration, and license certificate generation. Implemented dynamic parent-child hierarchy structures, responsive UI design, AJAX-based data loading, and efficient license tracking functionalities using Laravel, jQuery, and AJAX.",

    technologies: ["Laravel", "jQuery", "AJAX","SQL Server","PHP"],
  },

  {
  images: [project4],

  title: "Gas Filling Management System",

  description:
    "Developed a Gas Filling Management System for handling customer operations, delivery notes, purchase management, invoice generation, receipts, vehicle tracking, and reporting processes. Implemented modules for customer price management, vendor handling, PDF invoice generation, cheque approvals, driver reports, tally export, gas quantity analysis, and outstanding tracking. Built responsive dashboards and automated operational workflows using Laravel, JavaScript, MySQL, AJAX, and REST API.",

  technologies: []
},

  {
  images: [project5],

  title: "Meta WhatsApp API Platform",

  description:
    "Developed a complete Meta WhatsApp API platform for business communication and customer engagement. The system supports WhatsApp template creation, approval workflow, real-time messaging, media templates (Text, Image, Video, PDF Documents), dynamic variables, template synchronization with Meta Cloud API, message automation, delivery tracking, and customer chat management. Implemented advanced features like template editing, status filtering, media handling, and interactive button support using modern frontend technologies.",

  technologies: ["ReactJS","Tailwind CSS","Framer Motion","Laravel","SQLServe","PHP","Meta Cloud API","WhatsApp Business API"],
},

 
];

export default projects;