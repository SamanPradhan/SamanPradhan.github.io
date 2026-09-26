import React from "react";
import { MapPin, Calendar, ExternalLink, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "EZ Works",
      website: "https://ez.works",
      logo: "/assets/images/ezworks-logo.jpeg",
      position: "Backend Developer",
      duration: "October 2024 – Present",
      location: "Gurugram, India",
      type: "Full-time",
      description:
        "Working as a Backend Developer at EZ Works, focusing on building scalable and efficient backend systems for various applications.",
      achievements: [
        "Optimized inter-service communication between 8+ microservices for TR42.ai with multi-level Celery task pipelines and event-driven messaging, cutting complexity and speeding up development.",
        "Redesigned the translation pipeline by refactoring the inference codebase, migrating GPU workloads off EC2 to newer cost-effective platform, and engineering a scalable central task management microservice, resulting in 40% lower infra cost, 50% higher capacity, and significantly faster model deployments.",
        "Developed a real-time chat microservice for creating and disabling chat groups across multiple complex trigger points in business logic, delivering 1000+ msg/sec via WebSocket and leveraging Redis Pub/Sub, FastAPI.",
        "Built a production-grade AI chatbot using LLMs & custom datasets, orchestrating multi-agent workflows in LangGraph and integrating with WhatsApp API for seamless, real-time user engagement. streamlined data pipelines, and custom memory modules.",
        "Built a centralized error handler using Pub/Sub with CloudWatch logging & monitoring, cutting debugging time by 25% and boosting incident response across the whole distributed system.",
        "Optimized sentence-splitting architecture and TM management, enhancing fuzzy matching and reducing lookup times across millions of entries, improving response time by 200% and improving user experience.",
        "Optimized Redis caching for file path of translated output file generation and sentence segmentation, reducing output generation speed by 20% and server costs by 25%.",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "Node.js",
        "JavaScript",
        "LLMs",
        "PostgreSQL",
        "Redis",
        "HLD",
        "LLD",
      ],
      current: true,
    },
    {
      company: "Sketchnote",
      website: "https://sketchnote.co",
      logo: "/assets/images/sketchnote-logo.jpg",
      position: "Software Developer",
      duration: "December 2023 – April 2024",
      location: "Remote",
      type: "Full-time Contractual",
      description:
        "Worked as a Software Developer at Sketchnote, focusing on building and maintaining backend applications and AI features using modern technologies.",
      achievements: [
        "Spearheaded the development and integration of advanced AI features—AI-driven task creation, AI analytics, and a PDF AI-Query bot—leveraging Langchain, Vector DBs, similarity searches, and ML algorithms, with clients praising the feature and earning accolades from upper management.",
        "Implemented enterprise-grade Single Sign-On using OKTA and EntraID, ensuring secure, seamless authentication and authorization for high-profile clients while reducing IT overhead and improving enterprise client experience.",
        "Developed time tracking, management, and approval workflows, empowering users to efficiently monitor project durations, optimize productivity, and streamline inter-project coordination boosting their workflows.",
        "Implemented performance optimizations for API endpoints handling form and file creation, achieving a 180% improvement in response times, thereby enhancing system scalability and overall user satisfaction",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "GenAI",
        "Langchain",
        "Git",
        "Linux",
      ],
      current: false,
    },
    {
      company: "inQbator",
      website: "https://inqbator.in",
      logo: "/assets/images/inqbator-logo.jpg",
      position: "Full Stack Developer",
      duration: "August 2023 – November 2024",
      location: "Remote",
      type: "Internship",
      description:
        "Worked as a Full Stack Developer at inQbator, focusing on building and maintaining web applications using modern technologies.",
      achievements: [
        "As the Founding Engineer, designed and developed a scalable backend architecture with full EC2 server setup, configuration, maintenance, and integrated PhonePe payment gateway for seamless financial transactions.",
        "Built the initial phase of Electra AI model, an innovative solution targeting college students.",
      ],
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "GenAI",
        "System Design",
      ],
      current: false,
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              My professional journey showcases a commitment to continuous
              learning, technical excellence, and delivering high-quality
              software solutions.
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                        {/* <Briefcase className="w-6 h-6 text-blue-400" /> */}
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          <img
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                        </a>
                      </div>
                      <div>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          <h3 className="text-2xl font-semibold text-white">
                            {exp.company}
                          </h3>
                        </a>
                        <div className="flex items-center gap-3 mt-1">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              exp.current
                                ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                            }`}
                          >
                            {exp.type}
                          </span>
                          {/* {exp.current && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                              Current
                            </span>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl text-blue-400 font-medium mb-4">
                      {exp.position}
                    </h4>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="lg:text-right lg:ml-8 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-300 leading-relaxed"
                      >
                        <span className="text-blue-400 mt-2 text-xs">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm actively seeking opportunities to contribute to innovative
                projects and collaborate with talented teams to build
                exceptional software solutions.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Let's Connect
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
