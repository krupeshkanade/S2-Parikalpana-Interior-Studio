import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, ShieldCheck, Banknote, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600" 
            alt="Modern Minimalist Interior Design Living Room" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-stone-900/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Sustainable & Minimalist <br />
            <span className="text-sage-200">Interiors</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto text-stone-100"
          >
            Transforming spaces in Mulund, Bhandup & Dombivli since 2018 with eco-friendly designs.
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <NavLink 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-sage-800 hover:bg-sage-700 text-white px-8 py-4 rounded-sm text-lg font-medium transition-all transform hover:scale-105"
            >
              Get a Free Consultation <ArrowRight size={20} />
            </NavLink>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: ShieldCheck, 
                title: "SNDT Alumni Expertise", 
                desc: "Led by Samiksha Sanap, bringing academic rigor and 6+ years of field experience to your home." 
              },
              { 
                icon: Leaf, 
                title: "Eco-Friendly Materials", 
                desc: "We prioritize sustainable, non-toxic materials for a healthy home environment." 
              },
              { 
                icon: Banknote, 
                title: "Budget-Optimized Luxury", 
                desc: "Premium designs tailored to fit your budget without compromising on quality." 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center p-8 border border-stone-100 rounded-lg hover:shadow-lg transition-shadow bg-stone-50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-100 text-sage-800 rounded-full mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-stone-800">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro / About Teaser */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?auto=format&fit=crop&q=80&w=800" 
              alt="Airy and bright living room interior" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900">
              Designing Homes that Breathe
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              At S2 Parikalpana, we don't just fill spaces; we curate lifestyles. Specializing in space planning for Mumbai's compact apartments, we ensure every square foot serves a purpose.
            </p>
            <p className="text-stone-600 text-lg leading-relaxed">
              Whether you are in Mulund, Vikhroli, or Dombivli, our mission is to bring sustainable luxury to your doorstep.
            </p>
            <NavLink 
              to="/about" 
              className="inline-block text-sage-800 font-bold border-b-2 border-sage-800 pb-1 hover:text-sage-600 hover:border-sage-600 transition-colors"
            >
              Read Our Story
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-stone-900">What Our Clients Say</h2>
          <p className="text-stone-500 mb-12">Rated 4.7/5 Stars by happy homeowners across Thane & Mumbai.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((review, idx) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-stone-50 p-8 rounded-lg border border-stone-100 shadow-sm text-left flex flex-col"
              >
                <div className="flex mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(review.rating) ? "currentColor" : "none"} className={i < Math.floor(review.rating) ? "" : "text-stone-300"} />
                  ))}
                </div>
                <p className="text-stone-700 italic mb-6 flex-grow">"{review.text}"</p>
                <div>
                  <h4 className="font-bold font-serif text-stone-900">{review.name}</h4>
                  <span className="text-sm text-stone-500 uppercase tracking-wide">{review.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Bar */}
      <section className="py-16 bg-sage-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-sage-100 mb-8 max-w-xl mx-auto">Get a free consultation and estimate for your dream home in Dombivli, Mulund, or Bhandup.</p>
          <NavLink 
            to="/contact" 
            className="inline-block bg-white text-sage-900 px-8 py-3 rounded-sm font-bold hover:bg-stone-100 transition-colors"
          >
            Contact Us Today
          </NavLink>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;