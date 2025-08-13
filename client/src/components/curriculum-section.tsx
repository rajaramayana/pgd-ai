import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Download, FileText, Clock, Target, CheckCircle } from "lucide-react";

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(1);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'overview' | 'detailed'>('overview');

  const toggleCourse = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const downloadSyllabus = (courseTitle: string, courseData: any) => {
    const syllabusContent = generateSyllabusContent(courseTitle, courseData);
    const blob = new Blob([syllabusContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${courseTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_syllabus.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const downloadAllSyllabi = () => {
    const allCourses = [...semester1Courses, ...semester2Courses];
    const allSyllabiContent = allCourses.map(course => 
      generateSyllabusContent(course.title, course)
    ).join('\n\n' + '='.repeat(80) + '\n\n');
    
    const blob = new Blob([allSyllabiContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai_diploma_complete_syllabus.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateSyllabusContent = (title: string, course: any) => {
    return `
PURBANCHAL UNIVERSITY
POST GRADUATE DIPLOMA IN ARTIFICIAL INTELLIGENCE
COURSE SYLLABUS

Course Title: ${title}
Credits: ${course.credits}
Description: ${course.description}

COURSE OBJECTIVES:
${course.detailedSyllabus?.objectives?.map((obj: string, i: number) => `${i + 1}. ${obj}`).join('\n') || 'Not available'}

PREREQUISITES:
${course.detailedSyllabus?.prerequisites || 'Not specified'}

COURSE CONTENT:
${course.content?.map((item: string, i: number) => `${i + 1}. ${item}`).join('\n') || 'Not available'}

LEARNING OUTCOMES:
${course.detailedSyllabus?.learningOutcomes?.map((outcome: string, i: number) => `${i + 1}. ${outcome}`).join('\n') || 'Not available'}

ASSESSMENT METHODS:
${course.detailedSyllabus?.assessments?.map((assessment: string, i: number) => `${i + 1}. ${assessment}`).join('\n') || 'Not available'}

Total Contact Hours: 45 hours
Laboratory/Practical Hours: 30 hours
Theory Hours: 15 hours
`;
  };

  const semester1Courses = [
    {
      id: "course1",
      title: "Fundamentals of AI",
      credits: 3,
      description: "Introduction to artificial intelligence concepts, machine learning basics, and Python programming foundations.",
      content: [
        "History and Evolution of AI (4 hours)",
        "Python Programming Fundamentals (12 hours)",
        "Introduction to Machine Learning (8 hours)",
        "Neural Networks and Deep Learning Basics (8 hours)",
        "AI Ethics and Responsible AI (4 hours)",
        "Hands-on Python Projects (9 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Understand the historical development and current state of AI",
          "Master Python programming fundamentals for AI applications",
          "Grasp basic machine learning concepts and algorithms",
          "Learn neural network fundamentals and architectures",
          "Develop ethical understanding of AI implications"
        ],
        prerequisites: "Basic computer literacy, no programming experience required",
        assessments: [
          "Programming assignments (40%)",
          "Midterm examination (25%)",
          "Final project (25%)",
          "Class participation and quizzes (10%)"
        ],
        learningOutcomes: [
          "Write Python programs for basic AI tasks",
          "Implement simple machine learning algorithms",
          "Understand neural network architecture and training",
          "Evaluate AI systems from ethical perspectives",
          "Design and develop basic AI applications"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course2",
      title: "Data Science with Python",
      credits: 3,
      description: "Comprehensive data analysis, visualization, and statistical modeling using Python libraries.",
      content: [
        "NumPy and Array Operations (6 hours)",
        "Pandas for Data Manipulation (8 hours)",
        "Data Visualization with Matplotlib & Seaborn (8 hours)",
        "Statistical Analysis and Hypothesis Testing (6 hours)",
        "Data Cleaning and Preprocessing (8 hours)",
        "Exploratory Data Analysis Projects (9 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Master essential Python libraries for data science",
          "Perform comprehensive data analysis and visualization",
          "Apply statistical methods to real-world datasets",
          "Clean and preprocess messy data effectively",
          "Communicate insights through compelling visualizations"
        ],
        prerequisites: "Fundamentals of AI course completion",
        assessments: [
          "Data analysis assignments (35%)",
          "Visualization projects (25%)",
          "Statistical modeling exam (20%)",
          "Final capstone project (20%)"
        ],
        learningOutcomes: [
          "Manipulate large datasets using Pandas efficiently",
          "Create publication-quality visualizations",
          "Apply appropriate statistical tests to data",
          "Clean and transform raw data for analysis",
          "Present data-driven insights to stakeholders"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course3",
      title: "Database Management Systems",
      credits: 3,
      description: "SQL fundamentals, database design, and Python database integration for AI applications.",
      content: [
        "Database Fundamentals and Design (6 hours)",
        "SQL Queries and Advanced Operations (10 hours)",
        "Database Normalization and Optimization (4 hours)",
        "Python Database Connectivity (8 hours)",
        "NoSQL Databases for AI Applications (6 hours)",
        "Database Project Implementation (11 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Design efficient database schemas for AI applications",
          "Master SQL for complex data retrieval and manipulation",
          "Integrate Python applications with various databases",
          "Understand NoSQL databases for big data and AI",
          "Optimize database performance for large datasets"
        ],
        prerequisites: "Basic understanding of data structures",
        assessments: [
          "SQL practical exams (30%)",
          "Database design project (25%)",
          "Python integration assignments (25%)",
          "Final comprehensive project (20%)"
        ],
        learningOutcomes: [
          "Design normalized database schemas",
          "Write complex SQL queries for data analysis",
          "Connect Python applications to databases",
          "Choose appropriate database types for AI projects",
          "Optimize database queries for performance"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course4",
      title: "Software Development with Python",
      credits: 3,
      description: "Advanced Python programming, web development, and software engineering principles.",
      content: [
        "Advanced Python Programming Concepts (8 hours)",
        "Object-Oriented Programming in Python (6 hours)",
        "Web Development with Flask/Django (10 hours)",
        "API Development and Integration (6 hours)",
        "Software Testing and Debugging (6 hours)",
        "Final Application Development Project (9 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Master advanced Python programming techniques",
          "Develop web applications using modern frameworks",
          "Create and consume RESTful APIs",
          "Implement proper software testing methodologies",
          "Build production-ready software applications"
        ],
        prerequisites: "Fundamentals of AI and Data Science courses",
        assessments: [
          "Programming assignments (40%)",
          "Web application project (30%)",
          "API development task (20%)",
          "Code review and testing (10%)"
        ],
        learningOutcomes: [
          "Write maintainable and scalable Python code",
          "Develop full-stack web applications",
          "Design and implement RESTful APIs",
          "Apply test-driven development practices",
          "Deploy applications to cloud platforms"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course5",
      title: "Marketing Fundamentals & AI Applications",
      credits: 3,
      description: "Marketing principles with practical AI tool applications for modern digital marketing strategies.",
      content: [
        "Digital Marketing Fundamentals (6 hours)",
        "Customer Segmentation with AI (8 hours)",
        "Predictive Analytics for Marketing (8 hours)",
        "Chatbots and Conversational AI (6 hours)",
        "Marketing Automation with Python (6 hours)",
        "AI Marketing Campaign Project (11 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Understand core digital marketing principles",
          "Apply AI techniques to customer segmentation",
          "Implement predictive models for marketing analytics",
          "Develop chatbots for customer engagement",
          "Automate marketing processes using Python"
        ],
        prerequisites: "Data Science and Python programming knowledge",
        assessments: [
          "Marketing analysis assignments (30%)",
          "AI implementation projects (35%)",
          "Chatbot development (20%)",
          "Final marketing campaign (15%)"
        ],
        learningOutcomes: [
          "Analyze customer behavior using AI techniques",
          "Build predictive models for marketing campaigns",
          "Create intelligent chatbots for customer service",
          "Automate marketing workflows with Python",
          "Measure and optimize AI-driven marketing performance"
        ]
      },
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
        "Supervised Learning Algorithms (8 hours)",
        "Unsupervised Learning Techniques (6 hours)",
        "Model Evaluation and Validation (6 hours)",
        "Scikit-learn and TensorFlow Implementation (10 hours)",
        "Feature Engineering and Selection (4 hours)",
        "Real-world ML Project Implementation (11 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Master advanced machine learning algorithms",
          "Implement ML models using industry-standard libraries",
          "Evaluate and optimize model performance",
          "Apply feature engineering techniques",
          "Deploy machine learning models in production"
        ],
        prerequisites: "Fundamentals of AI, Data Science with Python",
        assessments: [
          "Algorithm implementation assignments (35%)",
          "Model optimization projects (25%)",
          "Performance evaluation tasks (20%)",
          "Final ML application project (20%)"
        ],
        learningOutcomes: [
          "Implement complex ML algorithms from scratch",
          "Use scikit-learn and TensorFlow effectively",
          "Optimize model performance through proper evaluation",
          "Apply advanced feature engineering techniques",
          "Deploy ML models for real-world applications"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course7",
      title: "Operations & Supply Chain with AI",
      credits: 3,
      description: "Operations management and supply chain optimization using AI tools and Python automation.",
      content: [
        "Supply Chain Management Fundamentals (6 hours)",
        "Demand Forecasting with AI Models (8 hours)",
        "Inventory Optimization Algorithms (6 hours)",
        "Process Automation with Python (8 hours)",
        "Supply Chain Analytics and KPIs (6 hours)",
        "Integrated Supply Chain AI Project (11 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Understand modern supply chain management principles",
          "Apply AI for demand forecasting and planning",
          "Optimize inventory using algorithmic approaches",
          "Automate supply chain processes with Python",
          "Analyze supply chain performance with AI tools"
        ],
        prerequisites: "Data Science, Marketing Fundamentals courses",
        assessments: [
          "Forecasting model development (30%)",
          "Optimization algorithm implementation (25%)",
          "Process automation project (25%)",
          "Comprehensive supply chain analysis (20%)"
        ],
        learningOutcomes: [
          "Build accurate demand forecasting models",
          "Implement inventory optimization algorithms",
          "Automate supply chain workflows",
          "Analyze supply chain data for insights",
          "Design AI-powered supply chain solutions"
        ]
      },
      badgeColor: "highlight-amber",
    },
    {
      id: "course8",
      title: "Natural Language Processing",
      credits: 3,
      description: "Text processing, sentiment analysis, and language understanding using Python NLP libraries.",
      content: [
        "Text Preprocessing and Tokenization (6 hours)",
        "Sentiment Analysis Techniques (8 hours)",
        "Named Entity Recognition (6 hours)",
        "NLTK and spaCy Libraries Mastery (8 hours)",
        "Advanced NLP with Transformers (6 hours)",
        "NLP Application Development Project (11 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Master text preprocessing and analysis techniques",
          "Implement sentiment analysis for business applications",
          "Extract meaningful information from unstructured text",
          "Use state-of-the-art NLP libraries effectively",
          "Build practical NLP applications for real problems"
        ],
        prerequisites: "Machine Learning Applications course",
        assessments: [
          "Text analysis assignments (30%)",
          "Sentiment analysis project (25%)",
          "NER implementation task (20%)",
          "Final NLP application (25%)"
        ],
        learningOutcomes: [
          "Process and analyze large text datasets",
          "Build accurate sentiment analysis systems",
          "Extract entities and relationships from text",
          "Apply modern NLP techniques using transformers",
          "Develop end-to-end NLP applications"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course9",
      title: "Computer Vision & Image Processing",
      credits: 3,
      description: "Image processing, computer vision algorithms, and practical applications using Python.",
      content: [
        "Image Processing Fundamentals (6 hours)",
        "OpenCV Library Mastery (8 hours)",
        "Object Detection and Recognition (8 hours)",
        "Deep Learning for Computer Vision (8 hours)",
        "Image Classification Projects (6 hours)",
        "Computer Vision Application Development (9 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Understand digital image processing concepts",
          "Master OpenCV for image manipulation",
          "Implement object detection algorithms",
          "Apply deep learning to computer vision tasks",
          "Build practical computer vision applications"
        ],
        prerequisites: "Machine Learning Applications, Python programming",
        assessments: [
          "Image processing assignments (30%)",
          "Object detection project (25%)",
          "Deep learning implementation (25%)",
          "Final computer vision application (20%)"
        ],
        learningOutcomes: [
          "Process and manipulate digital images",
          "Detect and recognize objects in images",
          "Apply CNN architectures for image classification",
          "Build real-time computer vision systems",
          "Integrate computer vision into business applications"
        ]
      },
      badgeColor: "academic-blue",
    },
    {
      id: "course10",
      title: "AI Project & Capstone",
      credits: 3,
      description: "Comprehensive project development combining all learned skills into a practical AI solution.",
      content: [
        "Project Planning and Methodology (4 hours)",
        "Industry Problem Identification (4 hours)",
        "End-to-end AI Solution Development (20 hours)",
        "Industry Collaboration and Mentorship (6 hours)",
        "Presentation and Communication Skills (4 hours)",
        "Portfolio Development and Documentation (7 hours)",
      ],
      detailedSyllabus: {
        objectives: [
          "Apply integrated AI knowledge to solve real problems",
          "Collaborate with industry partners on practical projects",
          "Develop professional presentation skills",
          "Create a comprehensive portfolio of work",
          "Demonstrate readiness for AI career roles"
        ],
        prerequisites: "All previous courses completed",
        assessments: [
          "Project proposal and planning (20%)",
          "Technical implementation (40%)",
          "Final presentation (25%)",
          "Portfolio and documentation (15%)"
        ],
        learningOutcomes: [
          "Execute complete AI project lifecycle",
          "Solve real industry problems using AI",
          "Present technical solutions to stakeholders",
          "Build professional AI portfolio",
          "Demonstrate industry-ready AI skills"
        ]
      },
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

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          {/* Semester Tabs */}
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

          {/* View Mode and Download Controls */}
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 p-1 rounded-lg" data-testid="view-mode-tabs">
              <Button
                onClick={() => setViewMode('overview')}
                variant={viewMode === 'overview' ? "default" : "ghost"}
                size="sm"
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'overview' 
                    ? "bg-academic-blue text-white" 
                    : "text-gray-600 hover:text-academic-blue"
                }`}
                data-testid="overview-mode-tab"
              >
                Overview
              </Button>
              <Button
                onClick={() => setViewMode('detailed')}
                variant={viewMode === 'detailed' ? "default" : "ghost"}
                size="sm"
                className={`px-4 py-2 rounded-md font-medium transition-colors ${
                  viewMode === 'detailed' 
                    ? "bg-academic-blue text-white" 
                    : "text-gray-600 hover:text-academic-blue"
                }`}
                data-testid="detailed-mode-tab"
              >
                Detailed
              </Button>
            </div>
            
            <Button
              onClick={downloadAllSyllabi}
              className="bg-success-green hover:bg-green-700 text-white px-4 py-2 flex items-center gap-2"
              data-testid="download-all-syllabi"
            >
              <Download className="w-4 h-4" />
              Download All Syllabi
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
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold">
                      {viewMode === 'overview' ? 'Course Content:' : 'Detailed Syllabus:'}
                    </h4>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => downloadSyllabus(course.title, course)}
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-1"
                        data-testid={`download-syllabus-${course.id}`}
                      >
                        <Download className="w-3 h-3" />
                        Download
                      </Button>
                      {expandedCourse === course.id ? (
                        <ChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                  </div>

                  {viewMode === 'overview' ? (
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.content.map((item, index) => (
                        <li key={index} data-testid={`course-content-${course.id}-${index}`}>
                          • {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-6">
                      {/* Course Objectives */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="w-4 h-4 mr-2 text-academic-blue" />
                          Course Objectives
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {course.detailedSyllabus?.objectives?.map((objective, index) => (
                            <li key={index} data-testid={`course-objective-${course.id}-${index}`}>
                              • {objective}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Prerequisites */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-academic-blue" />
                          Prerequisites
                        </h5>
                        <p className="text-sm text-gray-600" data-testid={`course-prerequisites-${course.id}`}>
                          {course.detailedSyllabus?.prerequisites}
                        </p>
                      </div>

                      {/* Course Content with Hours */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-academic-blue" />
                          Course Content & Hours
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {course.content.map((item, index) => (
                            <li key={index} data-testid={`course-detailed-content-${course.id}-${index}`}>
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learning Outcomes */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-success-green" />
                          Learning Outcomes
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {course.detailedSyllabus?.learningOutcomes?.map((outcome, index) => (
                            <li key={index} data-testid={`course-outcome-${course.id}-${index}`}>
                              • {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Assessment Methods */}
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <FileText className="w-4 h-4 mr-2 text-highlight-amber" />
                          Assessment Methods
                        </h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {course.detailedSyllabus?.assessments?.map((assessment, index) => (
                            <li key={index} data-testid={`course-assessment-${course.id}-${index}`}>
                              • {assessment}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}