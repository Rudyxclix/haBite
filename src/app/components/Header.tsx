import { Menu, ShoppingBag, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Diet Plan", href: "/diet-plan" },
    { name: "Diet Bowls", href: "/diet-bowls" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <motion.header 
      className="sticky top-0 bg-white/80 md:bg-white/95 backdrop-blur-md md:backdrop-blur-xl z-50 border-b border-border shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link to="/" className="flex items-center group -ml-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-16 md:h-20 w-auto flex items-center overflow-visible"
          >
            <img 
              src="/assets/logo/habite-logo.png" 
              alt="Habite Logo" 
              className="h-full w-auto object-contain scale-[2.8] origin-left"
            />
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item, index) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.href}
                className="text-sm text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <ShoppingBag className="w-5 h-5" />
              </Button>
            </motion.div>
          </Link>
          <Link to="/login">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="hidden md:flex rounded-full px-5 border-2">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </motion.div>
          </Link>
          <Link to="/products">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Order Now
              </Button>
            </motion.div>
          </Link>

          <button 
            className="md:hidden p-3 -mr-2 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8 text-foreground" /> : <Menu className="w-8 h-8 text-foreground" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-t border-border bg-white overflow-hidden"
          >
            <div className="p-6 space-y-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-2">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full rounded-full py-6 border-2">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Button className="w-full bg-primary text-white rounded-full py-6">
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}