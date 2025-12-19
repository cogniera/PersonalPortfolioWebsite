import { motion } from 'motion/react';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { ImageWithFallback } from "./ImageWithFallback.tsx";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Gradient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full sm:w-[800px] h-[600px] sm:h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-full sm:w-[600px] h-[500px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Dark gradient overlay for mobile readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 sm:bg-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 relative z-10">
        {/* Mobile Layout: Vertical, centered */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Mobile: Portrait First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
            className="relative flex justify-center order-1 lg:order-2 w-full"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-[60px] scale-110" />

              {/* Portrait with smooth edge blend */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px]">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: `radial-gradient(circle at center, transparent 0%, transparent 45%, rgba(10, 10, 10, 0.3) 60%, rgba(10, 10, 10, 0.7) 75%, rgba(10, 10, 10, 1) 90%)`,
                    zIndex: 2,
                  }}
                />
                <ImageWithFallback
                  src="./images/image.jpeg" // ← placeholder ONLY
                  alt="Profile picture"
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile: Content Below Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Mobile Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="lg:hidden"
            >
              <h1 className="text-5xl sm:text-6xl leading-[1.1] tracking-tight text-white">
                Think.<br />
                Work.<br />
                Sleep.<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Repeat.
                </span>
              </h1>
            </motion.div>

            {/* Desktop Content */}
            <div className="hidden lg:block space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 backdrop-blur-sm text-sm sm:text-base">
                  RAG • Machine Learning • Research
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-white"
              >
                Building Frontier Projects
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  from first principles 
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-400 max-w-lg leading-relaxed"
              >
                Computer Engineering Student at the Unversity of Waterloo passionate about RAG for long form content.
              </motion.p>
            </div>

            {/* Mobile Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:hidden text-base sm:text-lg text-gray-400 leading-relaxed px-4 max-w-md mx-auto"
            >
              Computer Engineering Student at the Unversity of Waterloo passionate about RAG for long form content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start px-4 lg:px-0"
            >
              <a href = "#projects" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] active:scale-95 transition-all duration-300 min-h-[48px]">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href = "#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm rounded-full text-white border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 min-h-[48px]">
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-6 pt-4 justify-center lg:justify-start"
            >
              <a href="github.com/cogniera" className="text-gray-400 hover:text-white transition-colors active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/paarth-sharma-engineering/" className="text-gray-400 hover:text-white transition-colors active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:paarths376@gmail.com" className="text-gray-400 hover:text-white transition-colors active:scale-95 min-w-[48px] min-h-[48px] flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
