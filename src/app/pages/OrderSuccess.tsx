import { motion } from "motion/react";
import { CheckCircle2, Package, Mail, ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-12 border border-border text-center space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto"
          >
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-foreground">Order Confirmed!</h1>
            <p className="text-lg text-muted-foreground">
              Thank you for your order. We'll prepare your fresh meals with care.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Order Number</span>
              <span className="font-semibold text-foreground">#HB-2024-001</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Estimated Delivery</span>
              <span className="font-semibold text-primary">Tomorrow, 1:00 PM</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total Paid</span>
              <span className="font-semibold text-foreground">$39.93</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 text-left">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-foreground mb-1">Email Confirmation</div>
                <div className="text-sm text-muted-foreground">
                  We've sent order details to your email
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-green-50 text-left">
              <Package className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-foreground mb-1">Track Your Order</div>
                <div className="text-sm text-muted-foreground">
                  Monitor your delivery in real-time
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link to="/dashboard/orders" className="flex-1">
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl">
                View Order Details
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/products" className="flex-1">
              <Button variant="outline" className="w-full h-12 rounded-xl border-2">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
