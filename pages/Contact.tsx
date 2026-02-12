import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send an email or API request
    // Here we redirect to WhatsApp with the message
    const text = `Hi, I am ${formData.name}. My requirement is: ${formData.requirement}. My phone is ${formData.phone}.`;
    const url = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <div className="bg-stone-900 text-white py-20 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-stone-400">Start your journey towards a beautiful home today.</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-xl shadow-xl overflow-hidden border border-stone-100">
          
          {/* Contact Info & Map */}
          <div className="w-full lg:w-5/12 bg-sage-800 text-white p-10 flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-sage-300 mt-1" />
                  <div>
                    <h5 className="font-bold text-sage-100 mb-1">Our Studio</h5>
                    <p className="text-sage-100/80 text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-sage-300" />
                  <div>
                    <h5 className="font-bold text-sage-100 mb-1">Phone</h5>
                    <p className="text-sage-100/80 text-sm">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-sage-300" />
                  <div>
                    <h5 className="font-bold text-sage-100 mb-1">Email</h5>
                    <p className="text-sage-100/80 text-sm">{BUSINESS_INFO.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 h-64 w-full rounded-lg overflow-hidden border border-sage-600 shadow-lg">
               <iframe 
                 title="S2 Parikalpana Office Location"
                 className="w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                 loading="lazy"
                 allowFullScreen
                 referrerPolicy="no-referrer-when-downgrade"
                 src="https://maps.google.com/maps?q=Shree%20Nidhi%20CHS%2C%20Tilak%20Road%2C%20Dombivli%20East&t=&z=15&ie=UTF8&iwloc=&output=embed"
               ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-7/12 p-10">
            <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">Request a Free Estimate</h3>
            <p className="text-stone-500 mb-8 text-sm">Fill out the form below and we will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-stone-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-sage-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-stone-700">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-sage-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="requirement" className="text-sm font-bold text-stone-700">Tell us about your project</label>
                <textarea 
                  id="requirement" 
                  name="requirement" 
                  rows={4}
                  required
                  value={formData.requirement}
                  onChange={handleChange}
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded focus:outline-none focus:border-sage-500 transition-colors"
                  placeholder="I am looking for interior design for my 2BHK in Mulund..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-auto bg-stone-900 text-white px-8 py-3 rounded font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;