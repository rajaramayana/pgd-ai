import { Calendar, BookOpen, Users, Code } from "lucide-react";

export default function ProgramOverview() {
  const stats = [
    {
      icon: Calendar,
      value: "1 Year",
      label: "Program Duration",
      color: "academic-blue",
    },
    {
      icon: BookOpen,
      value: "30 Credits",
      label: "Total Credit Hours",
      color: "success-green",
    },
    {
      icon: Users,
      value: "10 Courses",
      label: "Comprehensive Curriculum",
      color: "highlight-amber",
    },
    {
      icon: Code,
      value: "100%",
      label: "Python Practical",
      color: "purple-600",
    },
  ];

  return (
    <section className="bg-white py-16" data-testid="program-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className={`bg-${stat.color}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className={`w-8 h-8 text-${stat.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
