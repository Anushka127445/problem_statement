import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      date: 'April 15, 2026',
      title: 'Registration Opens',
      description: 'Early bird registration starts. Form your teams and start brainstorming ideas.',
      isActive: false,
    },
    {
      date: 'May 1, 2026',
      title: 'Idea Submission',
      description: 'Submit your initial project proposal and get feedback from mentors.',
      isActive: false,
    },
    {
      date: 'May 15, 2026',
      title: 'Hackathon Begins',
      description: 'Opening ceremony and hacking kicks off. 48 hours to build your project.',
      isActive: true, // Let's pretend this is the active current step
    },
    {
      date: 'May 17, 2026',
      title: 'Final Pitch & Closing',
      description: 'Hacking ends. Teams pitch their projects. Winners announced at closing ceremony.',
      isActive: false,
    }
  ];

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Event <span className="neon-text">Timeline</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Mark your calendars. Here is the schedule for HackOrbit Reimagined.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-neon-purple to-transparent transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-12">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-center w-full ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-slate-50 dark:border-slate-900 bg-gradient-to-tr from-primary to-neon-purple transform -translate-x-1/2 z-20 shadow-lg shadow-primary/40 hidden sm:block">
                    {event.isActive && (
                      <div className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping"></div>
                    )}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-16 md:ml-0 w-full md:w-[45%] ${
                    isEven ? 'md:pr-12 lg:pr-16 text-left md:text-right' : 'md:pl-12 lg:pl-16 text-left'
                  }`}>
                    <div className="glass-panel p-6 rounded-2xl glow-border hover:-translate-y-1 transition-transform duration-300">
                      <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary dark:text-neon text-sm font-semibold mb-4">
                        {event.date}
                      </span>
                      <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">
                        {event.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
