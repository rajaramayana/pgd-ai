from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import sqlite3
import uuid
from datetime import datetime
import os
import tempfile

app = Flask(__name__)
CORS(app)

# Database setup
def init_db():
    conn = sqlite3.connect('ai_diploma.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS inquiries (
            id TEXT PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            education TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    conn.commit()
    conn.close()

# Initialize database on startup
init_db()

# Course data
SEMESTER_1_COURSES = [
    {
        "id": "course1",
        "title": "Fundamentals of AI",
        "credits": 3,
        "description": "Introduction to artificial intelligence concepts, machine learning basics, and Python programming foundations.",
        "content": [
            "History and Evolution of AI (4 hours)",
            "Python Programming Fundamentals (12 hours)",
            "Introduction to Machine Learning (8 hours)",
            "Neural Networks and Deep Learning Basics (8 hours)",
            "AI Ethics and Responsible AI (4 hours)",
            "Hands-on Python Projects (9 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Understand the historical development and current state of AI",
                "Master Python programming fundamentals for AI applications",
                "Grasp basic machine learning concepts and algorithms",
                "Learn neural network fundamentals and architectures",
                "Develop ethical understanding of AI implications"
            ],
            "prerequisites": "Basic computer literacy, no programming experience required",
            "assessments": [
                "Programming assignments (40%)",
                "Midterm examination (25%)",
                "Final project (25%)",
                "Class participation and quizzes (10%)"
            ],
            "learning_outcomes": [
                "Write Python programs for basic AI tasks",
                "Implement simple machine learning algorithms",
                "Understand neural network architecture and training",
                "Evaluate AI systems from ethical perspectives",
                "Design and develop basic AI applications"
            ]
        }
    },
    {
        "id": "course2",
        "title": "Data Science with Python",
        "credits": 3,
        "description": "Comprehensive data analysis, visualization, and statistical modeling using Python libraries.",
        "content": [
            "NumPy and Array Operations (6 hours)",
            "Pandas for Data Manipulation (8 hours)",
            "Data Visualization with Matplotlib & Seaborn (8 hours)",
            "Statistical Analysis and Hypothesis Testing (6 hours)",
            "Data Cleaning and Preprocessing (8 hours)",
            "Exploratory Data Analysis Projects (9 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Master essential Python libraries for data science",
                "Perform comprehensive data analysis and visualization",
                "Apply statistical methods to real-world datasets",
                "Clean and preprocess messy data effectively",
                "Communicate insights through compelling visualizations"
            ],
            "prerequisites": "Fundamentals of AI course completion",
            "assessments": [
                "Data analysis assignments (35%)",
                "Visualization projects (25%)",
                "Statistical modeling exam (20%)",
                "Final capstone project (20%)"
            ],
            "learning_outcomes": [
                "Manipulate large datasets using Pandas efficiently",
                "Create publication-quality visualizations",
                "Apply appropriate statistical tests to data",
                "Clean and transform raw data for analysis",
                "Present data-driven insights to stakeholders"
            ]
        }
    },
    {
        "id": "course3",
        "title": "Database Management Systems",
        "credits": 3,
        "description": "SQL fundamentals, database design, and Python database integration for AI applications.",
        "content": [
            "Database Fundamentals and Design (6 hours)",
            "SQL Queries and Advanced Operations (10 hours)",
            "Database Normalization and Optimization (4 hours)",
            "Python Database Connectivity (8 hours)",
            "NoSQL Databases for AI Applications (6 hours)",
            "Database Project Implementation (11 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Design efficient database schemas for AI applications",
                "Master SQL for complex data retrieval and manipulation",
                "Integrate Python applications with various databases",
                "Understand NoSQL databases for big data and AI",
                "Optimize database performance for large datasets"
            ],
            "prerequisites": "Basic understanding of data structures",
            "assessments": [
                "SQL practical exams (30%)",
                "Database design project (25%)",
                "Python integration assignments (25%)",
                "Final comprehensive project (20%)"
            ],
            "learning_outcomes": [
                "Design normalized database schemas",
                "Write complex SQL queries for data analysis",
                "Connect Python applications to databases",
                "Choose appropriate database types for AI projects",
                "Optimize database queries for performance"
            ]
        }
    },
    {
        "id": "course4",
        "title": "Software Development with Python",
        "credits": 3,
        "description": "Advanced Python programming, web development, and software engineering principles.",
        "content": [
            "Advanced Python Programming Concepts (8 hours)",
            "Object-Oriented Programming in Python (6 hours)",
            "Web Development with Flask/Django (10 hours)",
            "API Development and Integration (6 hours)",
            "Software Testing and Debugging (6 hours)",
            "Final Application Development Project (9 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Master advanced Python programming techniques",
                "Develop web applications using modern frameworks",
                "Create and consume RESTful APIs",
                "Implement proper software testing methodologies",
                "Build production-ready software applications"
            ],
            "prerequisites": "Fundamentals of AI and Data Science courses",
            "assessments": [
                "Programming assignments (40%)",
                "Web application project (30%)",
                "API development task (20%)",
                "Code review and testing (10%)"
            ],
            "learning_outcomes": [
                "Write maintainable and scalable Python code",
                "Develop full-stack web applications",
                "Design and implement RESTful APIs",
                "Apply test-driven development practices",
                "Deploy applications to cloud platforms"
            ]
        }
    },
    {
        "id": "course5",
        "title": "Marketing Fundamentals & AI Applications",
        "credits": 3,
        "description": "Marketing principles with practical AI tool applications for modern digital marketing strategies.",
        "content": [
            "Digital Marketing Fundamentals (6 hours)",
            "Customer Segmentation with AI (8 hours)",
            "Predictive Analytics for Marketing (8 hours)",
            "Chatbots and Conversational AI (6 hours)",
            "Marketing Automation with Python (6 hours)",
            "AI Marketing Campaign Project (11 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Understand core digital marketing principles",
                "Apply AI techniques to customer segmentation",
                "Implement predictive models for marketing analytics",
                "Develop chatbots for customer engagement",
                "Automate marketing processes using Python"
            ],
            "prerequisites": "Data Science and Python programming knowledge",
            "assessments": [
                "Marketing analysis assignments (30%)",
                "AI implementation projects (35%)",
                "Chatbot development (20%)",
                "Final marketing campaign (15%)"
            ],
            "learning_outcomes": [
                "Analyze customer behavior using AI techniques",
                "Build predictive models for marketing campaigns",
                "Create intelligent chatbots for customer service",
                "Automate marketing workflows with Python",
                "Measure and optimize AI-driven marketing performance"
            ]
        }
    }
]

SEMESTER_2_COURSES = [
    {
        "id": "course6",
        "title": "Machine Learning Applications",
        "credits": 3,
        "description": "Advanced machine learning algorithms and practical implementation using Python libraries.",
        "content": [
            "Supervised Learning Algorithms (8 hours)",
            "Unsupervised Learning Techniques (6 hours)",
            "Model Evaluation and Validation (6 hours)",
            "Scikit-learn and TensorFlow Implementation (10 hours)",
            "Feature Engineering and Selection (4 hours)",
            "Real-world ML Project Implementation (11 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Master advanced machine learning algorithms",
                "Implement ML models using industry-standard libraries",
                "Evaluate and optimize model performance",
                "Apply feature engineering techniques",
                "Deploy machine learning models in production"
            ],
            "prerequisites": "Fundamentals of AI, Data Science with Python",
            "assessments": [
                "Algorithm implementation assignments (35%)",
                "Model optimization projects (25%)",
                "Performance evaluation tasks (20%)",
                "Final ML application project (20%)"
            ],
            "learning_outcomes": [
                "Implement complex ML algorithms from scratch",
                "Use scikit-learn and TensorFlow effectively",
                "Optimize model performance through proper evaluation",
                "Apply advanced feature engineering techniques",
                "Deploy ML models for real-world applications"
            ]
        }
    },
    {
        "id": "course7",
        "title": "Operations & Supply Chain with AI",
        "credits": 3,
        "description": "Operations management and supply chain optimization using AI tools and Python automation.",
        "content": [
            "Supply Chain Management Fundamentals (6 hours)",
            "Demand Forecasting with AI Models (8 hours)",
            "Inventory Optimization Algorithms (6 hours)",
            "Process Automation with Python (8 hours)",
            "Supply Chain Analytics and KPIs (6 hours)",
            "Integrated Supply Chain AI Project (11 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Understand modern supply chain management principles",
                "Apply AI for demand forecasting and planning",
                "Optimize inventory using algorithmic approaches",
                "Automate supply chain processes with Python",
                "Analyze supply chain performance with AI tools"
            ],
            "prerequisites": "Data Science, Marketing Fundamentals courses",
            "assessments": [
                "Forecasting model development (30%)",
                "Optimization algorithm implementation (25%)",
                "Process automation project (25%)",
                "Comprehensive supply chain analysis (20%)"
            ],
            "learning_outcomes": [
                "Build accurate demand forecasting models",
                "Implement inventory optimization algorithms",
                "Automate supply chain workflows",
                "Analyze supply chain data for insights",
                "Design AI-powered supply chain solutions"
            ]
        }
    },
    {
        "id": "course8",
        "title": "Natural Language Processing",
        "credits": 3,
        "description": "Text processing, sentiment analysis, and language understanding using Python NLP libraries.",
        "content": [
            "Text Preprocessing and Tokenization (6 hours)",
            "Sentiment Analysis Techniques (8 hours)",
            "Named Entity Recognition (6 hours)",
            "NLTK and spaCy Libraries Mastery (8 hours)",
            "Advanced NLP with Transformers (6 hours)",
            "NLP Application Development Project (11 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Master text preprocessing and analysis techniques",
                "Implement sentiment analysis for business applications",
                "Extract meaningful information from unstructured text",
                "Use state-of-the-art NLP libraries effectively",
                "Build practical NLP applications for real problems"
            ],
            "prerequisites": "Machine Learning Applications course",
            "assessments": [
                "Text analysis assignments (30%)",
                "Sentiment analysis project (25%)",
                "NER implementation task (20%)",
                "Final NLP application (25%)"
            ],
            "learning_outcomes": [
                "Process and analyze large text datasets",
                "Build accurate sentiment analysis systems",
                "Extract entities and relationships from text",
                "Apply modern NLP techniques using transformers",
                "Develop end-to-end NLP applications"
            ]
        }
    },
    {
        "id": "course9",
        "title": "Computer Vision & Image Processing",
        "credits": 3,
        "description": "Image processing, computer vision algorithms, and practical applications using Python.",
        "content": [
            "Image Processing Fundamentals (6 hours)",
            "OpenCV Library Mastery (8 hours)",
            "Object Detection and Recognition (8 hours)",
            "Deep Learning for Computer Vision (8 hours)",
            "Image Classification Projects (6 hours)",
            "Computer Vision Application Development (9 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Understand digital image processing concepts",
                "Master OpenCV for image manipulation",
                "Implement object detection algorithms",
                "Apply deep learning to computer vision tasks",
                "Build practical computer vision applications"
            ],
            "prerequisites": "Machine Learning Applications, Python programming",
            "assessments": [
                "Image processing assignments (30%)",
                "Object detection project (25%)",
                "Deep learning implementation (25%)",
                "Final computer vision application (20%)"
            ],
            "learning_outcomes": [
                "Process and manipulate digital images",
                "Detect and recognize objects in images",
                "Apply CNN architectures for image classification",
                "Build real-time computer vision systems",
                "Integrate computer vision into business applications"
            ]
        }
    },
    {
        "id": "course10",
        "title": "AI Project & Capstone",
        "credits": 3,
        "description": "Comprehensive project development combining all learned skills into a practical AI solution.",
        "content": [
            "Project Planning and Methodology (4 hours)",
            "Industry Problem Identification (4 hours)",
            "End-to-end AI Solution Development (20 hours)",
            "Industry Collaboration and Mentorship (6 hours)",
            "Presentation and Communication Skills (4 hours)",
            "Portfolio Development and Documentation (7 hours)"
        ],
        "detailed_syllabus": {
            "objectives": [
                "Apply integrated AI knowledge to solve real problems",
                "Collaborate with industry partners on practical projects",
                "Develop professional presentation skills",
                "Create a comprehensive portfolio of work",
                "Demonstrate readiness for AI career roles"
            ],
            "prerequisites": "All previous courses completed",
            "assessments": [
                "Project proposal and planning (20%)",
                "Technical implementation (40%)",
                "Final presentation (25%)",
                "Portfolio and documentation (15%)"
            ],
            "learning_outcomes": [
                "Execute complete AI project lifecycle",
                "Solve real industry problems using AI",
                "Present technical solutions to stakeholders",
                "Build professional AI portfolio",
                "Demonstrate industry-ready AI skills"
            ]
        }
    }
]

def generate_syllabus_content(course):
    return f"""
PURBANCHAL UNIVERSITY
POST GRADUATE DIPLOMA IN ARTIFICIAL INTELLIGENCE
COURSE SYLLABUS

Course Title: {course['title']}
Credits: {course['credits']}
Description: {course['description']}

COURSE OBJECTIVES:
{chr(10).join([f"{i+1}. {obj}" for i, obj in enumerate(course['detailed_syllabus']['objectives'])])}

PREREQUISITES:
{course['detailed_syllabus']['prerequisites']}

COURSE CONTENT:
{chr(10).join([f"{i+1}. {item}" for i, item in enumerate(course['content'])])}

LEARNING OUTCOMES:
{chr(10).join([f"{i+1}. {outcome}" for i, outcome in enumerate(course['detailed_syllabus']['learning_outcomes'])])}

ASSESSMENT METHODS:
{chr(10).join([f"{i+1}. {assessment}" for i, assessment in enumerate(course['detailed_syllabus']['assessments'])])}

Total Contact Hours: 45 hours
Laboratory/Practical Hours: 30 hours
Theory Hours: 15 hours
"""

@app.route('/api/inquiries', methods=['POST'])
def create_inquiry():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['firstName', 'lastName', 'email', 'phone', 'education', 'message']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Generate unique ID
        inquiry_id = str(uuid.uuid4())
        
        # Insert into database
        conn = sqlite3.connect('ai_diploma.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            INSERT INTO inquiries (id, first_name, last_name, email, phone, education, message)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', (
            inquiry_id,
            data['firstName'],
            data['lastName'],
            data['email'],
            data['phone'],
            data['education'],
            data['message']
        ))
        
        conn.commit()
        conn.close()
        
        return jsonify({
            'id': inquiry_id,
            'message': 'Inquiry submitted successfully'
        }), 201
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/inquiries', methods=['GET'])
def get_inquiries():
    try:
        conn = sqlite3.connect('ai_diploma.db')
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM inquiries ORDER BY created_at DESC')
        rows = cursor.fetchall()
        
        inquiries = []
        for row in rows:
            inquiries.append({
                'id': row[0],
                'firstName': row[1],
                'lastName': row[2],
                'email': row[3],
                'phone': row[4],
                'education': row[5],
                'message': row[6],
                'createdAt': row[7]
            })
        
        conn.close()
        
        return jsonify(inquiries), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/courses', methods=['GET'])
def get_courses():
    semester = request.args.get('semester', '1')
    
    if semester == '1':
        return jsonify(SEMESTER_1_COURSES), 200
    elif semester == '2':
        return jsonify(SEMESTER_2_COURSES), 200
    else:
        all_courses = SEMESTER_1_COURSES + SEMESTER_2_COURSES
        return jsonify(all_courses), 200

@app.route('/api/download/syllabus/<course_id>', methods=['GET'])
def download_course_syllabus(course_id):
    try:
        # Find course in both semesters
        all_courses = SEMESTER_1_COURSES + SEMESTER_2_COURSES
        course = next((c for c in all_courses if c['id'] == course_id), None)
        
        if not course:
            return jsonify({'error': 'Course not found'}), 404
        
        # Generate syllabus content
        content = generate_syllabus_content(course)
        
        # Create temporary file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as tmp_file:
            tmp_file.write(content)
            tmp_file_path = tmp_file.name
        
        # Create filename
        filename = f"{course['title'].replace(' ', '_').lower()}_syllabus.txt"
        
        return send_file(
            tmp_file_path,
            as_attachment=True,
            download_name=filename,
            mimetype='text/plain'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/download/all-syllabi', methods=['GET'])
def download_all_syllabi():
    try:
        all_courses = SEMESTER_1_COURSES + SEMESTER_2_COURSES
        all_content = []
        
        for course in all_courses:
            course_content = generate_syllabus_content(course)
            all_content.append(course_content)
        
        combined_content = '\n\n' + '='*80 + '\n\n'.join(all_content)
        
        # Create temporary file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as tmp_file:
            tmp_file.write(combined_content)
            tmp_file_path = tmp_file.name
        
        return send_file(
            tmp_file_path,
            as_attachment=True,
            download_name='ai_diploma_complete_syllabus.txt',
            mimetype='text/plain'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/download/brochure', methods=['GET'])
def download_brochure():
    try:
        brochure_content = """
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
"""
        
        # Create temporary file
        with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False) as tmp_file:
            tmp_file.write(brochure_content)
            tmp_file_path = tmp_file.name
        
        return send_file(
            tmp_file_path,
            as_attachment=True,
            download_name='pu_ai_diploma_brochure.txt',
            mimetype='text/plain'
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)