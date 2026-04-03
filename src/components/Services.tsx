import { motion } from 'motion/react';
import { Layout, Code2, LineChart, Globe, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'UX/UI Strategy & Design',
    description: 'User-centric interfaces designed to maximize engagement and conversion rates through psychological triggers.',
    benefit: 'Increase user retention by up to 40% with intuitive design flows.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Scalable, high-performance web applications built with modern technologies like React, Node.js, and Cloud Run.',
    benefit: '99.9% uptime and lightning-fast load speeds for global audiences.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: LineChart,
    title: 'Conversion Optimization',
    description: 'Data-driven analysis and A/B testing to refine your digital funnel and boost your bottom line.',
    benefit: 'Turn more visitors into paying customers with optimized CTAs.',
    color: 'bg-green-500/10 text-green-500'
  },
  {
    icon: Globe,
    title: 'Brand Identity Systems',
    description: 'Comprehensive visual languages that communicate your brand’s values and build lasting trust.',
    benefit: 'Establish a premium market position that justifies higher pricing.',
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    description: 'Optimizing existing applications for speed, SEO, and accessibility to reach a wider audience.',
    benefit: 'Higher search rankings and improved user satisfaction metrics.',
    color: 'bg-yellow-500/10 text-yellow-500'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Infrastructure',
    description: 'Robust security audits and cloud infrastructure setup to protect your data and user privacy.',
    benefit: 'Peace of mind with enterprise-grade security protocols.',
    color: 'bg-red-500/10 text-red-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-primary uppercase mb-4"
          >
            What I Do
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-8"
          >
            Solutions that solve <span className="text-primary">Real Problems</span>.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            I don't just build websites; I build business tools that help you scale, automate, and dominate your niche.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">The Result</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 italic">"{service.benefit}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
