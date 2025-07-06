import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // You can integrate with a form service like Formspree, Netlify Forms, etc.
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-pink-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a conversation about technology and
              innovation. Let's build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Whether you're looking for a developer to join your team, want
                  to collaborate on a project, or simply want to connect, I'd
                  love to hear from you. I'm currently seeking new opportunities
                  and exciting challenges.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a
                      href="mailto:pradhansaman2017@gmail.com"
                      className="text-white hover:text-blue-400 transition-colors text-lg font-medium"
                    >
                      pradhansaman2017@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-white hover:text-green-400 transition-colors text-lg font-medium"
                    >
                      +91 9330175007
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <div className="bg-purple-500/20 p-3 rounded-lg border border-purple-500/30">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white text-lg font-medium">
                      Gurgaon, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-6">
                  Connect on Social Media
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/samanpradhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com/in/samanpradhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com/samanpradhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900/50 p-4 rounded-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-110"
                  >
                    <Twitter className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-semibold text-white">
                  Send a Message
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 mb-2 font-medium"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 disabled:from-gray-500 disabled:to-gray-600 text-white py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center gap-3 font-medium text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
