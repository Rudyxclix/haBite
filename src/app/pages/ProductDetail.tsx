import { useState } from "react";
import { motion } from "motion/react";
import { Star, Minus, Plus, ShoppingCart, Heart, Share2, Flame, Drumstick, Apple, Clock } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Regular");

  const product = {
    name: "Protein Power Bowl",
    price: 12.99,
    rating: 4.9,
    reviews: 234,
    calories: 520,
    protein: 42,
    carbs: 38,
    fat: 18,
    prepTime: 15,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    description: "Our signature Protein Power Bowl is packed with lean chicken breast, quinoa, fresh vegetables, and a zesty lime dressing. Perfect for post-workout recovery or a filling lunch.",
    ingredients: ["Grilled Chicken Breast", "Quinoa", "Avocado", "Cherry Tomatoes", "Spinach", "Lime Dressing"],
    allergens: ["Gluten-Free", "Dairy-Free"],
  };

  const sizes = [
    { name: "Regular", multiplier: 1 },
    { name: "Large", multiplier: 1.5 },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart className="w-6 h-6 text-primary" />
              </motion.button>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Bestseller
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-accent text-accent" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-3">{product.name}</h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Nutritional Info</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { icon: Flame, label: "Calories", value: product.calories, color: "text-orange-500" },
                  { icon: Drumstick, label: "Protein", value: `${product.protein}g`, color: "text-green-600" },
                  { icon: Apple, label: "Carbs", value: `${product.carbs}g`, color: "text-blue-600" },
                  { icon: Clock, label: "Prep", value: `${product.prepTime}m`, color: "text-purple-600" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="text-center">
                      <Icon className={`w-6 h-6 mx-auto mb-1 ${item.color}`} />
                      <div className="text-sm font-semibold text-foreground">{item.value}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Select Size</h3>
                <div className="grid grid-cols-2 gap-3">
                  {sizes.map((size) => (
                    <motion.button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedSize === size.name
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="font-semibold text-foreground">{size.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ${(product.price * size.multiplier).toFixed(2)}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <div className="px-6 py-3 font-semibold text-foreground">{quantity}</div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    ${(product.price * quantity * (sizes.find(s => s.name === selectedSize)?.multiplier || 1)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link to="/cart" className="flex-1">
                <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-xl text-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </Link>
              <Button variant="outline" className="h-14 px-6 rounded-xl border-2">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
              <h4 className="font-semibold text-foreground">Ingredients</h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <span key={ingredient} className="bg-white px-3 py-1 rounded-full text-sm text-foreground border border-border">
                    {ingredient}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-3">
                {product.allergens.map((allergen) => (
                  <span key={allergen} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    {allergen}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
