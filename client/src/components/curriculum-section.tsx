import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const semester1Courses = [
    {
      id: "course1",
      title: "Fundamentals of AI",
      credits: 3,
      description: "Introduction to artificial intelligence concepts, machine learning basics, and Python programming foundations.",
      content: [
        "History and evolution of AI",
        "Python programming basics",
        "Machine learning fundamentals",
        "Neural networks introduction",
        "Practical Python exercises",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course2",
      title: "Data Science with Python",
      credits: 3,
      description: "Comprehensive data analysis, visualization, and statistical modeling using Python libraries.",
      content: [
        "NumPy and Pandas fundamentals",
        "Data visualization with Matplotlib/Seaborn",
        "Statistical analysis techniques",
        "Data cleaning and preprocessing",
        "Practical data analysis projects",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course3",
      title: "Database Management Systems",
      credits: 3,
      description: "SQL fundamentals, database design, and Python database integration for AI applications.",
      content: [
        "SQL fundamentals and advanced queries",
        "Database design principles",
        "Python database connectivity",
        "NoSQL databases for AI",
        "Practical database projects",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course4",
      title: "Software Development with Python",
      credits: 3,
      description: "Advanced Python programming, web development, and software engineering principles.",
      content: [
        "Object-oriented programming in Python",
        "Web development with Flask/Django",
        "API development and integration",
        "Software testing and debugging",
        "Practical application development",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course5",
      title: "Marketing Fundamentals & AI Applications",
      credits: 3,
      description: "Marketing principles with practical AI tool applications for modern digital marketing strategies.",
      content: [
        "Digital marketing fundamentals",
        "Customer segmentation with AI",
        "Predictive analytics for marketing",
        "Chatbots and conversational AI",
        "Marketing automation with Python",
      ],
      badgeColor: "highlight-amber",
    },
  ];

  const semester2Courses = [
    {
      id: "course6",
      title: "Machine Learning Applications",
      credits: 3,
      description: "Advanced machine learning algorithms and practical implementation using Python libraries.",
      content: [
        "Supervised learning algorithms",
        "Unsupervised learning techniques",
        "Model evaluation and validation",
        "Scikit-learn and TensorFlow basics",
        "Real-world ML project implementation",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course7",
      title: "Operations & Supply Chain with AI",
      credits: 3,
      description: "Operations management and supply chain optimization using AI tools and Python automation.",
      content: [
        "Supply chain fundamentals",
        "Demand forecasting with AI",
        "Inventory optimization algorithms",
        "Process automation with Python",
        "Supply chain analytics projects",
      ],
      badgeColor: "highlight-amber",
    },
    {
      id: "course8",
      title: "Natural Language Processing",
      credits: 3,
      description: "Text processing, sentiment analysis, and language understanding using Python NLP libraries.",
      content: [
        "Text preprocessing and tokenization",
        "Sentiment analysis techniques",
        "Named entity recognition",
        "NLTK and spaCy libraries",
        "Practical NLP applications",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course9",
      title: "Computer Vision & Image Processing",
      credits: 3,
      description: "Image processing, computer vision algorithms, and practical applications using Python.",
      content: [
        "Image processing fundamentals",
        "OpenCV library mastery",
        "Object detection and recognition",
        "Deep learning for computer vision",
        "Practical image analysis projects",
      ],
      badgeColor: "academic-blue",
    },
    {
      id: "course10",
      title: "AI Project & Capstone",
      credits: 3,
      description: "Comprehensive project development combining all learned skills into a practical AI solution.",
      content: [
        "Project planning and methodology",
        "End-to-end AI solution development",
        "Industry collaboration projects",
        "Presentation and communication skills",
        "Portfolio development",
      ],
      badgeColor: "success-green",
    },
  ];

  const currentCourses = activeSemester === 1 ? semester1Courses : semester2Courses;

  return (
    <section id="curriculum" className="bg-white py-16" data-testid="curriculum-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" data-testid="curriculum-title">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-gray-600" data-testid="curriculum-subtitle">
            Two semesters, five courses each, all with hands-on Python practicals
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg" data-testid="semester-tabs">
            <Button
              onClick={() => setActiveSemester(1)}
              variant={activeSemester === 1 ? "default" : "ghost"}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeSemester === 1 
                  ? "bg-academic-blue text-white" 
                  : "text-gray-600 hover:text-academic-blue"
              }`}
              data-testid="semester1-tab"
            >
              Semester 1 (15 Credits)
            </Button>
            <Button
              onClick={() => setActiveSemester(2)}
              variant={activeSemester === 2 ? "default" : "ghost"}
              className={`px-6 py-3 rounded-md font-medium transition-colors ${
                activeSemester === 2 
                  ? "bg-academic-blue text-white" 
                  : "text-gray-600 hover:text-academic-blue"
              }`}
              data-testid="semester2-tab"
            >
              Semester 2 (15 Credits)
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-testid={`semester${activeSemester}-content`}>
          {currentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => toggleCourse(course.id)}
              data-testid={`course-card-${course.id}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900" data-testid={`course-title-${course.id}`}>
                  {course.title}
                </h3>
                <span 
                  className={`bg-${course.badgeColor} text-white px-3 py-1 rounded-full text-sm`}
                  data-testid={`course-credits-${course.id}`}
                >
                  {course.credits} Credits
                </span>
              </div>
              <p className="text-gray-600 mb-4" data-testid={`course-description-${course.id}`}>
                {course.description}
              </p>
              
              {/* Expandable Content */}
              {expandedCourse === course.id && (
                <div className="mt-4 pt-4 border-t border-gray-200" data-testid={`course-details-${course.id}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">Course Content:</h4>
                    {expandedCourse === course.id ? (
                      <ChevronUp className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {course.content.map((item, index) => (
                      <li key={index} data-testid={`course-content-${course.id}-${index}`}>
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}