import { CheckCircle, FileText, GraduationCap, UserCheck, Laptop, Globe } from "lucide-react";

export default function EligibilitySection() {
  const eligibilityCriteria = [
    {
      icon: GraduationCap,
      title: "Bachelor's Degree",
      description: "Any bachelor's degree from a recognized university",
    },
    {
      icon: UserCheck,
      title: "All Backgrounds Welcome",
      description: "Arts, Commerce, Management, or Science graduates",
    },
    {
      icon: Laptop,
      title: "Basic Computer Skills",
      description: "Familiarity with computers and internet usage",
    },
    {
      icon: Globe,
      title: "English Proficiency",
      description: "Ability to understand and communicate in English",
    },
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete online application form with required documents",
    },
    {
      step: 2,
      title: "Document Verification",
      description: "Academic transcripts and certificate verification",
    },
    {
      step: 3,
      title: "Entrance Interview",
      description: "Brief interview to assess motivation and goals",
    },
    {
      step: 4,
      title: "Admission Confirmation",
      description: "Receive admission letter and enrollment instructions",
    },
  ];

  return (
    <section id="eligibility" className="bg-gray-50 py-16" data-testid="eligibility-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="eligibility-title">
            Eligibility & Admission
          </h2>
          <p className="text-xl text-gray-600" data-testid="eligibility-subtitle">
            Open to all graduates - No science background required
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="eligibility-criteria-card">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 text-success-green mr-3" />
              Eligibility Criteria
            </h3>
            <div className="space-y-4">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`eligibility-criteria-${index}`}>
                  <criteria.icon className="w-5 h-5 text-academic-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900" data-testid={`criteria-title-${index}`}>
                      {criteria.title}
                    </p>
                    <p className="text-gray-600 text-sm" data-testid={`criteria-description-${index}`}>
                      {criteria.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="application-process-card">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 text-highlight-amber mr-3" />
              Application Process
            </h3>
            <div className="space-y-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4" data-testid={`application-step-${index}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
                    step.step === 4 ? 'bg-success-green text-white' : 'bg-academic-blue text-white'
                  }`}>
                    {step.step}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900" data-testid={`step-title-${index}`}>
                      {step.title}
                    </p>
                    <p className="text-gray-600 text-sm" data-testid={`step-description-${index}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}