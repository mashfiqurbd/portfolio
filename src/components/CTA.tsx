import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-slate-950 -z-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md border border-white/10">
            <Sparkles size={16} className="text-yellow-400" />
            Limited Availability for Q2 2026
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight mb-10 leading-[1.1]">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Truly Amazing</span>.
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Stop settling for average. Partner with a strategist who understands your vision and has the skills to execute it flawlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-white text-slate-950 rounded-full font-bold text-xl shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-3 group"
            >
              Start Your Project
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex flex-col items-start text-left">
              <p className="text-white font-bold text-lg">Book a Free Strategy Call</p>
              <p className="text-slate-400 text-sm">No obligation. Just pure value.</p>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-24 pt-12 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Forbes', 'TechCrunch', 'Wired', 'The Verge', 'Fast Company'].map(logo => (
              <span key={logo} className="text-xl font-display font-bold text-white tracking-tighter">{logo}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
