import { TrendingUp, Users, Briefcase, Globe, Target, Database, ShoppingCart, Rocket } from "lucide-react";

export default function ProgramRationale() {
  const rationalePoints = [
    {
      icon: TrendingUp,
      text: "Growing demand for AI professionals across industries, especially in business applications",
    },
    {
      icon: Users,
      text: "Non-science graduates need accessible pathways to enter the AI field",
    },
    {
      icon: Briefcase,
      text: "Industry requires professionals who understand both AI technology and business applications",
    },
    {
      icon: Globe,
      text: "Nepal's digital transformation requires AI-literate professionals",
    },
  ];

  const objectives = [
    {
      icon: Target,
      text: "Develop practical AI skills using Python programming",
    },
    {
      icon: Database,
      text: "Master data science and database management fundamentals",
    },
    {
      icon: ShoppingCart,
      text: "Apply AI tools in marketing, operations, and supply chain management",
    },
    {
      icon: Rocket,
      text: "Build industry-ready AI solutions and applications",
    },
  ];

  return (
    <section id="overview" className="bg-gray-50 py-16" data-testid="program-rationale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="rationale-title">
            Program Rationale & Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="rationale-subtitle">
            Bridging the AI skills gap for business professionals through practical, industry-focused education
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="program-rationale-card">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Program Rationale</h3>
            <div className="space-y-4">
              {rationalePoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`rationale-point-${index}`}>
                  <point.icon className="w-6 h-6 text-success-green mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm" data-testid="learning-objectives-card">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Learning Objectives</h3>
            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start space-x-3" data-testid={`objective-point-${index}`}>
                  <objective.icon className="w-6 h-6 text-academic-blue mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{objective.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
