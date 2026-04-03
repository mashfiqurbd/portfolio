import { motion } from 'motion/react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'Nexus SaaS Platform',
    category: 'SaaS',
    description: 'A comprehensive project management tool for large-scale engineering teams.',
    problem: 'Teams struggled with fragmented communication and siloed data.',
    solution: 'Centralized real-time dashboard with integrated AI-driven insights.',
    result: '35% increase in team productivity and 20% reduction in project delays.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Lumina E-Commerce',
    category: 'E-Commerce',
    description: 'A high-end fashion marketplace with a focus on immersive shopping experiences.',
    problem: 'Low mobile conversion rates due to slow load times and complex checkout.',
    solution: 'Headless commerce architecture with a lightning-fast Next.js frontend.',
    result: '150% increase in mobile conversions and 40% reduction in bounce rate.',
    image: 'https://picsum.photos/seed/lumina/800/600',
    tags: ['Next.js', 'Shopify', 'Tailwind']
  },
  {
    title: 'Vertex Analytics',
    category: 'FinTech',
    description: 'Real-time financial data visualization platform for institutional investors.',
    problem: 'Investors were overwhelmed by raw data without actionable insights.',
    solution: 'Interactive D3.js visualizations with predictive modeling capabilities.',
    result: 'Enabled investors to identify high-yield opportunities 2x faster.',
    image: 'https://picsum.photos/seed/vertex/800/600',
    tags: ['D3.js', 'TypeScript', 'Python']
  },
  {
    title: 'Aura Wellness App',
    category: 'Mobile',
    description: 'A meditation and wellness app designed for high-stress professionals.',
    problem: 'Existing apps were too cluttered and failed to provide a calming UX.',
    solution: 'Minimalist interface with spatial audio and personalized routines.',
    result: '4.9/5 star rating on App Store with 500k+ active users.',
    image: 'https://picsum.photos/seed/aura/800/600',
    tags: ['React Native', 'Firebase', 'Motion']
  }
];

const categories = ['All', 'SaaS', 'E-Commerce', 'FinTech', 'Mobile'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Featured Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Case studies that prove <span className="text-primary">Impact</span>.
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              A selection of projects where I've helped clients achieve significant business growth through strategic design and development.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md' 
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl mb-8 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <div className="flex gap-4">
                    <button className="px-6 py-3 bg-white text-slate-900 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all">
                      View Case Study <ArrowUpRight size={18} />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-md text-white rounded-full flex items-center justify-center hover:bg-white/40 transition-all">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-slate-400">#{tag}</span>
                    ))}
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Problem</p>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300 line-clamp-2">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Solution</p>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300 line-clamp-2">{project.solution}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Result</p>
                    <p className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2">{project.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
