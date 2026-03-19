import { TrendingDown, TrendingUp, Activity, Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "motion/react";

export function BodyGoalPlans() {
  const plans = [
    {
      icon: TrendingDown,
      title: "Weight Loss Plan",
      description: "Calorie-controlled meals designed to help you shed pounds healthily",
      color: "bg-primary",
      benefits: [
        "1200-1500 calories per day",
        "High fiber & low carbs",
        "Weekly nutritionist check-in",
        "Portion-controlled meals"
      ]
    },
    {
      icon: TrendingUp,
      title: "Muscle Gain Plan",
      description: "High-protein meals to fuel your workouts and build lean muscle",
      color: "bg-accent",
      benefits: [
        "2000-2500 calories per day",
        "40-50g protein per meal",
        "Pre & post-workout meals",
        "Mass-building nutrients"
      ]
    },
    {
      icon: Activity,
      title: "Balanced Diet Plan",
      description: "Perfectly balanced nutrition for overall health and wellness",
      color: "bg-[#3BAA5D]",
      benefits: [
        "1600-1800 calories per day",
        "Macro-balanced meals",
        "Variety of ingredients",
        "Sustainable lifestyle"
      ]
    }
  ];

  return (
    <section id="plans" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Body Goal Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Customized meal plans tailored to your fitness goals
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-secondary to-white rounded-3xl p-8 space-y-6 border border-border relative overflow-hidden"
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(59, 170, 93, 0.15)"
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 h-16 ${plan.color} rounded-2xl flex items-center justify-center mb-4`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <plan.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>
                
                <div className="space-y-3 relative z-10">
                  {plan.benefits.map((benefit, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.15 + i * 0.1,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10"
                >
                  <Button className="w-full bg-foreground hover:bg-foreground/90 text-white rounded-full py-6">
                    Choose Plan
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}