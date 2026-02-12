import { Home, User, PenTool, Image, Phone } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "S2 Parikalpana Interior Studio",
  founder: "Samiksha Sanap",
  phone: "+91 84258 41011",
  whatsapp: "918425841011",
  email: "samiksha@s2parikalpna.com",
  address: "Shop No 3, Shree Nidhi CHS, Tilak Road, Dombivli East, Thane - 421201",
  social: {
    instagram: "https://www.instagram.com/ajinkyainfotech/",
    linkedin: "https://www.linkedin.com/in/krupeshkanade/"
  }
};

export const NAV_LINKS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: User },
  { name: 'Services', path: '/services', icon: PenTool },
  { name: 'Portfolio', path: '/portfolio', icon: Image },
  { name: 'Contact', path: '/contact', icon: Phone },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rohan & Priya Mehta",
    location: "Mulund West",
    text: "We wanted a sustainable home that felt modern yet cozy. Samiksha's team at S2 Parikalpana transformed our 2BHK completely. The space planning was genius!",
    rating: 5
  },
  {
    id: 2,
    name: "Anjali Deshmukh",
    location: "Dombivli East",
    text: "Professional, timely, and budget-friendly. Being an SNDT alumnus, Samiksha really understands the technicalities of Vastu and design perfectly.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Singh",
    location: "Bhandup",
    text: "The best interior designer in Dombivli for a reason. They managed my office renovation seamlessly. Highly recommended for commercial spaces.",
    rating: 4.5
  }
];

export const SERVICES = [
  {
    id: 1,
    title: "Residential Interiors",
    description: "Full home renovations, modular kitchens, and wardrobe designs tailored for Mumbai apartments.",
    features: ["Space Saving Furniture", "Modular Kitchens", "Master Bedroom Design"]
  },
  {
    id: 2,
    title: "Commercial Design",
    description: "Ergonomic and aesthetic office spaces and retail shops that enhance productivity and customer experience.",
    features: ["Office Layouts", "Retail Shop Design", "Lighting & Acoustics"]
  },
  {
    id: 3,
    title: "Consultation & Vastu",
    description: "Expert guidance on space planning, material selection, and Vastu-compliant layouts.",
    features: ["3D Visualization", "Vastu Shastra", "Material Selection"]
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    category: "Living Room",
    title: "Minimalist Beige Living",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80&w=800",
    location: "Mulund"
  },
  {
    id: 2,
    category: "Modular Kitchen",
    title: "Sage Green Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800",
    location: "Dombivli"
  },
  {
    id: 3,
    category: "Master Bedroom",
    title: "Serene Master Suite",
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?auto=format&fit=crop&q=80&w=800",
    location: "Thane"
  },
  {
    id: 4,
    category: "Living Room",
    title: "Contemporary Lounge",
    image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&q=80&w=800",
    location: "Vikhroli"
  },
  {
    id: 5,
    category: "Master Bedroom",
    title: "Earthy Bedroom Tone",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800",
    location: "Bhandup"
  },
  {
    id: 6,
    category: "Modular Kitchen",
    title: "L-Shaped Modern Kitchen",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&q=80&w=800",
    location: "Dombivli"
  }
];