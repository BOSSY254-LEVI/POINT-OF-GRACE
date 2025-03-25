import { useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import MissionSection from "@/components/sections/MissionSection";
import CounselingSection from "@/components/sections/CounselingSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import PrayerSection from "@/components/sections/PrayerSection";
import EventsSection from "@/components/sections/EventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  // Implement scroll to section when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Smooth scroll to the element
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial hash if exists
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <MissionSection />
      <CounselingSection />
      <ResourcesSection />
      <PrayerSection />
      <EventsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
