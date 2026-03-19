import { Menu, ShoppingBag, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from "react-router";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Only apply to mobile
    if (window.innerWidth < 768) {
      if (latest > previous && latest > 150) {
        setHidden(true); // Hide on scroll down
      } else if (latest < previous) {
        setHidden(false); // Reveal on scroll up
      }
    } else {
      setHidden(false); // Always show on desktop
    }
  });

  const navLinks = [
    { name: "Diet Plan", href: "/diet-plan" },
    { name: "Diet Bowls", href: "/diet-bowls" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <>
      <motion.header 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 bg-white/80 md:bg-white/95 backdrop-blur-md md:backdrop-blur-xl z-50 border-b border-border shadow-sm transition-all"
      >
        <div className="container mx-auto px-4 py-0.5 md:py-3 flex items-center justify-between max-w-7xl">
          <Link to="/" className="flex items-center group -ml-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 md:h-18 w-auto flex items-center overflow-visible"
            >
              <img 
                src="/assets/logo/habite-logo.png" 
                alt="Habite Logo" 
                className="h-full w-auto object-contain scale-[3.0] origin-left"
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
                  className="text-sm text-foreground hover:text-primary transition-colors relative group font-bold tracking-tight"
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <Link to="/cart">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <ShoppingBag className="w-5 h-5 text-foreground" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/login" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="rounded-full px-5 border-2 text-sm font-bold">
                  Sign In
                </Button>
              </motion.div>
            </Link>
            <Link to="/products" className="hidden md:block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-sm font-bold">
                  Order Now
                </Button>
              </motion.div>
            </Link>

            <button 
              className="md:hidden flex flex-col gap-1.5 p-3.5 -mr-1 items-end group bg-white shadow-sm border border-border/50 rounded-2xl active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <motion.div 
                animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-7 h-0.5 bg-foreground rounded-full"
              />
              <motion.div 
                animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                className="w-4 h-0.5 bg-primary rounded-full"
              />
              <motion.div 
                animate={isMobileMenuOpen ? { rotate: -45, y: -8, width: 28 } : { rotate: 0, y: 0, width: 18 }}
                className="w-[18px] h-0.5 bg-foreground rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] md:hidden flex flex-col shadow-2xl"
            style={{ backgroundColor: "white", opacity: 1 }}
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-border/10">
              <img 
                src="/assets/logo/habite-logo.png" 
                alt="Habite Logo" 
                className="h-20 w-auto object-contain scale-[3.2] origin-left ml-4"
              />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 bg-secondary/50 rounded-2xl"
              >
                <X className="w-8 h-8 text-foreground" />
              </button>
            </div>
            
            <nav className="flex-grow flex flex-col justify-center px-8 space-y-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-bold text-foreground hover:text-primary transition-colors font-display"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-8 border-t border-border/10 space-y-4">
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <Button className="w-full h-16 bg-primary text-white rounded-2xl text-xl font-bold text-center flex items-center justify-center">
                  Order Now
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block">
                <Button variant="outline" className="w-full h-16 rounded-2xl text-lg font-bold border-2">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}