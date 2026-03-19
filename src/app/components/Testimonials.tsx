import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Fitness Enthusiast",
      image: "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwZml0bmVzc3xlbnwxfHx8fDE3NzI4MjkzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Habite transformed my eating habits! Lost 15 pounds in 2 months while enjoying delicious meals. The protein bowls are my favorite!",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Gym Member",
      image: "https://images.unsplash.com/photo-1689007669034-9ef988d89742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjB3b3Jrb3V0fGVufDF8fHx8MTc3MjgyOTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "As someone who hits the gym daily, the muscle gain plan is perfect. High protein, great taste, and saves me hours of meal prep.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1758274536471-912e9d20d4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBoZWFsdGh5fGVufDF8fHx8MTc3MjgyOTMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Busy work schedule made healthy eating impossible. Habite changed everything - fresh meals delivered daily, perfectly balanced nutrition!",
      rating: 5
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12 md:mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers on their healthy journey
          </p>
        </motion.div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <motion.div 
                className="bg-gradient-to-br from-secondary to-white rounded-3xl p-8 space-y-6 relative overflow-hidden h-full"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                animate={{
                  y: [0, -5, 0]
                }}
                transition={{
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut"
                  },
                  hover: {
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }
                }}
              >
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + i * 0.1,
                        type: "spring"
                      }}
                    >
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-foreground relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.4,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-gradient-to-br from-secondary to-white rounded-3xl p-8 space-y-6 relative overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
            
            <div className="flex gap-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            
            <p className="text-foreground relative z-10">
              "{testimonials[currentIndex].quote}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                <ImageWithFallback
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-foreground">{testimonials[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                  animate={{ scale: i === currentIndex ? 1.2 : 1 }}
                />
              ))}
            </div>
            <motion.button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
