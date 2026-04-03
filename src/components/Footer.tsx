import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-950 pt-24 pb-12 border-t border-slate-100 dark:border-slate-900">
      <div className="container-custom px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-display font-bold tracking-tighter mb-8 block">
              Mashfiqur<span className="text-primary">BD</span>
            </a>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md mb-10 leading-relaxed">
              Crafting premium digital experiences that bridge the gap between vision and reality. Let's build something extraordinary together.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Portfolio', 'Process', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-8">Contact</h4>
            <ul className="space-y-4">
              <li className="text-slate-500 dark:text-slate-400">hello@mashfiqur.bd</li>
              <li className="text-slate-500 dark:text-slate-400">+880 1700 000 000</li>
              <li className="text-slate-500 dark:text-slate-400">Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
            © {new Date().getFullYear()} MashfiqurBD. Made with <Heart size={14} className="text-accent fill-accent" /> in Dhaka.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center hover:scale-110 transition-all shadow-lg"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
