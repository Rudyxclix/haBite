import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
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
    { icon: Mail, label: "Email Us", value: "hello@habite.com", color: "bg-blue-100 text-blue-600" },
    { icon: Phone, label: "Call Us", value: "+1 (555) 123-4567", color: "bg-green-100 text-green-600" },
    { icon: MapPin, label: "Visit Us", value: "123 Health St, SF, CA", color: "bg-purple-100 text-purple-600" },
    { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9AM-6PM", color: "bg-orange-100 text-orange-600" },
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
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="h-12 rounded-xl border-2"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="h-12 rounded-xl border-2"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Subject</Label>
                <Input
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-12 rounded-xl border-2"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <textarea
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary transition-colors resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90 text-white rounded-xl">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-all cursor-pointer"
                    >
                      <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{item.label}</div>
                        <div className="font-semibold text-foreground">{item.value}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Quick Support</h3>
              <p className="opacity-90 mb-6">
                Need immediate assistance? Our support team is available to help you with any questions.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-xl w-full">
                Start Live Chat
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
