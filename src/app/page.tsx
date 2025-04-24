import AboutSection from "@/components/about-section";
import SkillSection from "@/components/skill-section";
import ContactSection from "@/components/contact-section";
import PortfolioSection from "@/components/portfolio-section";
import TestimonialsSection from "@/components/testimonials-section";
import ExperienceSection from "@/components/experience-section";

import HeroSection from "@/components/hero-section";
import FooterSection from "@/components/footer-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection/>
    </main>
  );
}
