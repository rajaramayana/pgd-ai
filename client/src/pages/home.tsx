import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProgramOverview from "@/components/program-overview";
import ProgramRationale from "@/components/program-rationale";
import CurriculumSection from "@/components/curriculum-section";
import EligibilitySection from "@/components/eligibility-section";
import CareerPathways from "@/components/career-pathways";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <HeroSection />
      <ProgramOverview />
      <ProgramRationale />
      <CurriculumSection />
      <EligibilitySection />
      <CareerPathways />
      <ContactSection />
      <Footer />
    </div>
  );
}
