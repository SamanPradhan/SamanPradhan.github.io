import React from "react";
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Code,
  Database,
  Globe,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "inQbator",
      desc: "Introducing a dynamic Mentorship Platform, where industry titans lend their expertise to nurture aspiring entrepreneurs. Our platform connects established leaders with eager mentees to cultivate the next generation of innovators, fostering growth and success in the business world.",
      image: "inqbator.png",
      stacks: "react,nodejs,express,mongodb,redis,tailwind",
      links: {
        view: "https://inqbator.in",
        code: "",
      },
      category: "Full-Stack",
      featured: true,
    },
    {
      title: "WellScribe",
      desc: "WellScribe is a revolutionary medtech platform that streamlines and enhances the patient care system. It features digital auto-prescription generation, seamless patient booking system management, and a host of other innovative tools designed to optimize healthcare delivery.",
      image: "wellscribe.png",
      stacks: "react,nodejs,express,mongodb,redis,tailwind",
      links: {
        view: "https://wellscribe.in",
        code: "",
      },
      category: "Full-Stack",
      featured: true,
    },
    {
      title: "Mirmedikaravan: Global Health Connect",
      desc: "Mirmedikaravan is a transformative platform that empowers patients worldwide to access top-tier healthcare services. From any corner of the globe, individuals can easily book appointments with leading doctors from prestigious hospitals. Mirmedikaravan is dedicated to ensuring that high-quality medical care is accessible to all, regardless of geographical boundaries. Experience a new era of healthcare with Mirmedikaravan.",
      image: "mirmedikaravan.png",
      stacks: "nextjs,nodejs,express,mongodb,redis,tailwind",
      links: {
        view: "https://mirmedikaravan.com/",
        code: "",
      },
      category: "Full-Stack",
      featured: true,
    },
    {
      title: "Portfolio Website - Saman Pradhan",
      desc: "This is my personal portfolio website, showcasing my skills, projects, and experiences as a full-stack developer. It features a modern design, responsive layout, and interactive elements to provide an engaging user experience.",
      image: "portfolio.png",
      stacks: "reactjs,nodejs,express,mongodb,redis,tailwind",
      links: {
        view: "https://samanpradhan.github.io/",
        code: "https://github.com/SamanPradhan/SamanPradhan.github.io#",
      },
      category: "Frontend",
      featured: true,
    },
    {
      title: "Fully functioning Ecommerce Website - StepUp-Field",
      desc: "This website is a fully functional shoeselling website with all features and a full admin side. Users can buy their favorite shoe according to their choices and get it delivered.",
      image: "StepUp-Field.png",
      stacks: "nodejs,express,redis,mongodb,html,css, ",
      links: {
        view: "https://step-up-field-frontend.vercel.app/",
        code: "https://github.com/SamanPradhan/stepup-field-main",
      },
      category: "Full-Stack",
      featured: false,
    },
    {
      title: "Employee Time management application - TimeTrackerX",
      desc: "This is a employee management application which is used for trackking employee data, their work schedules, projects are they working, the meeting they are doing, etc.",
      image: "TimeTrackerX.png",
      stacks: "js,html,css,nodejs,express,mongodb,",
      links: {
        view: "https://timetrackerx.netlify.app/",
        code: "https://github.com/SamanPradhan/TimeTrackerX",
      },
      category: "Backend",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return <Database size={16} />;
      case "Frontend":
        return <Globe size={16} />;
      case "Backend":
        return <Code size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Full-Stack":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30";
      case "Frontend":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30";
      case "Backend":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in
              full-stack development, modern web technologies, and creating
              user-centered solutions.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-[1.02] group"
              >
                <div className="relative overflow-hidden h-64 rounded-xl">
                  <img
                    src={`/Assets/images/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-1 ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.desc}
                  </p>

                  {/* <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-blue-400 mt-1 text-xs">●</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div> */}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stacks.split(",").map((tech, index) => (
                      <div key={index} className="project-tech-stack">
                        <img
                          className="mx-auto"
                          src={`https://skillicons.dev/icons?i=${tech}`}
                          alt={tech}
                          title={tech}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.links.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-white mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-semibold text-white">
                      {project.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stacks.split(",").map((tech, index) => (
                      <div key={index} className="project-tech-stack">
                        <img
                          className="mx-auto"
                          src={`https://skillicons.dev/icons?i=${tech}`}
                          alt={tech}
                          title={tech}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.links.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.links.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Explore More
              </h3>
              <p className="text-gray-300 mb-6">
                Check out my GitHub profile for more projects and contributions
                to open-source software.
              </p>
              <a
                href="https://github.com/samanpradhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
