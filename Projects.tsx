import { motion } from 'motion/react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

export function Projects() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState(1); // Center card is active by default

  const projects = [
    {
  title: "SmartRAG++",
  category: "LLM Infrastructure",
  shortDescription: "Next-generation retrieval-augmented generation system (in development)",
  description: "Designing a next-generation retrieval-augmented generation (RAG) platform focused on improving retrieval accuracy, context selection, and scalability beyond baseline RAG systems. The project explores advanced chunking strategies, hierarchical and graph-based retrieval, multi-stage reranking, and evaluation-driven optimization for long-form and technical documents. Currently in active development.",
  problem: "Standard RAG pipelines struggle with long documents, fragmented context, and retrieval noise, leading to hallucinations and low-quality responses",
  technologies: ["Python", "LangChain", "Vector Databases", "LLM APIs", "Embedding Models", "Reranking Techniques"],
  github: "#",
  gradient: "from-blue-500/20 to-cyan-500/20",
  glowColor: "rgba(59, 130, 246, 0.5)"
}, {
  title: "Spotify Song Popularity Predictor",
  category: "Machine Learning",
  shortDescription: "End-to-end ML pipeline for predicting Spotify track popularity",
  description: "Designed and implemented a complete machine learning pipeline to predict Spotify song popularity using audio features and genre encoding. Covered data preprocessing, feature scaling, model training with cross-validation, evaluation, and deployment through an interactive Streamlit application.",
  problem: "Understanding whether track popularity can be predicted using audio features alone requires robust preprocessing, modeling, and evaluation pipelines",
  technologies: ["Python", "pandas", "NumPy", "scikit-learn", "Streamlit", "Plotly", "Docker"],
  github: "#",
  gradient: "from-orange-500/20 to-red-500/20",
  glowColor: "rgba(249, 115, 22, 0.5)"
},
    {
  title: "PDF Summarizer AI",
  category: "LLM Applications",
  shortDescription: "AI-powered PDF summarization and question-answering platform",
  description: "Built a full-stack AI application that allows users to upload PDFs and interact with them through semantic search and retrieval-augmented generation. Implemented intelligent text chunking, vector embeddings, similarity search with a vector database, and context-grounded Q&A using modern LLM tooling.",
  problem: "Users need an efficient way to extract insights and answer questions from long, unstructured PDF documents without manual reading",
  technologies: ["React", "TypeScript", "Node.js", "Express", "LangChain", "OpenAI", "Qdrant", "Docker"],
  github: "#",
  gradient: "from-purple-500/20 to-indigo-500/20",
  glowColor: "rgba(139, 92, 246, 0.5)"
},
    {
  title: "67 Clock Bot",
  category: "Robotics & Computer Vision",
  shortDescription: "Autonomous vision-based robot using real-time perception and control",
  description: "Built an autonomous robot that reacts to nearby people and obstacles using real-time computer vision and sensor fusion. Combined YOLOv8 person detection, MiDaS depth-from-RGB estimation, ultrasonic telemetry, and a finite-state machine to produce stable and explainable robotic behavior in real-world environments.",
  problem: "Creating reliable autonomous behavior with limited hardware requires robust perception, sensor fusion, and predictable control logic",
  technologies: ["Python", "YOLOv8", "MiDaS", "OpenCV", "PyTorch", "ESP32", "UDP Networking"],
  github: "#",
  gradient: "from-sky-500/20 to-blue-500/20",
  glowColor: "rgba(56, 189, 248, 0.5)"
},
    {
  title: "Bjorn",
  category: "Game Development",
  shortDescription: "2D action-adventure game built with MonoGame and a custom engine",
  description: "Developed a 2D action-adventure game using MonoGame and a custom GameUtility framework. Implemented multiple game states, tile-based maps, player combat mechanics, inventory and crafting systems, enemy AI with animations, and quest-based progression culminating in a final boss encounter.",
  problem: "Building a complete game required managing state transitions, real-time combat systems, AI behavior, and complex inventory mechanics within a custom engine",
  technologies: ["C#", "MonoGame", ".NET 6", "Custom GameUtility Library"],
  github: "#",
  gradient: "from-emerald-500/20 to-teal-500/20",
  glowColor: "rgba(16, 185, 129, 0.5)"
}
  ];

  const handCards = projects.slice(0, 3);
  const deckCards = projects.slice(3);

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Sci-fi grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 sm:mb-24"
        >
          <span className="text-blue-400 uppercase tracking-wider mb-4 block text-sm">Featured Work</span>
          <h2 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">Selected Projects</h2>
          <p className="text-base sm:text-xl text-gray-400 px-4">
            Production AI systems built for scale and impact
          </p>
        </motion.div>

        {/* Card Hand - Top 3 Cards */}
        <div className="max-w-7xl mx-auto mb-20 perspective-1000">
          <div className="relative h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center">
            {handCards.map((project, index) => {
              const isActive = index === activeCard;
              const rotation = (index - 1) * 8; // -8deg, 0deg, 8deg
              const zIndex = isActive ? 30 : 20 - Math.abs(index - 1) * 5;
              const scale = isActive ? 1 : 0.95;
              const yOffset = isActive ? -20 : 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: yOffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="absolute"
                  style={{
                    zIndex,
                    transform: `rotate(${rotation}deg) scale(${scale})`,
                    left: `${30 + index * 15}%`,
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    isFlipped={flippedCard === index}
                    onClick={() => handleCardClick(index)}
                    isActive={isActive}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Deck - Remaining Cards */}
        {deckCards.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <span className="text-gray-400 text-sm uppercase tracking-wider">More Projects</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {deckCards.map((project, index) => (
                <motion.div
                  key={index + 3}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ProjectCard
                    project={project}
                    index={index + 3}
                    isFlipped={flippedCard === index + 3}
                    onClick={() => handleCardClick(index + 3)}
                    isActive={false}
                    isDeck={true}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: any;
  index: number;
  isFlipped: boolean;
  onClick: () => void;
  isActive: boolean;
  isDeck?: boolean;
}

function ProjectCard({ project, index, isFlipped, onClick, isActive, isDeck = false }: ProjectCardProps) {
  return (
    <div 
      className="relative preserve-3d cursor-pointer group"
      style={{
        width: isDeck ? '100%' : '340px',
        height: isDeck ? '320px' : '460px',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.6s',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
      onClick={onClick}
    >
      {/* Front of Card */}
      <div
        className="absolute inset-0 backface-hidden"
        style={{ backfaceVisibility: 'hidden' }}
      >
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/10 backdrop-blur-sm overflow-hidden"
          style={{
            boxShadow: isActive 
              ? `0 20px 60px -15px ${project.glowColor}, 0 0 0 1px ${project.glowColor}`
              : '0 10px 30px -10px rgba(0,0,0,0.5)',
          }}
        >
          {/* Neon glow effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.glowColor}, transparent 70%)`,
              filter: 'blur(20px)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Category Tag */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-gradient-to-r ${project.gradient} border border-blue-500/30 text-blue-300`}>
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-white mb-3 text-xl sm:text-2xl">{project.title}</h3>

            {/* Short Description */}
            <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
              {project.shortDescription}
            </p>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 4).map((tech: string, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Hover Overlay */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-2xl">
              <div className="text-center">
                <Eye className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <span className="text-white text-sm">Tap to View Details</span>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} blur-2xl`} />
          </div>
        </motion.div>
      </div>

      {/* Back of Card */}
      <div
        className="absolute inset-0 backface-hidden"
        style={{ 
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
        }}
      >
        <div className="h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900/95 to-black/95 border border-blue-500/30 backdrop-blur-sm overflow-hidden relative">
          {/* Glow effect */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${project.glowColor}, transparent 70%)`,
              filter: 'blur(30px)',
            }}
          />

          <div className="relative z-10 h-full flex flex-col">
            {/* Title */}
            <h3 className="text-white mb-4 text-xl">{project.title}</h3>

            {/* Problem Solved */}
            <div className="mb-6">
              <span className="text-blue-400 text-xs uppercase tracking-wider mb-2 block">Problem Solved</span>
              <p className="text-gray-300 text-sm leading-relaxed">{project.problem}</p>
            </div>

            {/* Technologies */}
            <div className="mb-6 flex-grow">
              <span className="text-blue-400 text-xs uppercase tracking-wider mb-2 block">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/30 text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a
                href={project.github}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(96,165,250,0.5)] transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="#"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
