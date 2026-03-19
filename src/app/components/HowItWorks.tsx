import { Target, UtensilsCrossed, Truck } from "lucide-react";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: Target,
      title: "Select Your Plan",
      description: "Choose from weight loss, muscle gain, or balanced nutrition plans based on your goals.",
      number: "01"
    },
    {
      icon: UtensilsCrossed,
      title: "Customize Your Menu",
      description: "Explore our chef-crafted bowls and pick your favorites to match your plan.",
      number: "02"
    },
    {
      icon: Truck,
      title: "Fresh Daily Delivery",
      description: "Receive fresh, ready-to-eat meals at your doorstep daily as per your plan.",
      number: "03"
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started with your healthy eating journey is simple
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div 
                className="bg-secondary/50 rounded-3xl p-8 text-center space-y-6 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative inline-block">
                  <motion.div 
                    className="w-20 h-20 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.2 + 0.4,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    {step.number}
                  </motion.div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}