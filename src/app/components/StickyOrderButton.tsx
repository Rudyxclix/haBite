import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Link } from "react-router";

export function StickyOrderButton() {
  return (
    <Link to="/products">
      <motion.div
        className="md:hidden fixed bottom-6 left-4 right-4 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl text-base font-medium">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Order Now
        </Button>
      </motion.div>
    </Link>
  );
}