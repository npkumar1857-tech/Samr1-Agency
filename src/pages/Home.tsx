import { Suspense, lazy, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";

const TrustedBySection = lazy(() => import("@/components/sections/TrustedBySection"));
const ServicesSection = lazy(() => import("@/components/sections/ServicesSection"));
const FeaturedWorkSection = lazy(() => import("@/components/sections/FeaturedWorkSection"));
const ProcessSection = lazy(() => import("@/components/sections/ProcessSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      let attempts = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          clearInterval(interval);
        }
        attempts++;
        if (attempts > 30) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <main className="bg-background min-h-screen text-foreground relative overflow-hidden">
      <Navbar />
      <HeroSection />

      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <TrustedBySection />
        <ServicesSection />
        <FeaturedWorkSection />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </Suspense>

      <Footer />
    </main>
  );
}

