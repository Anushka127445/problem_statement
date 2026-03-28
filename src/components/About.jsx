import { motion } from 'framer-motion';
import { Lightbulb, Users, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Lightbulb size={32} className="text-neon" />,
      title: 'Innovation',
      description: 'Push the boundaries of whats possible. Build creative solutions to real-world problems using cutting-edge technology.'
    },
    {
      icon: <Users size={32} className="text-secondary" />,
      title: 'Networking',
      description: 'Connect with industry experts, mentors, and like-minded peers. Build relationships that last beyond the hackathon.'
    },
    {
      icon: <BookOpen size={32} className="text-primary" />,
      title: 'Learning',
      description: 'Expand your skillset through workshops, mentorship sessions, and hands-on experience building a project from scratch.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            What is <span className="neon-text">HackOrbit?</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            HackOrbit is a premier 48-hour global hackathon where brilliant minds converge to build innovative solutions. Whether you are a seasoned developer or a first-time hacker, HackOrbit provides the perfect environment to learn, build, and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-2xl p-8 glow-border group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-neon transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
