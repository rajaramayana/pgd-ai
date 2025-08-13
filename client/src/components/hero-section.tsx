import { GraduationCap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-academic-blue to-blue-900 text-white py-20" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-800/50 rounded-full px-4 py-2 mb-6" data-testid="program-badge">
              <GraduationCap className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">30 Credit Hours Program</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" data-testid="hero-title">
              Post Graduate Diploma in{" "}
              <span className="text-highlight-amber">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed" data-testid="hero-description">
              A comprehensive 1-year program designed for non-science graduates, featuring hands-on Python programming and practical AI applications in business, marketing, and operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-highlight-amber hover:bg-amber-600 text-white px-8 py-3 font-semibold"
                data-testid="button-apply-now"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-academic-blue px-8 py-3 font-semibold"
                data-testid="button-download-brochure"
              >
                Download Brochure
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl border border-blue-400/30 flex items-center justify-center" data-testid="hero-illustration">
              <div className="text-center">
                <Brain className="w-24 h-24 mx-auto mb-4 text-blue-200" />
                <p className="text-blue-200 font-medium">AI-Powered Future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
