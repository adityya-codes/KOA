import { HeroSection } from "@/components/home/HeroSection";
import { ActivityCarousel } from "@/components/home/ActivityCarousel";
import { WinterlineSection } from "@/components/home/WinterlineSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { StatsBar } from "@/components/home/StatsBar";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LocationSection } from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ActivityCarousel />
      <WinterlineSection />
      <PackagesSection />
      <StatsBar />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
