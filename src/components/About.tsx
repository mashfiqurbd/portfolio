import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Rocket } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years Experience', value: '8+' },
  { icon: Users, label: 'Happy Clients', value: '120+' },
  { icon: Rocket, label: 'Projects Delivered', value: '250+' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
          <img
            src="https://picsum.photos/seed/mashfiqur/800/1000"
            alt="MashfiqurBD"
            className="relative rounded-3xl object-cover w-full aspect-[4/5] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700">
            <p className="text-4xl font-display font-bold text-primary">8+</p>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Years of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
            I help brands bridge the gap between <span className="text-primary">Vision</span> and <span className="text-accent">Reality</span>.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            With a deep understanding of both design principles and technical architecture, I create digital solutions that aren't just beautiful, but strategically engineered to convert.
          </p>

          <div className="space-y-4 mb-12">
            {[
              'User-centric UX/UI design strategies',
              'High-performance full-stack development',
              'Conversion rate optimization (CRO)',
              'Scalable cloud architecture & deployment'
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium text-slate-700 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-display font-bold mb-1">{stat.value}</p>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
