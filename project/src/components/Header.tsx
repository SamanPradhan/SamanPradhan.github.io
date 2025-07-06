import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Saman Pradhan
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Education
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-white transition-all duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/samanpradhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/samanpradhan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:pradhansaman2017@gmail.com"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
            <a
              href="/resume.pdf"
              download
              className="ml-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 text-sm"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800/50 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://github.com/samanpradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/samanpradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pradhansaman2017@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
                >
                  <Download size={16} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
