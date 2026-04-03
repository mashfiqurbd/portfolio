import { motion } from 'motion/react';
import { Palette, Code, Wrench, Database, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Design & Strategy',
    icon: Palette,
    skills: ['UX/UI Design', 'User Research', 'Brand Identity', 'Conversion Strategy', 'A/B Testing', 'Prototyping']
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'D3.js', 'Three.js']
  },
  {
    title: 'Backend & Infrastructure',
    icon: Database,
    skills: ['Node.js / Express', 'PostgreSQL / MongoDB', 'Firebase / Supabase', 'Cloud Run / Docker', 'REST / GraphQL', 'Serverless']
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    skills: ['Figma', 'Git / GitHub', 'VS Code', 'Postman', 'Vercel / Netlify', 'Linear / Jira']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Skills & Tools</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
            My <span className="text-primary">Technical Arsenal</span>.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I use a curated stack of modern technologies and methodologies to build robust, scalable, and high-converting digital products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
            >
              <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
                <category.icon size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-bold mb-6">{category.title}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700 hover:border-primary/50 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning/Growth Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
              <Terminal size={24} />
            </div>
            <div>
              <p className="font-bold text-lg">Always Learning</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Currently exploring: Web3, AI Integration, and Advanced Motion Design</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img src={`https://picsum.photos/seed/tech${i}/100/100`} alt="Tech" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest self-center">Updated Weekly</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
