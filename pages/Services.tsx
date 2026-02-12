import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Header */}
      <div className="bg-stone-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-stone-400 max-w-2xl mx-auto">Comprehensive design solutions for Residential and Commercial spaces.</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-lg border border-stone-200 shadow-sm hover:shadow-lg transition-all hover:border-sage-200"
            >
              <div className="h-1 w-12 bg-sage-600 mb-6"></div>
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">{service.title}</h2>
              <p className="text-stone-600 mb-8 leading-relaxed h-24">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 size={18} className="text-sage-600" />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Break */}
      <div className="container mx-auto px-4 mb-16">
        <div className="bg-stone-100 rounded-2xl overflow-hidden flex flex-col md:flex-row">
           <div className="w-full md:w-1/2 h-64 md:h-auto">
             <img 
               src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200" 
               alt="Vastu Consultation" 
               className="w-full h-full object-cover"
             />
           </div>
           <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 mb-4">Why Choose S2 Parikalpana?</h3>
              <p className="text-stone-600 mb-6">
                We combine the ancient science of <strong>Vastu Shastra</strong> with modern architectural principles. This ensures that your home in Dombivli or Thane brings prosperity and peace while looking absolutely stunning.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded text-center border border-stone-200">
                  <span className="block text-2xl font-bold text-sage-700">100+</span>
                  <span className="text-xs text-stone-500 uppercase">Projects</span>
                </div>
                <div className="bg-white p-4 rounded text-center border border-stone-200">
                  <span className="block text-2xl font-bold text-sage-700">45 Days</span>
                  <span className="text-xs text-stone-500 uppercase">Avg Delivery</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;