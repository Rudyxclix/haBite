import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, Star, Flame, Drumstick, ShoppingCart, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function DietBowlsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Weight Loss", "Muscle Gain", "Balanced", "Vegan", "Keto"];

  const products = [
    {
      id: 1,
      name: "Protein Power Bowl",
      category: "Muscle Gain",
      price: 299,
      rating: 4.9,
      calories: "520 cal",
      protein: "42g protein",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      badge: "Popular",
    },
    {
      id: 2,
      name: "Green Detox Bowl",
      category: "Weight Loss",
      price: 249,
      rating: 4.8,
      calories: "350 cal",
      protein: "18g protein",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      badge: "New",
    },
    {
      id: 3,
      name: "Mediterranean Feast",
      category: "Balanced",
      price: 329,
      rating: 4.9,
      calories: "480 cal",
      protein: "32g protein",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600",
    },
    {
      id: 4,
      name: "Keto Buddha Bowl",
      category: "Keto",
      price: 349,
      rating: 4.7,
      calories: "520 cal",
      protein: "38g protein",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600",
      badge: "Chef's Pick",
    },
    {
      id: 5,
      name: "Vegan Power Plate",
      category: "Vegan",
      price: 279,
      rating: 4.8,
      calories: "420 cal",
      protein: "25g protein",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
    },
    {
      id: 6,
      name: "Grilled Salmon Bowl",
      category: "Muscle Gain",
      price: 449,
      rating: 5.0,
      calories: "580 cal",
      protein: "45g protein",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      badge: "Bestseller",
    },
  ];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-sans">
      {/* Background Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/5 organic-shape blur-3xl -z-0"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] bg-accent/5 organic-shape blur-3xl -z-0"></div>

      <Header />
      
      <main className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Order Anytime
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-display">
            Diet <span className="text-primary italic">Bowls</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Fresh, chef-crafted healthy bowls delivered to your doorstep. Order individual meals to fit your schedule.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-6 mb-12"
        >
          <div className="flex-1 relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="Search healthy bowls..."
              className="pl-14 h-14 rounded-2xl border-border/50 bg-white shadow-sm focus:ring-primary/20 transition-all"
            />
          </div>
          <Button variant="outline" className="rounded-2xl border-border/50 h-14 px-8 font-bold hover:bg-secondary">
            <Filter className="w-5 h-5 mr-3" />
            Refine Results
          </Button>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 overflow-x-auto pb-6 mb-12 scrollbar-hide"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3.5 rounded-2xl font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                  : "bg-white text-muted-foreground hover:bg-secondary hover:text-foreground border border-border/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group bg-white/80 backdrop-blur-sm rounded-[2.5rem] overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
              >
                <Link to={`/product/${product.id}`}>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {product.badge && (
                      <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-accent/20">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="min-w-0">
                        <h3 className="font-bold text-xl md:text-2xl text-foreground font-display group-hover:text-primary transition-colors truncate">
                          {product.name}
                        </h3>
                        <p className="text-[10px] md:text-sm font-bold text-primary/60 uppercase tracking-widest mt-1">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl md:text-2xl font-bold text-foreground font-display">₹{product.price}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground mb-8">
                      <div className="flex items-center gap-2">
                         <Flame className="w-4 h-4 text-orange-500" />
                         <span className="tracking-tight">{product.calories}</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <Drumstick className="w-4 h-4 text-emerald-600" />
                         <span className="tracking-tight">{product.protein}</span>
                      </div>
                    </div>

                    <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold group-hover:gap-4 transition-all shadow-lg shadow-primary/10">
                      Add to Cart
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}
