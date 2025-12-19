import { motion } from 'motion/react';
import { Brain, Code2, Sparkles } from 'lucide-react';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <span className="text-blue-400 uppercase tracking-wider mb-4 block text-sm">About</span>
          <h2 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">Mission & Approach</h2>
          <p className="text-base sm:text-xl text-gray-400 leading-relaxed px-4">
            I am building side projects trying to bridge the gap between cutting-edge research 
            and production-ready solutions. My focus is on using the power of Academia for solving modern problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            {
            icon: Brain,
            title: "Machine Learning Systems",
            description: "Experience working with transformer-based models, retrieval pipelines, and empirical evaluation of NLP systems."
            },
            {
            icon: Code2,
            title: "Applied ML Infrastructure",
            description: "Building and evaluating end-to-end ML pipelines with attention to data preprocessing, retrieval behavior, and system-level trade-offs."
            },
            {
            icon: Sparkles,
            title: "Retrieval & RAG",
            description: "Designing retrieval-augmented generation pipelines and studying how chunking, embeddings, and reranking affect retrieval quality."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 active:scale-[0.98] transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
              </div>
              <h3 className="text-white mb-3 sm:mb-4 text-xl sm:text-2xl">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
