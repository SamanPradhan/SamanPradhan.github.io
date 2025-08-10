import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Vellore Institute of Technology",
      degree: "Master of Computer Applications",
      graduation: "Expected - 2027",
      location: "Vellore, TN",
      gpa: "Pursuing",
      coursework: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Computer Architecture",
        "Database Systems",
        "Computer Networks",
        "Operating Systems",
        "Machine Learning Fundamentals",
        "Computer Graphics",
        "Discrete Mathematics",
      ],
    },
    {
      institution: "University of Calcutta",
      degree: "Bachelor of Science in Mathematics, Computer Science",
      graduation: "August, 2024",
      location: "Kolkata, WB",
      gpa: "8.34/10.0",
      coursework: [
        "Advanced Algebra",
        "Calculus and Differential Equations",
        "Probability and Statistics",
        "Discrete Mathematics",
        "C Programming",
        "Data Structures and Algorithms",
        "Real Analysis",
        "Linear Algebra",
        "Theory of Computation",
        "Complex Analysis",
        "Numerical Methods",
        "Graph Theory",
      ],
    },
    {
      institution: "Masai School",
      degree: "Full Time Software Development",
      graduation: "September,2023",
      location: "Remote",
      gpa: "A",
      coursework: [
        "Data Structures and Algorithms",
        "Software Engineering",
        "Database Systems",
        "Advanced JavaScript",
        "React and Redux",
        "Node.js and Express",
        "RESTful APIs",
        "Version Control with Git",
        "Agile Methodologies",
      ],
    },
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      status: "In Progress",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              My academic foundation in computer science has provided me with
              strong theoretical knowledge and practical skills in software
              development and problem-solving.
            </p>
          </div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500"
              >
                {/* Top Row */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg border border-green-500/30">
                        <GraduationCap className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {edu.institution}
                        </h3>
                        <h4 className="text-xl text-blue-400 font-medium mt-1">
                          {edu.degree}
                        </h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-gray-400">
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:text-right lg:ml-8 mt-4 lg:mt-0">
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <Calendar size={16} />
                      <span className="font-medium">{edu.graduation}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Coursework Section — FULL WIDTH GRID */}
                <div>
                  <h5 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                    <BookOpen size={18} className="text-blue-400" />
                    Relevant Coursework
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {edu.coursework.map((course, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <span className="text-blue-400 text-xs">●</span>
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-white mb-8 text-center">
              Certifications & Learning
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                      <Award className="w-5 h-5 text-blue-400" />
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cert.status === "Completed"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-green-600/20 via-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-green-500/30 backdrop-blur-sm">
              <div className="text-center">
                <h3 className="text-3xl font-semibold text-white mb-6">
                  Continuous Learning
                </h3>
                <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
                  My education has instilled in me a passion for continuous
                  learning and growth. I stay current with emerging technologies
                  and industry best practices through online courses,
                  certifications, and hands-on projects.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="px-6 py-3 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    Computer Science Fundamentals
                  </span>
                  <span className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                    Software Engineering
                  </span>
                  <span className="px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                    Problem Solving
                  </span>
                  <span className="px-6 py-3 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                    Lifelong Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
