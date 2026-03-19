import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, ArrowUp, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative bg-[#0A0A0A] text-white pt-4 pb-2 border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Main Footer Row: Vertically Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20 mb-4 items-center">
          
          {/* Column 1: Brand (Tallest) */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block md:-ml-6 flex md:block justify-center overflow-visible group">
               <motion.img 
                 whileHover={{ scale: 1.05 }}
                 src="/assets/logo/habite-logo.png" 
                 alt="Habite Logo" 
                 className="h-20 w-auto object-contain scale-[2.6] origin-center md:origin-left drop-shadow-[0_0_15px_rgba(59,170,93,0.3)]" 
               />
            </Link>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-xs font-medium">
              Elevating daily nutrition through organic precision. Fresh healthy bowls and personalized plans delivered in Kozhikode.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/habiteofficial/" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, backgroundColor: "#3BAA5D", borderColor: "#3BAA5D" }}
                  className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 bg-white/5 hover:text-white"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Navigation Block (Columns 2-4): Grouped for Top Alignment internally */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8 items-start">
            
            {/* Explore Hub */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="h-1 w-4 bg-primary rounded-full hidden md:block" />
                Explore
                <div className="h-1 w-4 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-2.5 text-[15px] text-white/60">
                {[
                  { name: "Subscription Plans", href: "/diet-plan" },
                  { name: "Instant Diet Bowls", href: "/diet-bowls" },
                  { name: "Our Story", href: "/about" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="flex items-center justify-center gap-2 hover:text-primary transition-all group">
                      <ArrowRight className="w-0 h-4 group-hover:w-4 transition-all opacity-0 group-hover:opacity-100 text-primary" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Concierge Hub */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="h-1 w-4 bg-primary rounded-full hidden md:block" />
                Concierge
                <div className="h-1 w-4 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-2.5 text-[15px] text-white/60">
                {[
                  { name: "Contact Support", href: "/contact" },
                  { name: "Track Order", href: "/dashboard/orders" },
                  { name: "Privacy & Terms", href: "#" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:text-primary transition-all">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Location Hub */}
            <div className="flex flex-col items-center text-center">
              <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                <div className="h-1 w-4 bg-primary rounded-full hidden md:block" />
                Location
                <div className="h-1 w-4 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-4 text-[15px] text-white/60">
                <li className="flex flex-col items-center gap-1.5">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                  <span className="leading-tight max-w-[220px]">Habite Kitchen, Bypass Road, Kozhikode, KL 673001</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40 font-medium">
            © 2026 Habite. Crafted for healthy living in India.
          </p>
          
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="flex items-center gap-2 text-sm font-bold text-white/60 hover:text-primary transition-colors py-2 px-4 rounded-full bg-white/5 border border-white/5"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}