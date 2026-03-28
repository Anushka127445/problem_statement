import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log('Registration Data:', data);
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-2xl border-t border-white/40 dark:border-slate-700/60">
          <div className="flex flex-col md:flex-row">
            {/* Left side info */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-primary to-neon-purple p-10 lg:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Hack?</h2>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Join the most awaited hackathon of the year. Secure your spot now and get ready to build something amazing.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Register</h4>
                      <p className="text-white/70 text-sm">Fill out the form to secure your spot.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Form a Team</h4>
                      <p className="text-white/70 text-sm">Solo or up to 4 members.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Build</h4>
                      <p className="text-white/70 text-sm">48 hours to create the future.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="w-full md:w-7/12 p-10 lg:p-12 bg-white dark:bg-slate-800">
              <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">
                Registration Form
              </h3>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center h-64 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-green-500">
                      <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Registration Successful!</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Check your email for the confirmation link and next steps.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
                    noValidate
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-500 ring-red-500' : 'border-slate-300 dark:border-slate-600'
                        } bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-neon transition-colors`}
                        placeholder="John Doe"
                        {...register("name", { required: "Full name is required" })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500 ring-red-500' : 'border-slate-300 dark:border-slate-600'
                        } bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-neon transition-colors`}
                        placeholder="john@example.com"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="college" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        College / University *
                      </label>
                      <input
                        id="college"
                        type="text"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.college ? 'border-red-500 ring-red-500' : 'border-slate-300 dark:border-slate-600'
                        } bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-neon transition-colors`}
                        placeholder="Harvard University"
                        {...register("college", { required: "College name is required" })}
                      />
                      {errors.college && (
                        <p className="mt-1 text-sm text-red-500">{errors.college.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex justify-center items-center gap-2 mt-8 py-3.5 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Registration
                          <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
