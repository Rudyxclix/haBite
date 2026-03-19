import { motion } from "motion/react";
import { ArrowRight, Check, Calendar, Star, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export function DietPlans() {
  const plans = [
    {
      id: "weight-loss",
      name: "Weight Loss Journey",
      duration: "7 Days",
      price: 2499,
      description: "Low-carb, high-protein meals designed for sustainable fat loss.",
      features: ["21 Meals total", "Nutritionist consultation", "Progress tracking"],
      popular: true,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-600"
    },
    {
      id: "muscle-gain",
      name: "Muscle Builder Pro",
      duration: "14 Days",
      price: 4499,
      description: "Calorie-dense, nutrient-rich plans to support intense training.",
      features: ["42 Meals total", "Custom macro-split", "Weekly adjustments"],
      color: "from-orange-500/20 to-red-500/20",
      accent: "text-orange-600"
    },
    {
      id: "balanced-life",
      name: "Balanced Wellness",
      duration: "30 Days",
      price: 8499,
      description: "Clean eating for long-term health and vibrant energy levels.",
      features: ["90 Meals total", "Chef's daily variety", "Free delivery"],
      color: "from-sky-500/20 to-indigo-500/20",
      accent: "text-sky-600"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Curated Programs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-foreground mb-6"
          >
            Personalized <span className="text-primary italic">Diet Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Take the guesswork out of nutrition. Our expert-led plans provide complete, balanced meals delivered to your schedule.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-[2rem] md:rounded-[2.5rem] p-6 lg:p-10 border border-border/50 glass shadow-sm group overflow-hidden`}
            >
              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${plan.color} -translate-y-16 translate-x-16 organic-shape blur-2xl transition-transform group-hover:scale-150`}></div>
              
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-primary text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-primary/20 z-20">
                  Most Popular
                </div>
              )}

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                   <Calendar className={`w-4 h-4 md:w-5 md:h-5 ${plan.accent}`} />
                   <span className="text-[10px] md:text-sm font-bold text-muted-foreground uppercase tracking-widest">{plan.duration} Plan</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display leading-tight">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  {plan.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-foreground font-display">₹{plan.price}</span>
                  <span className="text-muted-foreground group">/plan</span>
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className={`w-5 h-5 rounded-full ${plan.accent.replace('text', 'bg')}/10 flex items-center justify-center`}>
                        <Check className={`w-3 h-3 ${plan.accent}`} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/products">
                  <Button className={`w-full py-7 rounded-2xl font-bold bg-primary hover:bg-primary/90 text-white transition-all group-hover:gap-4`}>
                    Choose This Plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 glass rounded-[2rem] border border-border/50 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Not sure which plan is right?</h3>
            <p className="text-muted-foreground">Take our 2-minute nutritional quiz for a personalized recommendation.</p>
          </div>
          <Button variant="outline" className="rounded-2xl px-10 py-6 border-2 font-bold hover:bg-primary hover:text-white transition-all">
            Take the Quiz
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
