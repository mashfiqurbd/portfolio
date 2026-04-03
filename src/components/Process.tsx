import { motion } from 'motion/react';
import { Search, PenTool, Code, Send } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & Strategy',
    description: 'We start by deep-diving into your business goals, target audience, and competitive landscape to define a clear roadmap for success.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: PenTool,
    title: 'Design & Prototyping',
    description: 'I create high-fidelity user interfaces and interactive prototypes that prioritize user experience and conversion-focused design.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: Code,
    title: 'Development & Testing',
    description: 'Using modern, scalable technologies, I build your product with clean, performant code and rigorous automated testing.',
    color: 'bg-green-500/10 text-green-500'
  },
  {
    icon: Send,
    title: 'Launch & Optimization',
    description: 'We deploy your product to a high-performance cloud environment and continuously monitor and optimize for maximum impact.',
    color: 'bg-orange-500/10 text-orange-500'
  }
];

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">My Process</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
            How I <span className="text-primary">Deliver Results</span>.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            A streamlined, collaborative workflow designed to take your project from concept to high-converting reality in record time.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -translate-y-1/2 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-all duration-500 ${step.color} bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800`}>
                  <step.icon size={32} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center text-xs font-bold shadow-md">
                    0{i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline/Urgency Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 rounded-[3rem] bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-xl">
            <h4 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to start your journey?</h4>
            <p className="text-slate-400 dark:text-slate-600 text-lg">
              Most projects go from discovery to launch in <span className="text-white dark:text-slate-900 font-bold">4–8 weeks</span>. Let's discuss your timeline.
            </p>
          </div>
          
          <div className="relative z-10">
            <a href="#contact" className="px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl hover:shadow-primary/20">
              Get a Free Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
