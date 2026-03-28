import { motion } from 'framer-motion';
import { Trophy, Medal, Award } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      place: '2nd Place',
      amount: '$15,000',
      description: 'Cash prize, Oculus Quest 2, and 1 year of free hosting.',
      icon: <Medal size={48} className="text-slate-300 drop-shadow-lg" />,
      color: 'from-slate-300/20 to-slate-400/5',
      borderColor: 'border-slate-300/50',
      glow: 'shadow-slate-300/20',
      delay: 0.2,
      scale: 'scale-95 hover:scale-100',
    },
    {
      place: '1st Place',
      amount: '$25,000',
      description: 'Cash prize, MacBook Pro M3, and exclusive mentorship from top tech leaders.',
      icon: <Trophy size={64} className="text-yellow-400 drop-shadow-lg" />,
      color: 'from-yellow-400/20 to-yellow-500/5',
      borderColor: 'border-yellow-400/50',
      glow: 'shadow-yellow-400/30',
      delay: 0,
      scale: 'scale-105 hover:scale-110 z-10',
    },
    {
      place: '3rd Place',
      amount: '$10,000',
      description: 'Cash prize, Keychron Keyboard, and premium swags.',
      icon: <Award size={48} className="text-amber-600 drop-shadow-lg" />,
      color: 'from-amber-600/20 to-amber-700/5',
      borderColor: 'border-amber-600/50',
      glow: 'shadow-amber-600/20',
      delay: 0.4,
      scale: 'scale-95 hover:scale-100',
    }
  ];

  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon/10 rounded-full filter blur-3xl opacity-50 pointer-events-none transform -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Hackathon <span className="neon-text">Prizes</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Compete for a total prize pool of $50,000+ along with exclusive swags, gadgets, and internship opportunities.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 lg:gap-8 max-w-5xl mx-auto">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: prize.delay }}
              className={`w-full md:w-1/3 glass-panel rounded-3xl p-8 text-center relative overflow-hidden transition-all duration-300 ${prize.scale} border-2 ${prize.borderColor} shadow-xl hover:${prize.glow}`}
            >
              {/* Gradient BG */}
              <div className={`absolute inset-0 bg-gradient-to-b ${prize.color} opacity-50 pointer-events-none`}></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                  className="mb-6"
                >
                  {prize.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  {prize.place}
                </h3>
                <div className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white drop-shadow-sm">
                  {prize.amount}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {prize.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
