import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Calendar, ArrowRight, Utensils, Zap, Clock, ShieldCheck, Leaf } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function Products() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/5 organic-shape blur-2xl md:blur-3xl -z-0 animate-pulse opacity-50 md:opacity-100"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[35vw] h-[35vw] bg-accent/5 organic-shape blur-xl md:blur-3xl -z-0 animate-pulse delay-700 opacity-50 md:opacity-100"></div>

      <Header />
      
      <main className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        {/* Hub Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 relative"
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div 
              className="absolute inset-0 bg-primary/20 rounded-full blur-2xl md:blur-3xl"
              style={{ willChange: "transform" }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <Sparkles className="w-4 h-4" />
            The Habite Menu
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-display leading-tight">
            How would you like to <br />
            <span className="text-primary italic text-6xl md:text-8xl">Start?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for long-term body transformation or a single healthy meal today, we've got you covered.
          </p>
        </motion.div>

        {/* Hub Cards */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-stretch">
          
          {/* Diet Plans Hub */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <Link to="/diet-plan" className="block outline-none flex-grow h-full">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-border/40 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-700 overflow-hidden relative h-full flex flex-col group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 organic-shape -translate-y-24 translate-x-24 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                    <Calendar className="w-10 h-10 text-primary" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-6 group-hover:text-primary transition-colors">
                    Diet <span className="italic">Plans</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
                    Structured subscription programs for consistent results. Choose from Weight Loss, Muscle Gain, or Healthy Life goals.
                  </p>

                  <ul className="space-y-4 mb-20">
                    {[
                      { icon: ShieldCheck, text: "Curated by Nutritionists" },
                      { icon: Zap, text: "Goal-Oriented Results" },
                      { icon: Sparkles, text: "Saves 15% on average" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-foreground font-bold">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto">
                  <Button className="w-full h-20 bg-primary hover:bg-primary/90 text-white rounded-3xl font-bold text-xl shadow-xl shadow-primary/20 group-hover:gap-6 transition-all">
                    Explore Plans
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Diet Bowls Hub */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <Link to="/diet-bowls" className="block outline-none flex-grow h-full">
              <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-border/40 shadow-sm group-hover:shadow-2xl group-hover:shadow-accent/10 transition-all duration-700 overflow-hidden relative h-full flex flex-col group">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 organic-shape translate-y-24 -translate-x-24 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex-grow">
                  <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                    <Utensils className="w-10 h-10 text-accent" />
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground font-display mb-6 group-hover:text-accent transition-colors">
                    Diet <span className="italic">Bowls</span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
                    Order individual chef-crafted bowls anytime. Perfect for a healthy lunch at work or a fresh dinner at home.
                  </p>

                  <ul className="space-y-4 mb-20">
                    {[
                      { icon: Clock, text: "Instant Kozhikode Delivery" },
                      { icon: Leaf, text: "Fresh Organic Ingredients" },
                      { icon: Utensils, text: "No Commitment Needed" }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-foreground font-bold">
                        <div className="w-8 h-8 rounded-full bg-accent/5 flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-accent" />
                        </div>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-auto">
                  <Button className="w-full h-20 bg-accent hover:bg-accent/90 text-white rounded-3xl font-bold text-xl shadow-xl shadow-accent/20 group-hover:gap-6 transition-all">
                    Order a Bowl
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
