import { Menu, ShoppingBag, User } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Link } from "react-router";

export function Header() {
  return (
    <motion.header 
      className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link to="/">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">H</span>
            </div>
            <span className="font-bold text-lg text-foreground">Habite</span>
          </motion.div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Diet Bowls", href: "/products" },
            { name: "About", href: "/about" },
            { name: "FAQ", href: "/faq" },
            { name: "Contact", href: "/contact" }
          ].map((item, index) => (
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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingBag className="w-5 h-5" />
            </Button>
          </motion.div>
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6">
              Order Now
            </Button>
          </motion.div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}