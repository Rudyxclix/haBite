import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-bold text-xl">Habite</span>
            </Link>
            <p className="text-white/70 text-sm">
              The Art of Healthy Eating. Premium diet bowls and meal plans for your body goals.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/habiteofficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/products" className="hover:text-primary transition-colors">Diet Bowls</Link></li>
              <li><Link to="/products" className="hover:text-primary transition-colors">Meal Plans</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/dashboard/orders" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>Habite Kitchen, bypass Road, Kozhikode, Kerala 673001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary" />
                <span>hello@habite.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2026 Habite. All rights reserved.</p>
          <p>Made with ❤️ for healthy living</p>
        </div>
      </div>
    </footer>
  );
}