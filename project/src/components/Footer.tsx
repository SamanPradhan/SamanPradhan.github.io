import React from "react";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800/50 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Saman Pradhan
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Software Engineer passionate about building innovative web
                applications and creating solutions that make a positive impact.
                Always eager to learn and take on new challenges.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/samanpradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/samanpradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com/samanpradhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="mailto:pradhansaman2017@gmail.com"
                  className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3 text-gray-400">
                <p>Gurgaon, India</p>
                <p>
                  <a
                    href="mailto:pradhansaman2017@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    pradhansaman2017@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+1234567890"
                    className="hover:text-white transition-colors"
                  >
                    +91 9330175007
                  </a>
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="/assets/Saman_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800/50 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p className="flex items-center gap-2 mb-4 md:mb-0">
                © {currentYear} Saman Pradhan. Made with
                <Heart size={16} className="text-red-400" />
                using React & TypeScript.
              </p>
              <div className="flex items-center gap-4">
                <p>All rights reserved.</p>
                <button
                  onClick={scrollToTop}
                  className="bg-gray-800/50 hover:bg-gray-700/50 p-2 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label="Scroll to top"
                >
                  <ArrowUp size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
