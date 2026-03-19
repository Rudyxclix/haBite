import { ShoppingCart, Flame, Drumstick } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function DietBowls() {
  const bowls = [
    {
      name: "Power Protein Bowl",
      description: "Grilled chicken, quinoa, avocado, and mixed greens",
      image: "https://images.unsplash.com/photo-1696824818288-a5cc5a93b6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZ3JhaW4lMjBib3dsfGVufDF8fHx8MTc3MjgyOTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      protein: "42g",
      calories: "520",
      price: "₹299",
      badge: "Popular"
    },
    {
      name: "Green Goddess Bowl",
      description: "Kale, edamame, cucumber, and tahini dressing",
      image: "https://images.unsplash.com/photo-1679279726937-122c49626802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcXVpbm9hJTIwYm93bHxlbnwxfHx8fDE3NzI4MjkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      protein: "28g",
      calories: "420",
      price: "₹249",
      badge: "Vegan"
    },
    {
      name: "Salmon Supreme Bowl",
      description: "Fresh salmon, brown rice, roasted vegetables",
      image: "https://images.unsplash.com/photo-1734313276347-abd532a3ed13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxtb24lMjBib3dsJTIwZnJlc2h8ZW58MXx8fHwxNzcyODI5MzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      protein: "38g",
      calories: "580",
      price: "₹349",
      badge: "High Protein"
    },
    {
      name: "Mediterranean Bowl",
      description: "Chickpeas, feta, olives, tomatoes, hummus",
      image: "https://images.unsplash.com/photo-1633862472152-e3873eb1b3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcG9rZSUyMGJvd2wlMjBhdm9jYWRvfGVufDF8fHx8MTc3MjgyOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      protein: "24g",
      calories: "460",
      price: "₹279",
      badge: "Best Value"
    }
  ];

  return (
    <section id="bowls" className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Popular Diet Bowls
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted bowls packed with nutrition and flavor
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bowls.map((bowl, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-md"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden aspect-square">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={bowl.image}
                      alt={bowl.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                      {bowl.badge}
                    </span>
                  </motion.div>
                </div>
                
                <div className="p-5 space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {bowl.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {bowl.description}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-4 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1 + 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <div className="flex items-center gap-1 text-primary">
                      <Drumstick className="w-4 h-4" />
                      <span className="font-medium">{bowl.protein}</span>
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      <Flame className="w-4 h-4" />
                      <span className="font-medium">{bowl.calories}</span>
                    </div>
                  </motion.div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xl md:text-2xl font-bold text-foreground font-display">
                      {bowl.price}
                    </span>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-xl px-4 md:px-6 h-9 md:h-10 text-xs md:text-sm font-bold shadow-lg shadow-primary/10">
                        <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1.5" />
                        Add
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}