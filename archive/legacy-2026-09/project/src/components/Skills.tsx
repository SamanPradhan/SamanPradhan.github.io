import React from "react";
import {
  Code,
  Database,
  Cloud,
  Settings,
  Smartphone,
  Globe,
  Server,
  Cpu,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8 text-green-400" />,
      skills: [
        {
          name: "Node.js",
          level: 88,
          description: "Server-side JavaScript runtime",
        },
        {
          name: "Python",
          level: 85,
          description: "Web development and scripting",
        },
        {
          name: "Express.js",
          level: 85,
          description: "Web application framework",
        },
        {
          name: "RESTful APIs",
          level: 90,
          description: "API design and implementation",
        },
        {
          name: "Typescript",
          level: 60,
          description: "Typed superset of JavaScript",
        },
        {
          name: "C++",
          level: 55,
          description: "Systems programming and algorithms",
        },
      ],
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "MongoDB", level: 85, description: "NoSQL document database" },
        {
          name: "PostgreSQL",
          level: 80,
          description: "Relational database management",
        },
        {
          name: "MySQL",
          level: 78,
          description: "SQL database design and optimization",
        },
        {
          name: "Firebase",
          level: 75,
          description: "Real-time database and authentication",
        },
        {
          name: "Redis",
          level: 70,
          description: "In-memory data structure store",
        },
        {
          name: "SQL",
          level: 85,
          description: "Database queries and optimization",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      skills: [
        {
          name: "Git",
          level: 90,
          description: "Version control and collaboration",
        },
        {
          name: "Linux",
          level: 80,
          description: "Command line and server management",
        },
        {
          name: "Docker",
          level: 75,
          description: "Containerization and deployment",
        },
        {
          name: "Jest",
          level: 70,
          description: "JavaScript testing framework",
        },
        {
          name: "Postman",
          level: 85,
          description: "API testing and documentation",
        },
        {
          name: "Webpack",
          level: 50,
          description: "Module bundling and optimization",
        },
      ],
    },
    {
      title: "Concepts & Methodologies",
      icon: <Cpu className="w-8 h-8 text-pink-400" />,
      skills: [
        {
          name: "Data Structures",
          level: 90,
          description: "Arrays, trees, graphs, hash tables",
        },
        {
          name: "Algorithms",
          level: 88,
          description: "Sorting, searching, dynamic programming",
        },
        {
          name: "OOP",
          level: 85,
          description: "Object-oriented programming principles",
        },
        {
          name: "Agile/Scrum",
          level: 80,
          description: "Agile development methodologies",
        },
        {
          name: "Testing",
          level: 82,
          description: "Unit, integration, and end-to-end testing",
        },
        {
          name: "Design Patterns",
          level: 78,
          description: "Software design best practices",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      skills: [
        {
          name: "React",
          level: 70,
          description: "Component-based UI development",
        },
        {
          name: "JavaScript",
          level: 95,
          description: "ES6+, DOM manipulation, async programming",
        },
        {
          name: "Streamlit",
          level: 75,
          description: "Rapid web app development framework",
        },
        {
          name: "HTML5",
          level: 95,
          description: "Semantic markup and accessibility",
        },
        {
          name: "CSS3",
          level: 70,
          description: "Flexbox, Grid, animations, responsive design",
        },
        {
          name: "Tailwind CSS",
          level: 88,
          description: "Utility-first CSS framework",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-cyan-400" />,
      skills: [
        { name: "AWS", level: 70, description: "Cloud computing services" },
        {
          name: "Vercel",
          level: 85,
          description: "Frontend deployment platform",
        },
        {
          name: "CircleCI",
          level: 80,
          description: "Continuous integration and deployment",
        },
        {
          name: "Heroku",
          level: 75,
          description: "Application deployment platform",
        },
        {
          name: "CI/CD",
          level: 70,
          description: "Continuous integration and deployment",
        },
        {
          name: "GitHub Actions",
          level: 75,
          description: "Automated workflows",
        },
      ],
    },
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  };

  const getSkillLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across the full
              stack, from frontend frameworks to backend systems and everything
              in between.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-gray-300 font-medium text-lg">
                            {skill.name}
                          </span>
                          <p className="text-gray-500 text-sm">
                            {skill.description}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-gray-400 text-sm font-medium">
                            {getSkillLabel(skill.level)}
                          </span>
                          <div className="text-gray-500 text-xs">
                            {skill.level}%
                          </div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`bg-gradient-to-r ${getSkillColor(
                            skill.level
                          )} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-6">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-300 mb-8 text-lg max-w-4xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current
                with the latest trends, tools, and best practices in software
                development. I believe in learning by doing and constantly
                challenging myself with new projects and technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  Currently Learning: AWS Cloud Services
                </span>
                <span className="px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  Exploring: Generative and Agentic AI with Python
                </span>
                <span className="px-6 py-3 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                  Interested: Mobile App Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
