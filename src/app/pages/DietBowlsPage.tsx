import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, Star, Flame, Drumstick, ShoppingCart, Sparkles, ArrowRight, X, Plus, Info, Leaf, Zap } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function DietBowlsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All", icon: Sparkles },
    { name: "Weight Loss", icon: Leaf },
    { name: "Muscle Gain", icon: Zap },
    { name: "Balanced", icon: Star },
    { name: "Vegan", icon: Leaf },
    { name: "Keto", icon: Flame }
  ];

  const products = [
    {
      id: 1,
      name: "Protein Power Bowl",
      category: "Muscle Gain",
      price: 299,
      rating: 4.9,
      calories: 520,
      protein: 42,
      carbs: 35,
      fat: 12,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      badge: "Popular in Kozhikode",
      desc: "Grilled chicken, quinoa, and avocado with lemon-tahini dressing."
    },
    {
      id: 2,
      name: "Green Detox Bowl",
      category: "Weight Loss",
      price: 249,
      rating: 4.8,
      calories: 350,
      protein: 18,
      carbs: 45,
      fat: 8,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      badge: "New Launch",
      desc: "Kale, spinach, cucumber, and chickpeas with zesty lime."
    },
    {
      id: 3,
      name: "Mediterranean Feast",
      category: "Balanced",
      price: 329,
      rating: 4.9,
      calories: 480,
      protein: 32,
      carbs: 40,
      fat: 15,
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
      desc: "Hummus, falafel, olives, and feta with whole wheat pita."
    },
    {
      id: 4,
      name: "Keto Buddha Bowl",
      category: "Keto",
      price: 349,
      rating: 4.7,
      calories: 520,
      protein: 38,
      carbs: 8,
      fat: 35,
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600",
      badge: "Chef's Choice",
      desc: "Cauliflower rice, paneer, and keto-friendly greens."
    },
    {
      id: 5,
      name: "Vegan Power Plate",
      category: "Vegan",
      price: 279,
      rating: 4.8,
      calories: 420,
      protein: 25,
      carbs: 55,
      fat: 10,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      desc: "Tofu, brown rice, and seasonal Kerala vegetables."
    },
    {
      id: 6,
      name: "Grilled Salmon Bowl",
      category: "Muscle Gain",
      price: 449,
      rating: 5.0,
      calories: 580,
      protein: 45,
      carbs: 30,
      fat: 22,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      badge: "Premium Choice",
      desc: "Atlantic salmon, wild rice, and roasted asparagus."
    },
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* Dynamic Background */}
      <div className="fixed top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-primary/5 organic-shape blur-xl md:blur-[120px] -z-0 animate-pulse opacity-40 md:opacity-100"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-xl md:blur-[100px] -z-0 animate-pulse delay-700 opacity-40 md:opacity-100"></div>

      <Header />
      
      <main className="container mx-auto px-6 py-12 md:py-20 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28 space-y-10">
              <div>
                <h3 className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6 ml-2">Categories</h3>
                <nav className="space-y-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all duration-300 group ${
                          selectedCategory === cat.name
                            ? "bg-white text-primary shadow-xl shadow-primary/5 border border-primary/10 translate-x-2"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/50"
                        }`}
                      >
                        <div className={`p-2 rounded-xl transition-colors ${selectedCategory === cat.name ? "bg-primary/10" : "bg-secondary group-hover:bg-white"}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        {cat.name}
                      </button>
                    );
                  })}
                </nav>
              </div>

              <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-3 text-primary mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span className="text-xs font-bold uppercase tracking-wider">Live in Kozhikode</span>
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  <span className="font-bold">12 people</span> are browsing healthy bowls right now.
                </p>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4"
                >
                  <Sparkles className="w-4 h-4" />
                  Premium Collection
                </motion.div>
                <h1 className="text-4xl md:text-6xl font-bold text-foreground font-display leading-tight">
                  Fuel Your Body with <br />
                  <span className="text-primary italic">Organic Bowls</span>
                </h1>
              </div>

              <div className="relative group w-full md:w-80">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  type="search"
                  placeholder="Search bowls..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 h-16 rounded-2xl border-none bg-white shadow-xl shadow-black/5 focus:ring-primary/20 transition-all text-lg font-medium"
                />
              </div>
            </div>

            {/* Mobile Categories - Horizontal Scroll */}
            <div className="lg:hidden overflow-x-auto pb-8 mb-8 flex gap-3 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.name
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-muted-foreground border border-border/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-border/40 shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all duration-700">
                      {/* Image Frame */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <ImageWithFallback
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity"></div>
                        
                        {product.badge && (
                          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                            {product.badge}
                          </div>
                        )}

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shadow-xl shadow-primary/30 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                        >
                          <Plus className="w-6 h-6" />
                        </motion.button>
                      </div>

                      {/* Content Area */}
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors pr-4">
                            {product.name}
                          </h3>
                          <div className="text-2xl font-bold text-foreground font-display">₹{product.price}</div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                          {product.desc}
                        </p>

                        {/* Nutrition Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          <div className="p-4 rounded-2xl bg-orange-500/5 flex items-center gap-3">
                            <Flame className="w-4 h-4 text-orange-500" />
                            <div>
                              <div className="text-[10px] font-bold text-orange-600 uppercase tracking-wider">Calories</div>
                              <div className="text-sm font-bold text-foreground">{product.calories} kcal</div>
                            </div>
                          </div>
                          <div className="p-4 rounded-2xl bg-emerald-500/5 flex items-center gap-3">
                            <Drumstick className="w-4 h-4 text-emerald-600" />
                            <div>
                              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Protein</div>
                              <div className="text-sm font-bold text-foreground">{product.protein}g</div>
                            </div>
                          </div>
                        </div>

                        <Link to={`/product/${product.id}`}>
                           <Button variant="ghost" className="w-full text-primary font-bold hover:bg-primary/5 rounded-xl group/btn">
                             View Details
                             <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                           </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground font-display mb-2">No bowls found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
                <Button 
                  onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                  variant="link" 
                  className="mt-4 text-primary font-bold"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
