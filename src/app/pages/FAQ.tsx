import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Orders & Delivery",
      questions: [
        {
          q: "How does delivery work?",
          a: "We deliver fresh meals daily within your selected delivery window. You'll receive a notification when your order is on its way."
        },
        {
          q: "Can I modify my order after placing it?",
          a: "Yes, you can modify your order up to 24 hours before the scheduled delivery time through your dashboard."
        },
        {
          q: "What if I'm not home during delivery?",
          a: "Our meals come in insulated packaging that keeps food fresh for up to 4 hours. You can also specify a safe drop-off location."
        },
      ]
    },
    {
      category: "Meal Plans",
      questions: [
        {
          q: "How do meal plans work?",
          a: "Choose from our curated meal plans based on your goals (weight loss, muscle gain, balanced nutrition). Each plan is designed by nutritionists."
        },
        {
          q: "Can I customize my meals?",
          a: "Absolutely! You can swap meals, adjust portion sizes, and exclude ingredients based on your preferences and dietary restrictions."
        },
        {
          q: "Are the meals fresh or frozen?",
          a: "All our meals are prepared fresh daily using locally sourced ingredients. We never freeze our meals."
        },
      ]
    },
    {
      category: "Nutrition & Diet",
      questions: [
        {
          q: "Do you accommodate dietary restrictions?",
          a: "Yes! We offer vegetarian, vegan, gluten-free, dairy-free, and keto options. You can filter meals by dietary preferences."
        },
        {
          q: "How accurate are the calorie counts?",
          a: "Our meals are portioned and calculated by certified nutritionists. Calorie counts are accurate within ±5%."
        },
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          q: "How much do meals cost?",
          a: "Meals range from $10.99 to $15.99 depending on the plan and portion size. We offer discounts for weekly subscriptions."
        },
        {
          q: "Can I cancel my subscription?",
          a: "Yes, you can cancel anytime without penalties. Your cancellation takes effect after the current billing cycle."
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-secondary/30">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Habite
          </p>
        </motion.div>

        <div className="space-y-8">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">{category.category}</h2>
              <div className="space-y-3">
                {category.questions.map((faq, qIndex) => {
                  const globalIndex = faqs.slice(0, catIndex).reduce((sum, cat) => sum + cat.questions.length, 0) + qIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <motion.div
                      key={qIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (catIndex * 0.1) + (qIndex * 0.05) }}
                      className="bg-white rounded-2xl border border-border overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/30 transition-colors"
                      >
                        <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-muted-foreground">
                          {faq.a}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="mb-6 opacity-90">Our support team is here to help you</p>
          <div className="flex justify-center gap-4">
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-6 py-3 rounded-xl font-semibold"
              >
                Contact Us
              </motion.button>
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold"
            >
              Live Chat
            </motion.button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
