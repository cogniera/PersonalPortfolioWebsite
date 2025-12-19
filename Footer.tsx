import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8 sm:py-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © 2025 AI Enthusiast. Designed with precision and purpose.
          </div>

          <div className="flex gap-4 sm:gap-6">
            <a
              href="hhtps://github.com/cogniera"
              className="text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/paarth-sharma-engineering/"
              className="text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:paarths376@gmail.com"
              className="text-gray-400 hover:text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
