import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Header */}
      <div className="bg-stone-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-4">About Us</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">Crafting sustainable stories through interior design.</p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-5/12"
          >
            {/* Placeholder for Founder Image */}
            <div className="bg-stone-200 rounded-lg overflow-hidden h-[500px] relative shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" 
                alt="Samiksha Sanap - Founder" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-stone-900/90 to-transparent p-6 text-white">
                <h3 className="font-serif text-2xl font-bold">Samiksha Sanap</h3>
                <p className="text-sage-200 text-sm uppercase tracking-wider">Founder & Principal Designer</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full md:w-7/12 space-y-6"
          >
            <h2 className="font-serif text-3xl font-bold text-stone-800">
              A Journey of <span className="text-sage-700">Creation & Passion</span>
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              S2 Parikalpana Interior Studio was founded by Samiksha Sanap, an alumnus of the prestigious <strong>SNDT University</strong>. With over 6 years of industry experience, Samiksha has carved a niche for herself in the Mumbai suburbs by blending functionality with aesthetics.
            </p>
            <p className="text-stone-600 leading-relaxed text-lg">
              Starting in 2018, the firm has grown from a small consultancy to a full-service design studio. Our core belief is simple: <strong>"Green Interiors"</strong>. We believe a home should be as healthy as it is beautiful.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="p-4 border border-stone-200 rounded bg-white">
                <Clock className="text-sage-600 mb-2" size={24} />
                <h4 className="font-bold text-stone-900 text-lg">6+ Years</h4>
                <p className="text-sm text-stone-500">Experience</p>
              </div>
              <div className="p-4 border border-stone-200 rounded bg-white">
                <Award className="text-sage-600 mb-2" size={24} />
                <h4 className="font-bold text-stone-900 text-lg">SNDT Alumni</h4>
                <p className="text-sm text-stone-500">Certified Expert</p>
              </div>
              <div className="p-4 border border-stone-200 rounded bg-white">
                <Users className="text-sage-600 mb-2" size={24} />
                <h4 className="font-bold text-stone-900 text-lg">Expert Team</h4>
                <p className="text-sm text-stone-500">Designers like Yash</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-sage-50 py-16">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-stone-900 mb-6">Our Philosophy</h2>
          <p className="text-lg text-stone-700 leading-relaxed italic">
            "We design for the human experience. Every texture, every color, and every light fixture is chosen to evoke a sense of calm and belonging. In the bustling cities of Mumbai and Thane, your home should be your sanctuary."
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;