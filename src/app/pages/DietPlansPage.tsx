import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Sparkles, Calendar, ArrowRight, Check, Zap, Coffee, Sun, Moon, Utensils } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

export default function DietPlansPage() {
  const [selectedPlanType, setSelectedPlanType] = useState("Goal Based"); // "Goal Based" or "Meal Based"

  const goalPlans = [
    {
      id: "plan-weight-loss",
      name: "Weight Loss Journey",
      category: "Diet Plans",
      price: 2499,
      rating: 4.9,
      meals: "21 Meals / Week",
      protein: "Nutritionist Guided",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600",
      badge: "Best Seller",
      description: "Low-carb, calorie-controlled meals to help you shed weight sustainably."
    },
    {
      id: "plan-muscle-gain",
      name: "Muscle Builder Pro",
      category: "Diet Plans",
      price: 4999,
      rating: 5.0,
      meals: "42 Meals / Week",
      protein: "Macro-tracked",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      badge: "High Protein",
      description: "High-protein, nutrient-dense meals with surplus calories for muscle growth."
    },
    {
      id: "plan-balanced-life",
      name: "Balanced Wellness",
      category: "Diet Plans",
      price: 8499,
      rating: 4.9,
      meals: "90 Meals / Month",
      protein: "Chef's Daily Variety",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
      badge: "Full Experience",
      description: "Clean eating for long-term health and consistent energy throughout the day."
    }
  ];

  const mealSubscriptions = [
    {
      id: "sub-breakfast",
      name: "Breakfast Only",
      icon: Coffee,
      price: 999,
      period: "Weekly",
      items: "7 Meals",
      desc: "Start your day with high-energy morning bowls.",
      color: "bg-orange-500/10 text-orange-600"
    },
    {
      id: "sub-lunch",
      name: "Lunch Only",
      icon: Sun,
      price: 1499,
      period: "Weekly",
      items: "7 Meals",
      desc: "Healthy, satisfying lunches delivered to your work.",
      color: "bg-yellow-500/10 text-yellow-600"
    },
    {
      id: "sub-dinner",
      name: "Dinner Only",
      icon: Moon,
      price: 1499,
      period: "Weekly",
      items: "7 Meals",
      desc: "Light yet nutritious dinners for better sleep.",
      color: "bg-indigo-500/10 text-indigo-600"
    },
    {
       id: "sub-full",
       name: "Full Day Subscription",
       icon: Utensils,
       price: 3499,
       period: "Weekly",
       items: "21 Meals",
       desc: "Breakfast + Lunch + Dinner for complete wellness.",
       color: "bg-primary/10 text-primary",
       popular: true
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Background Blobs */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 organic-shape blur-xl md:blur-3xl -z-0 animate-pulse opacity-40 md:opacity-100"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] bg-accent/5 organic-shape blur-xl md:blur-3xl -z-0 animate-pulse delay-700 opacity-40 md:opacity-100"></div>

      <Header />
      
      <main className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Calendar className="w-4 h-4" />
            Subscription Program
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-display leading-tight">
            Personalized <span className="text-primary italic">Diet Plans</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Commit to your wellness journey with our flexible subscription plans. From specific body goals to full-day meal coverage.
          </p>

          <div className="flex items-center justify-center p-1.5 bg-secondary rounded-3xl w-fit mx-auto shadow-inner border border-border/50">
            {["Goal Based", "Meal Subscriptions"].map(type => (
               <button
                 key={type}
                 onClick={() => setSelectedPlanType(type)}
                 className={`px-8 py-3.5 rounded-2xl font-bold transition-all duration-300 ${
                   selectedPlanType === type 
                   ? "bg-white text-primary shadow-lg scale-105" 
                   : "text-muted-foreground hover:text-foreground"
                 }`}
               >
                 {type}
               </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {selectedPlanType === "Goal Based" ? (
            <motion.div
              key="goals"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="grid gap-8 lg:grid-cols-3"
            >
              {goalPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -12 }}
                  className="group bg-white rounded-[3rem] p-8 md:p-10 border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 organic-shape -translate-y-16 translate-x-16 blur-2xl group-hover:scale-150 transition-transform"></div>
                  
                  {plan.badge && (
                    <div className="absolute top-8 right-8 bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
                      {plan.badge}
                    </div>
                  )}

                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-20 h-20 rounded-[2rem] overflow-hidden mb-8 shadow-lg ring-4 ring-primary/5">
                       <ImageWithFallback src={plan.image} alt={plan.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground font-display mb-4 group-hover:text-primary transition-colors">{plan.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">{plan.description}</p>
                    
                    <div className="space-y-4 mb-10">
                       <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                         <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Check className="w-3.5 h-3.5 text-primary" />
                         </div>
                         {plan.meals}
                       </div>
                       <div className="flex items-center gap-3 text-sm font-bold text-foreground">
                         <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <Zap className="w-3.5 h-3.5 text-primary" />
                         </div>
                         {plan.protein}
                       </div>
                    </div>

                    <div className="flex items-baseline gap-1 mb-10">
                      <span className="text-5xl font-bold text-foreground font-display">₹{plan.price}</span>
                      <span className="text-muted-foreground font-medium">/week</span>
                    </div>

                    <Button className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 group-hover:gap-4 transition-all">
                      Choose Plan
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="meals"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
               {mealSubscriptions.map((sub, index) => {
                 const Icon = sub.icon;
                 return (
                    <motion.div
                      key={sub.id}
                      whileHover={{ scale: 1.05 }}
                      className={`relative glass rounded-[2.5rem] p-8 border ${sub.popular ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'} flex flex-col h-full group`}
                    >
                      {sub.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                          Most Comprehensive
                        </div>
                      )}
                      
                      <div className={`w-14 h-14 rounded-2xl ${sub.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground font-display mb-2">{sub.name}</h3>
                      <p className="text-muted-foreground text-sm font-medium mb-8 flex-grow">{sub.desc}</p>
                      
                      <div className="space-y-4 mb-8">
                         <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            <span>Includes</span>
                            <span className="text-foreground">{sub.items}</span>
                         </div>
                         <div className="h-1 bg-secondary rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                         </div>
                      </div>

                      <div className="mb-8">
                         <div className="text-3xl font-bold text-foreground font-display">₹{sub.price}</div>
                         <div className="text-xs font-medium text-muted-foreground">Per Week</div>
                      </div>

                      <Button className={`w-full h-14 rounded-2xl font-bold ${sub.popular ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'variant-outline border-2'}`}>
                        Subscribe
                      </Button>
                    </motion.div>
                 );
               })}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
