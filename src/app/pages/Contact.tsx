import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email Us", 
      value: "hello@habite.in", 
      sub: "We'll respond within 24 hours",
      color: "from-blue-500/10 to-indigo-500/10",
      accent: "text-blue-600"
    },
    { 
      icon: Phone, 
      label: "Call Us", 
      value: "+91 98765 43210", 
      sub: "Mon-Sat, 9AM-8PM",
      color: "from-emerald-500/10 to-teal-500/10",
      accent: "text-emerald-600"
    },
    { 
      icon: MapPin, 
      label: "Visit Our Kitchen", 
      value: "Bypass Road, Kozhikode, Kerala", 
      sub: "Come see where the magic happens",
      color: "from-purple-500/10 to-pink-500/10",
      accent: "text-purple-600"
    },
    { 
      icon: Clock, 
      label: "Delivery Hours", 
      value: "7AM - 9PM Daily", 
      sub: "Fresh meals at your doorstep",
      color: "from-orange-500/10 to-yellow-500/10",
      accent: "text-orange-600"
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-sans">
      {/* Background Organic Shapes */}
      <div className="fixed top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-primary/5 organic-shape blur-3xl -z-0 animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/5 organic-shape blur-3xl -z-0 animate-pulse delay-700"></div>

      <Header />
      
      <main className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Always Here for You
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 font-display leading-tight">
            Let's Start a <span className="text-primary italic">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our personalized diet plans? Want to custom-order your bowls? Reach out to our Kozhikode team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="grid gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group flex items-start gap-6 p-6 rounded-[2rem] bg-white/80 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 duration-500`}>
                      <Icon className={`w-7 h-7 ${item.accent}`} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">{item.label}</div>
                      <div className="text-xl font-bold text-foreground font-display mb-1">{item.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{item.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Support Highlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 organic-shape -translate-y-16 translate-x-16 blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              <h3 className="text-2xl font-bold font-display mb-4 relative z-10">Instant Support?</h3>
              <p className="opacity-90 mb-8 leading-relaxed relative z-10 font-medium">
                Our nutritionists are active on WhatsApp for quick plan consultations and delivery updates.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 rounded-2xl w-full h-14 font-bold group-hover:gap-4 transition-all shadow-lg shadow-white/10">
                Message on WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-border/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary/50 via-primary to-primary/50"></div>
              
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground font-display mb-2">Send a Message</h2>
                <p className="text-muted-foreground font-medium">We usually respond in less than 2 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Full Name</Label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-16 rounded-2xl border-border/40 bg-white/50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium px-6"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Email Address</Label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-16 rounded-2xl border-border/40 bg-white/50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium px-6"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Subject</Label>
                  <Input
                    placeholder="How can we assist you?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="h-16 rounded-2xl border-border/40 bg-white/50 focus:bg-white focus:ring-primary/20 transition-all text-lg font-medium px-6"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label className="text-xs font-bold uppercase tracking-widest text-primary/60 ml-1">Your Message</Label>
                  <textarea
                    placeholder="Tell us about your health goals or ask anything..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-5 rounded-2xl border border-border/40 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-lg font-medium resize-none shadow-sm"
                    required
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button type="submit" className="w-full h-16 bg-primary hover:bg-primary/90 text-white rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 group">
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </motion.div>
                
                <p className="text-center text-sm text-muted-foreground font-medium">
                  By sending, you agree to our <a href="#" className="underline hover:text-primary">Privacy Policy</a>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
