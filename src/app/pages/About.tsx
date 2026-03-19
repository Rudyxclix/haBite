import { motion } from "motion/react";
import { Heart, Target, Users, Award } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function About() {
  const values = [
    { icon: Heart, title: "Health First", desc: "Your wellness is our priority" },
    { icon: Target, title: "Quality Ingredients", desc: "Fresh, organic, locally sourced" },
    { icon: Users, title: "Community", desc: "Building a healthier society" },
    { icon: Award, title: "Excellence", desc: "Committed to the highest standards" },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Habite</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming the way people eat, one healthy meal at a time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground font-display">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2024, Habite was born from a simple belief: everyone deserves access to nutritious, delicious food that supports their health goals. We're not just a meal delivery service—we're your partner in building lasting healthy habits through **personalized diet plans**.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every plan we design is backed by nutritional science, and every bowl we create is crafted by chefs who are passionate about wholesome food. We source our ingredients locally, support sustainable farming, and ensure every meal meets our strict quality standards.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
              alt="Our kitchen"
              className="w-full h-96 object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of a community committed to healthier living
          </p>
          <div className="flex justify-center gap-8">
            <div>
              <div className="text-4xl font-bold">50K+</div>
              <div className="opacity-90">Happy Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold">1M+</div>
              <div className="opacity-90">Meals Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4.9</div>
              <div className="opacity-90">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
