import React from "react";
import { ArrowDown, Download, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Saman Pradhan
            </h1>

            <div className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Software Engineer
            </div>

            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-4xl mx-auto">
              Passionate about building scalable web applications and innovative
              solutions that drive business growth and enhance user experiences.
            </p>

            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
              Experienced in full-stack development with expertise in React,
              Node.js, Python, and cloud technologies. Currently seeking new
              opportunities to create impactful software.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg font-medium shadow-2xl hover:shadow-blue-500/25"
            >
              Explore My Work
              <ArrowDown size={20} />
            </button>
            <a
              href="/src/Assets/Saman_Resume.pdf"
              download
              className="border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 text-lg font-medium hover:bg-gray-800/50"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in-up-delay">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
