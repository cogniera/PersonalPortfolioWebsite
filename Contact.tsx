import { motion } from 'motion/react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id = "contact" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[1000px] h-[600px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-blue-400 uppercase tracking-wider mb-4 block text-sm">Get in Touch</span>
            <h2 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">Let's Build Something</h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Interested in collaboration, consulting, or just want to discuss about RAG ? 
              I'm always open to interesting conversations and opportunities.
            </p>
          </div>

          {/* Large Social Icons - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 sm:mb-12"
          >
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                href="https://github.com/cogniera"
                className="group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 active:border-blue-500/40 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-active:scale-105 transition-transform duration-300">
                  <Github className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/paarth-sharma-engineering/"
                className="group flex flex-col items-center gap-3 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 active:border-blue-500/40 transition-all duration-300 min-w-[100px] sm:min-w-[120px]"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-active:scale-105 transition-transform duration-300">
                  <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Email Contact */}
          <motion.a
            href="mailto:paarths376@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group block p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 active:border-blue-500/40 transition-all duration-300 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 group-active:scale-105 transition-transform duration-300 flex-shrink-0">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white mb-1 text-base sm:text-lg">Email</h3>
                <p className="text-gray-400 text-sm sm:text-base">your.email@example.com</p>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
