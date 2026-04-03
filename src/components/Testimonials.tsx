import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO at TechFlow',
    feedback: 'Mashfiqur transformed our vision into a reality. His strategic approach to UX design and seamless full-stack development helped us scale our user base by 300% in just six months.',
    rating: 5,
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'David Chen',
    role: 'Product Manager at Nexus',
    feedback: 'Working with Mashfiqur was a game-changer for our team. His ability to bridge the gap between complex engineering requirements and intuitive user interfaces is truly exceptional.',
    rating: 5,
    image: 'https://picsum.photos/seed/david/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder of Lumina',
    feedback: 'The attention to detail and commitment to performance that Mashfiqur brings to every project is unparalleled. Our e-commerce platform has never been faster or more profitable.',
    rating: 5,
    image: 'https://picsum.photos/seed/elena/100/100'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
            What <span className="text-primary">Visionary Leaders</span> Say.
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            I've had the privilege of working with some of the most innovative companies and founders in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote size={40} className="text-primary/10 mb-6" />
              <p className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-10 italic leading-relaxed flex-grow">
                "{testimonial.feedback}"
              </p>
              <div className="flex items-center gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
          <div className="text-center">
            <p className="text-4xl font-display font-bold mb-2">98%</p>
            <p className="text-xs font-bold uppercase tracking-widest">Client Retention</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold mb-2">4.9/5</p>
            <p className="text-xs font-bold uppercase tracking-widest">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-display font-bold mb-2">12M+</p>
            <p className="text-xs font-bold uppercase tracking-widest">Users Impacted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
