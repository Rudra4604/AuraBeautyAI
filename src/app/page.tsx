import HeroSection from "@/components/home/HeroSection";
import FeaturedSalons from "@/components/home/FeaturedSalons";
import AIFeatures from "@/components/home/AIFeatures";
import Testimonials from "@/components/home/Testimonials";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function HomePage() {
  return (
    <>
      <ScrollReveal><HeroSection /></ScrollReveal>
      <ScrollReveal delay={0.2}><FeaturedSalons /></ScrollReveal>
      <ScrollReveal delay={0.2}><BeforeAfterSlider /></ScrollReveal>
      <ScrollReveal delay={0.2}><AIFeatures /></ScrollReveal>
      <ScrollReveal delay={0.2}><Testimonials /></ScrollReveal>
    </>
  );
}
