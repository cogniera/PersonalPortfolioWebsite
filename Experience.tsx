import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
  period: "2025 - Present",
  role: "Software Development Intern",
  company: "Sample Junction",
  description: "Worked on automated testing infrastructure to improve software reliability and release quality. Focused on building maintainable test frameworks and collaborating closely with developers to validate production features.",
  achievements: [
    "Developed and maintained automated test suites using Java, Selenium, and the Page Object Model (POM)",
    "Executed functional and regression testing across multiple releases, identifying defects and verifying fixes",
    "Collaborated with developers to improve test coverage and overall system reliability"
    "Used PhP (laravel) on the website with react and css"
  ]
},
    {
  period: "Sep 2025 - Present",
  role: "Flight Autonomy Developer",
  company: "Waterloo Aerial Robotics Group (Autonomy Sub-team)",
  description: "Contributed to the autonomy stack of an unmanned aerial system, focusing on telemetry handling, control logic, and vision-based navigation for simulated flight environments.",
  achievements: [
    "Implemented MAVLink heartbeat, telemetry, and command workers for simulated autonomy control",
    "Parsed ATTITUDE and POSITION telemetry messages to compute yaw and altitude corrections toward target points",
    "Developed vision-based landing marker detection achieving 90%+ accuracy in controlled tests"
  ]
}];

  return (
    <section id = "experience" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-20"
        >
          <span className="text-blue-400 uppercase tracking-wider mb-4 block text-sm">Experience</span>
          <h2 className="text-white mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">Professional Journey</h2>
          <p className="text-base sm:text-xl text-gray-400 px-4">
            Building AI systems across research, startups, and enterprise
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent ml-[7px]" />

            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-0 lg:pl-16"
                >
                  {/* Timeline dot - hidden on mobile */}
                  <div className="hidden lg:block absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_0_20px_rgba(96,165,250,0.5)]" />

                  <div className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/30 active:border-blue-500/40 transition-all duration-300">
                    <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                      <div>
                        <span className="text-xs sm:text-sm text-blue-400 mb-2 block">{exp.period}</span>
                        <h3 className="text-white mb-1 text-xl sm:text-2xl">{exp.role}</h3>
                        <p className="text-purple-400 text-base sm:text-lg">{exp.company}</p>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
