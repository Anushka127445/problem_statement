import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const Counter = ({ from, to, duration = 2, isCurrency = false }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) {
            let formatted = Math.round(value).toLocaleString();
            if (isCurrency) {
              formatted = '$' + formatted;
            } else {
              formatted = formatted + '+';
            }
            nodeRef.current.textContent = formatted;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, isCurrency]);

  return <span ref={nodeRef}>{isCurrency ? '$' : ''}{from}{!isCurrency ? '+' : ''}</span>;
};

const Stats = () => {
  const stats = [
    { label: 'Participants', value: 10000, isCurrency: false },
    { label: 'Universities', value: 150, isCurrency: false },
    { label: 'Projects Built', value: 800, isCurrency: false },
    { label: 'Prize Pool', value: 50000, isCurrency: true },
  ];

  return (
    <section className="py-12 relative z-20 -mt-16 md:-mt-24">
      <div className="container mx-auto px-4">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border-t border-white/40 dark:border-slate-700/60 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold neon-text mb-3">
                  <Counter from={0} to={stat.value} isCurrency={stat.isCurrency} />
                </div>
                <div className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
