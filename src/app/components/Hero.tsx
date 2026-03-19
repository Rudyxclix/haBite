import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-secondary to-white py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div 
            className="space-y-6 md:space-y-8 text-center md:text-left"
            style={{ opacity }}
          >
            <div className="space-y-3 md:space-y-4">
              <motion.div 
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Premium Healthy Meals</span>
              </motion.div>
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] font-display"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Your <span className="italic text-primary">Personalized</span>
                <br />
                Diet Plans.
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Experience the perfect blend of nutritional science and culinary art. Expert diet plans paired with chef-crafted healthy bowls.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 170, 93, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg group">
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-2 hover:border-primary hover:text-primary">
                  Get Your Meal Plan
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-8 justify-center md:justify-start pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">4.9</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Fresh Daily</div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ scale: imageScale }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1633862472152-e3873eb1b3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcG9rZSUyMGJvd2wlMjBhdm9jYWRvfGVufDF8fHx8MTc3MjgyOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthy poke bowl"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 hidden md:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-xl">🥗</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">520 Cal</div>
                  <div className="text-sm text-muted-foreground">35g Protein</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}