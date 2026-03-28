import { motion } from 'framer-motion';
import { Cpu, Globe, HeartPulse, Landmark, Leaf } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      icon: <Cpu size={40} className="text-primary" />,
      title: 'AI/ML',
      description: 'Build intelligent systems that learn and adapt. From NLP to computer vision, explore the frontiers of artificial intelligence.',
      color: 'from-blue-500/20 to-blue-600/5',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      icon: <Globe size={40} className="text-secondary" />,
      title: 'Web3',
      description: 'Decentralize the web. Build dApps, smart contracts, and explore the potential of blockchain technology.',
      color: 'from-purple-500/20 to-purple-600/5',
      borderColor: 'group-hover:border-purple-500/50'
    },
    {
      icon: <HeartPulse size={40} className="text-rose-500" />,
      title: 'HealthTech',
      description: 'Innovate for better health outcomes. Create solutions for healthcare accessibility, telemedicine, and wellness.',
      color: 'from-rose-500/20 to-rose-600/5',
      borderColor: 'group-hover:border-rose-500/50'
    },
    {
      icon: <Landmark size={40} className="text-emerald-500" />,
      title: 'FinTech',
      description: 'Revolutionize finance. Build tools for financial inclusion, decentralized finance, and seamless payments.',
      color: 'from-emerald-500/20 to-emerald-600/5',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      icon: <Leaf size={40} className="text-green-500" />,
      title: 'Sustainability',
      description: 'Hack for a greener planet. Develop solutions to combat climate change and promote sustainable living.',
      color: 'from-green-500/20 to-green-600/5',
      borderColor: 'group-hover:border-green-500/50'
    }
  ];

  return (
    <section id="tracks" className="py-24 bg-slate-100/50 dark:bg-slate-900/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Hackathon <span className="neon-text">Tracks</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Choose a track that aligns with your passion and solve challenges that matter. You can also mix tracks or build something entirely unique in the open track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel rounded-2xl p-8 relative overflow-hidden group border border-transparent transition-all duration-300 ${track.borderColor} hover:shadow-xl`}
            >
              {/* Animated gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
              
              <div className="relative z-10">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-neon transition-colors">
                  {track.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {track.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Open Track Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: tracks.length * 0.1 }}
            className="glass-panel rounded-2xl p-8 relative overflow-hidden group glow-border flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/10 to-neon-purple/10 dark:from-primary/20 dark:to-neon-purple/20"
          >
            <h3 className="text-3xl font-bold mb-3 neon-text">
              Open Track
            </h3>
            <p className="text-slate-700 dark:text-slate-300 font-medium">
              Got a wild idea that doesnt fit anywhere else? Build it here. The only limit is your imagination.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Tracks;
