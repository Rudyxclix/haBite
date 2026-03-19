import { Leaf, Award, Users, CalendarCheck } from "lucide-react";
import { motion } from "motion/react";

export function WhyChoose() {
  const features = [
    {
      icon: Leaf,
      title: "High Protein Meals",
      description: "Every meal packed with 25-50g of lean protein to fuel your body"
    },
    {
      icon: Award,
      title: "Fresh Ingredients",
      description: "Locally sourced, organic produce delivered fresh daily"
    },
    {
      icon: Users,
      title: "Nutritionist Approved",
      description: "Designed by certified nutritionists and dietitians"
    },
    {
      icon: CalendarCheck,
      title: "Goal-based Diet Plans",
      description: "Personalized meal plans aligned with your fitness goals"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/30 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Habite
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making healthy eating effortless
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="text-center space-y-4 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="relative inline-block">
                <motion.div 
                  className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-10 h-10 text-primary" />
                  </motion.div>
                </motion.div>
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:bg-primary/10 transition-colors"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
