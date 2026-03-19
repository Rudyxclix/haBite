import { useState } from "react";
import { motion } from "motion/react";
import { Minus, Plus, X, ArrowRight, ShoppingBag, Tag } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Protein Power Bowl",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    },
    {
      id: 2,
      name: "Green Detox Bowl",
      price: 10.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">{cartItems.length} items in your cart</p>
        </motion.div>

        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-white rounded-2xl border border-border"
          >
            <ShoppingBag className="w-24 h-24 mx-auto mb-4 text-muted-foreground opacity-20" />
            <h2 className="text-2xl font-bold text-foreground mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">Add some delicious meals to get started!</p>
            <Link to="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl">
                Browse Meals
              </Button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-border flex items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">{item.name}</h3>
                    <p className="text-primary font-semibold">${item.price.toFixed(2)}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border-2 border-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <div className="px-4 py-2 font-semibold min-w-[3rem] text-center">{item.quantity}</div>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-secondary transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="text-xl font-bold text-foreground min-w-[5rem] text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      onClick={() => updateQuantity(item.id, 0)}
                      className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-6 border border-border sticky top-24 space-y-6">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-border my-4"></div>
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Promo Code</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="rounded-xl border-2"
                    />
                    <Button variant="outline" className="rounded-xl border-2">
                      <Tag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl group">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link to="/products" className="block text-center text-sm text-primary hover:underline">
                  Continue Shopping
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
