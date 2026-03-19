import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, MapPin, User, Mail, Phone, Lock } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Link, useNavigate } from "react-router";

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handlePlaceOrder = () => {
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                  step >= s ? "bg-primary text-white" : "bg-border text-muted-foreground"
                }`}>
                  {s}
                </div>
                {s < 3 && <div className={`flex-1 h-1 ${step > s ? "bg-primary" : "bg-border"}`}></div>}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Delivery Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="John Doe" className="pl-11 h-11 rounded-xl border-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input type="email" placeholder="you@example.com" className="pl-11 h-11 rounded-xl border-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="+1 (555) 000-0000" className="pl-11 h-11 rounded-xl border-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>ZIP Code</Label>
                  <Input placeholder="12345" className="h-11 rounded-xl border-2" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label>Street Address</Label>
                  <Input placeholder="123 Main St, Apt 4B" className="h-11 rounded-xl border-2" />
                </div>
              </div>
            </motion.div>

            {/* Payment Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Payment Method</h2>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Card Number</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input placeholder="1234 5678 9012 3456" className="pl-11 h-11 rounded-xl border-2" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Expiry Date</Label>
                    <Input placeholder="MM/YY" className="h-11 rounded-xl border-2" />
                  </div>
                  <div className="space-y-2">
                    <Label>CVV</Label>
                    <Input placeholder="123" className="h-11 rounded-xl border-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-border sticky top-24 space-y-6"
            >
              <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

              <div className="space-y-3">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal (2 items)</span>
                  <span>$36.97</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Delivery</span>
                  <span className="text-primary font-medium">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax</span>
                  <span>$2.96</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between text-lg font-bold text-foreground">
                  <span>Total</span>
                  <span className="text-primary">$39.93</span>
                </div>
              </div>

              <Button 
                onClick={handlePlaceOrder}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl"
              >
                Place Order
              </Button>

              <div className="text-xs text-center text-muted-foreground">
                By placing your order, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms</a> and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
