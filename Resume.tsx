import { motion } from "motion/react";
import { Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <span className="text-blue-400 uppercase tracking-wider text-sm block mb-3">
            Resume
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
            My Resume
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            A concise overview of my experience, projects, and technical background.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 backdrop-blur-sm overflow-hidden shadow-xl"
        >
          {/* Actions */}
          <div className="flex items-center justify-end gap-3 p-4 border-b border-white/10 bg-black/30">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition"
            >
              <ExternalLink className="w-4 h-4" />
              Open
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-[0_0_25px_rgba(96,165,250,0.5)] transition"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          {/* Embedded PDF */}
          <div className="w-full h-[70vh] bg-black">
            <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
