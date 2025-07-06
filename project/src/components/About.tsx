import React from 'react';
import { Code, Users, Rocket, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies with strong foundation in both frontend and backend development"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Innovation Focused",
      description: "Passionate about leveraging cutting-edge technologies to solve complex business challenges"
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Collaborative Spirit",
      description: "Strong team player with excellent communication skills and experience in agile environments"
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: "Results Driven",
      description: "Focused on delivering high-quality solutions that meet business objectives and user needs"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: "Problem Solver",
      description: "Analytical mindset with ability to break down complex problems into manageable solutions"
    },
    {
      icon: <Award className="w-8 h-8 text-red-400" />,
      title: "Quality Focused",
      description: "Committed to writing clean, maintainable code and following industry best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm a passionate software engineer with a strong foundation in computer science and 
              a drive to create innovative solutions that make a real impact. My journey in technology 
              has been fueled by curiosity, continuous learning, and a commitment to excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white mb-8">My Journey</h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  My passion for technology began during my studies at the University of California, Davis, 
                  where I earned my Bachelor's degree in Computer Science. The rigorous curriculum and 
                  hands-on projects gave me a solid foundation in algorithms, data structures, and 
                  software engineering principles.
                </p>
                <p>
                  Throughout my academic journey, I've been fascinated by the power of code to solve 
                  real-world problems. From building web applications to developing algorithms, 
                  I've consistently sought opportunities to apply my knowledge in practical, 
                  meaningful ways.
                </p>
                <p>
                  I believe in the importance of continuous learning and staying current with 
                  emerging technologies. Whether it's exploring new frameworks, contributing to 
                  open-source projects, or collaborating with fellow developers, I'm always 
                  looking for ways to grow and improve my craft.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/70"
                >
                  <div className="mb-4">{highlight.icon}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-blue-500/30 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl font-semibold text-white mb-6">Let's Build Something Amazing</h3>
              <p className="text-gray-300 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
                I'm always excited to work on challenging projects that push the boundaries of what's possible. 
                Whether it's developing a new application, optimizing performance, or solving complex technical 
                challenges, I bring passion, creativity, and technical expertise to every project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  Web Development
                </span>
                <span className="px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  Problem Solving
                </span>
                <span className="px-6 py-3 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                  Team Collaboration
                </span>
                <span className="px-6 py-3 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium border border-orange-500/30">
                  Continuous Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;