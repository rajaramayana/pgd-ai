import { BarChart, Megaphone, Settings, Code, Users, Rocket, GraduationCap, Cpu, Briefcase, Tag, BookOpen, Globe } from "lucide-react";

export default function CareerPathways() {
  const immediateOpportunities = [
    {
      icon: BarChart,
      title: "Data Analyst",
      description: "Analyze business data to drive decision-making",
      salary: "Entry Level • NPR 35-50K/month",
    },
    {
      icon: Megaphone,
      title: "AI Marketing Specialist",
      description: "Implement AI tools in digital marketing campaigns",
      salary: "Entry Level • NPR 40-60K/month",
    },
    {
      icon: Settings,
      title: "Operations Analyst",
      description: "Optimize business processes using AI tools",
      salary: "Entry Level • NPR 35-55K/month",
    },
    {
      icon: Code,
      title: "Python Developer",
      description: "Develop AI-powered applications and tools",
      salary: "Entry Level • NPR 45-65K/month",
    },
    {
      icon: Users,
      title: "Business Intelligence Analyst",
      description: "Transform data into actionable business insights",
      salary: "Entry Level • NPR 40-60K/month",
    },
    {
      icon: Rocket,
      title: "AI Consultant",
      description: "Help businesses implement AI solutions",
      salary: "Mid Level • NPR 60-100K/month",
    },
  ];

  const furtherEducation = [
    {
      icon: GraduationCap,
      title: "Master's in Data Science",
      description: "Advanced data science and machine learning programs",
    },
    {
      icon: Cpu,
      title: "Master's in Computer Science",
      description: "AI specialization tracks in CS programs",
    },
    {
      icon: Briefcase,
      title: "MBA with AI Specialization",
      description: "Business leadership with AI expertise",
    },
    {
      icon: Tag,
      title: "Professional Certifications",
      description: "AWS, Google Cloud, Microsoft AI certifications",
    },
    {
      icon: BookOpen,
      title: "Research Programs",
      description: "PhD opportunities in AI and related fields",
    },
    {
      icon: Globe,
      title: "International Programs",
      description: "Study abroad opportunities in AI hubs",
    },
  ];

  return (
    <section id="careers" className="bg-white py-16" data-testid="career-pathways">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="careers-title">
            Career Pathways & Progression
          </h2>
          <p className="text-xl text-gray-600" data-testid="careers-subtitle">
            Diverse opportunities in the rapidly growing AI industry
          </p>
        </div>

        {/* Immediate Career Opportunities */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center" data-testid="immediate-opportunities-title">
            Immediate Career Opportunities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="immediate-opportunities-grid">
            {immediateOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow" data-testid={`career-card-${index}`}>
                <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <opportunity.icon className="w-6 h-6 text-academic-blue" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" data-testid={`career-title-${index}`}>
                  {opportunity.title}
                </h4>
                <p className="text-gray-600 text-sm mb-3" data-testid={`career-description-${index}`}>
                  {opportunity.description}
                </p>
                <div className="text-sm text-success-green font-medium" data-testid={`career-salary-${index}`}>
                  {opportunity.salary}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Further Education Pathways */}
        <div className="bg-gradient-to-br from-academic-blue/5 to-purple-50 rounded-2xl p-8" data-testid="further-education-section">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center" data-testid="further-education-title">
            Further Education Pathways
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="further-education-grid">
            {furtherEducation.map((education, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm" data-testid={`education-card-${index}`}>
                <div className="w-12 h-12 bg-highlight-amber/10 rounded-lg flex items-center justify-center mb-4">
                  <education.icon className="w-6 h-6 text-highlight-amber" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2" data-testid={`education-title-${index}`}>
                  {education.title}
                </h4>
                <p className="text-gray-600 text-sm" data-testid={`education-description-${index}`}>
                  {education.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
