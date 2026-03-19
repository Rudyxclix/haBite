import { Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import Masonry from "react-responsive-masonry";

export function InstagramGrid() {
  const images = [
    "https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXB8ZW58MXx8fHwxNzcyNzUwMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1610450620997-6921021865da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbW9vdGhpZSUyMGJvd2wlMjBiZXJyaWVzfGVufDF8fHx8MTc3Mjc5NTE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1770223722037-8dc5d3dff8d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwbWVhbCUyMHBsYW5uaW5nfGVufDF8fHx8MTc3Mjc4Mjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1633862472152-e3873eb1b3ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwcG9rZSUyMGJvd2wlMjBhdm9jYWRvfGVufDF8fHx8MTc3MjgyOTMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1679279726937-122c49626802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcXVpbm9hJTIwYm93bHxlbnwxfHx8fDE3NzI4MjkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1696824818288-a5cc5a93b6e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZ3JhaW4lMjBib3dsfGVufDF8fHx8MTc3MjgyOTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="text-center mb-12 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-2">
            <Instagram className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              @habiteofficial
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            Follow us for daily healthy meal inspiration
          </p>
        </motion.div>
        
        {/* Masonry Grid for Desktop */}
        <div className="hidden md:block">
          <Masonry columnsCount={3} gutter="1rem">
            {images.map((image, index) => (
              <motion.a 
                key={index} 
                href="https://www.instagram.com/habiteofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden cursor-pointer mb-4 block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Healthy meal ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 flex items-center justify-center"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Instagram className="w-8 h-8 text-white" />
                </motion.div>
              </motion.a>
            ))}
          </Masonry>
        </div>

        {/* Regular Grid for Mobile */}
        <div className="grid grid-cols-2 md:hidden gap-4">
          {images.map((image, index) => (
            <motion.a 
              key={index} 
              href="https://www.instagram.com/habiteofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <ImageWithFallback
                src={image}
                alt={`Healthy meal ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="https://www.instagram.com/habiteofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Follow us on Instagram
            <Instagram className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
