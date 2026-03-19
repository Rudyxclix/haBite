import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { DietPlans } from "../components/DietPlans";
import { DietBowls } from "../components/DietBowls";
import { BodyGoalPlans } from "../components/BodyGoalPlans";
import { WhyChoose } from "../components/WhyChoose";
import { Testimonials } from "../components/Testimonials";
import { InstagramGrid } from "../components/InstagramGrid";
import { CTABanner } from "../components/CTABanner";
import { Footer } from "../components/Footer";
import { StickyOrderButton } from "../components/StickyOrderButton";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <DietPlans />
        <DietBowls />
        <BodyGoalPlans />
        <WhyChoose />
        <Testimonials />
        <InstagramGrid />
        <CTABanner />
      </main>
      <Footer />
      <StickyOrderButton />
    </div>
  );
}
