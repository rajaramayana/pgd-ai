import { GraduationCap, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadBrochure = () => {
    const brochureContent = `
PURBANCHAL UNIVERSITY
POST GRADUATE DIPLOMA IN ARTIFICIAL INTELLIGENCE
PROGRAM BROCHURE

=================================================================

PROGRAM OVERVIEW
================

Program Title: Post Graduate Diploma in Artificial Intelligence
Duration: 1 Year (2 Semesters)
Total Credits: 30 Credit Hours
Target Audience: Non-science graduates seeking AI careers
Mode of Delivery: Practical Python-focused learning

PROGRAM RATIONALE
=================

• Growing demand for AI professionals across industries
• Non-science graduates need accessible pathways to AI field
• Industry requires professionals understanding both AI and business
• Nepal's digital transformation requires AI-literate professionals

PROGRAM OBJECTIVES
==================

• Develop practical AI skills using Python programming
• Master data science and database management fundamentals
• Apply AI tools in marketing, operations, and supply chain
• Build industry-ready AI solutions and applications

CURRICULUM STRUCTURE
====================

SEMESTER 1 (15 Credits)
-----------------------
1. Fundamentals of AI (3 Credits)
2. Data Science with Python (3 Credits)
3. Database Management Systems (3 Credits)
4. Software Development with Python (3 Credits)
5. Marketing Fundamentals & AI Applications (3 Credits)

SEMESTER 2 (15 Credits)
-----------------------
1. Machine Learning Applications (3 Credits)
2. Operations & Supply Chain with AI (3 Credits)
3. Natural Language Processing (3 Credits)
4. Computer Vision & Image Processing (3 Credits)
5. AI Project & Capstone (3 Credits)

UNIQUE FEATURES
===============

• 100% Python practical implementation
• Real industry projects and collaborations
• Hands-on approach with 30+ hours lab work per course
• Business-focused AI applications
• Industry mentorship and guidance
• Portfolio development throughout program

CAREER OPPORTUNITIES
====================

Immediate Opportunities:
• Data Analyst (NPR 35-50K/month)
• AI Marketing Specialist (NPR 40-60K/month)
• Operations Analyst (NPR 35-55K/month)
• Python Developer (NPR 45-65K/month)
• Business Intelligence Analyst (NPR 40-60K/month)
• AI Consultant (NPR 60-100K/month)

Further Education Pathways:
• Master's in Data Science
• Master's in Computer Science with AI specialization
• MBA with AI specialization
• Professional certifications (AWS, Google Cloud, Microsoft)

ELIGIBILITY CRITERIA
====================

• Bachelor's degree from recognized university
• Any background welcome (Arts, Commerce, Management, Science)
• Basic computer skills and internet familiarity
• English proficiency for understanding course materials

ADMISSION PROCESS
=================

1. Submit online application with required documents
2. Academic transcripts and certificate verification
3. Brief entrance interview to assess motivation
4. Admission confirmation and enrollment

CONTACT INFORMATION
===================

Campus: Purbanchal University
Department: Computer Application
Location: Biratnagar, Nepal
Email: ai.diploma@pu.edu.np
Phone: +977-XXX-XXXXXX

Visit our website or contact admissions for more information.

=================================================================
© 2024 Purbanchal University. All rights reserved.
`;

    const blob = new Blob([brochureContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pu_ai_diploma_brochure.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
                onClick={downloadBrochure}
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