import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="glass-panel border-b-0 rounded-2xl mb-4 overflow-hidden glow-border">
      <button
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-lg text-slate-800 dark:text-white">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4 p-1 rounded-full bg-primary/10 text-primary dark:text-neon"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Who can participate?",
      answer: "HackOrbit is open to everyone! Whether you are a university student, a coding boot-camp grad, or a professional developer, you are welcome to join. You must be at least 18 years old."
    },
    {
      question: "How much does it cost?",
      answer: "Zero. Zilch. Nada. Registration is completely free. We will even provide meals, snacks, and swag during the event."
    },
    {
      question: "Do I need a team?",
      answer: "You can hack solo or in a team of up to 4 people. If you don't have a team, don't worry! We will have team-building sessions at the beginning of the event."
    },
    {
      question: "What if I don't know how to code?",
      answer: "No problem! A successful hackathon project needs designers, product managers, and creative thinkers just as much as coders. Plus, we'll have beginner-friendly workshops to get you started."
    },
    {
      question: "What should I bring?",
      answer: "Your laptop, charger, valid ID, and a lot of enthusiasm! We will provide the food, Wi-Fi, and workspace."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
            Frequently Asked <span className="neon-text">Questions</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Got questions? We have answers. If you can't find what you are looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
