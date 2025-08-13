import streamlit as st
import requests
import json
from datetime import datetime

# Configuration
FLASK_API_URL = "http://localhost:5000"

# Page configuration
st.set_page_config(
    page_title="PU AI Diploma Program",
    page_icon="🤖",
    layout="wide",
    initial_sidebar_state="collapsed"
)

# Custom CSS for academic styling
st.markdown("""
<style>
    .main-header {
        background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
    
    .course-card {
        background: #f8fafc;
        padding: 1.5rem;
        border-radius: 10px;
        border-left: 4px solid #1e3a8a;
        margin-bottom: 1rem;
    }
    
    .stat-card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e2e8f0;
    }
    
    .career-card {
        background: #f0f9ff;
        padding: 1rem;
        border-radius: 8px;
        border-left: 3px solid #0ea5e9;
        margin-bottom: 0.5rem;
    }
    
    .highlight-text {
        color: #d97706;
        font-weight: 600;
    }
    
    .success-text {
        color: #059669;
        font-weight: 600;
    }
    
    .academic-blue {
        color: #1e3a8a;
        font-weight: 600;
    }
</style>
""", unsafe_allow_html=True)

def main():
    # Navigation
    st.sidebar.title("📚 Navigation")
    page = st.sidebar.selectbox("Go to", [
        "🏠 Home",
        "📖 Program Overview", 
        "📚 Curriculum",
        "✅ Eligibility",
        "💼 Career Paths",
        "📞 Contact"
    ])
    
    if page == "🏠 Home":
        show_hero_section()
        show_program_stats()
        show_program_rationale()
    elif page == "📖 Program Overview":
        show_program_overview()
    elif page == "📚 Curriculum":
        show_curriculum_section()
    elif page == "✅ Eligibility":
        show_eligibility_section()
    elif page == "💼 Career Paths":
        show_career_pathways()
    elif page == "📞 Contact":
        show_contact_section()

def show_hero_section():
    st.markdown("""
    <div class="main-header">
        <h1>🎓 Post Graduate Diploma in <span class="highlight-text">Artificial Intelligence</span></h1>
        <h3>Purbanchal University</h3>
        <p style="font-size: 1.2rem; margin-top: 1rem;">
            A comprehensive 1-year program designed for non-science graduates, featuring hands-on Python programming 
            and practical AI applications in business, marketing, and operations.
        </p>
        <div style="margin-top: 1.5rem;">
            <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px; margin-right: 1rem;">
                🕒 30 Credit Hours Program
            </span>
            <span style="background: rgba(255,255,255,0.2); padding: 0.5rem 1rem; border-radius: 20px;">
                🐍 100% Python Practical
            </span>
        </div>
    </div>
    """, unsafe_allow_html=True)
    
    col1, col2 = st.columns(2)
    with col1:
        if st.button("📞 Apply Now", key="apply_hero"):
            st.session_state.page = "📞 Contact"
            st.rerun()
    
    with col2:
        if st.button("📥 Download Brochure", key="download_brochure"):
            download_brochure()

def show_program_stats():
    st.markdown("### 📊 Program Highlights")
    
    col1, col2, col3, col4 = st.columns(4)
    
    with col1:
        st.markdown("""
        <div class="stat-card">
            <h2 class="academic-blue">1 Year</h2>
            <p>Program Duration</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("""
        <div class="stat-card">
            <h2 class="success-text">30 Credits</h2>
            <p>Total Credit Hours</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col3:
        st.markdown("""
        <div class="stat-card">
            <h2 class="highlight-text">10 Courses</h2>
            <p>Comprehensive Curriculum</p>
        </div>
        """, unsafe_allow_html=True)
    
    with col4:
        st.markdown("""
        <div class="stat-card">
            <h2 style="color: #7c3aed;">100%</h2>
            <p>Python Practical</p>
        </div>
        """, unsafe_allow_html=True)

def show_program_rationale():
    st.markdown("### 🎯 Program Rationale & Objectives")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("#### Program Rationale")
        rationale_points = [
            "Growing demand for AI professionals across industries, especially in business applications",
            "Non-science graduates need accessible pathways to enter the AI field",
            "Industry requires professionals who understand both AI technology and business applications",
            "Nepal's digital transformation requires AI-literate professionals"
        ]
        
        for point in rationale_points:
            st.markdown(f"✅ {point}")
    
    with col2:
        st.markdown("#### Learning Objectives")
        objectives = [
            "Develop practical AI skills using Python programming",
            "Master data science and database management fundamentals",
            "Apply AI tools in marketing, operations, and supply chain management",
            "Build industry-ready AI solutions and applications"
        ]
        
        for objective in objectives:
            st.markdown(f"🎯 {objective}")

def show_program_overview():
    st.title("📖 Program Overview")
    
    st.markdown("""
    ## About the Program
    
    The Post Graduate Diploma in Artificial Intelligence is a comprehensive 30-credit hour program designed specifically 
    for non-science graduates who want to enter the rapidly growing AI field. This practical, hands-on program emphasizes 
    Python programming and real-world applications in business contexts.
    
    ### Key Features
    - **Practical Focus**: Every course includes substantial hands-on Python programming
    - **Business Applications**: Emphasis on AI in marketing, operations, and supply chain
    - **Industry Ready**: Curriculum designed with industry input and real project work
    - **Accessible**: No prior programming or science background required
    - **Comprehensive**: Covers all essential AI domains from fundamentals to advanced applications
    
    ### Program Structure
    The program is delivered over two semesters, with 5 courses per semester. Each course is worth 3 credit hours 
    and includes both theoretical foundations and extensive practical work.
    """)
    
    show_program_stats()

def show_curriculum_section():
    st.title("📚 Comprehensive Curriculum")
    st.markdown("*Two semesters, five courses each, all with hands-on Python practicals*")
    
    # Download all syllabi button
    if st.button("📥 Download All Syllabi", key="download_all"):
        download_all_syllabi()
    
    # Semester selection
    semester = st.selectbox("Select Semester", ["Semester 1 (15 Credits)", "Semester 2 (15 Credits)"])
    
    # View mode selection
    view_mode = st.radio("View Mode", ["Overview", "Detailed"], horizontal=True)
    
    semester_num = "1" if "Semester 1" in semester else "2"
    
    try:
        response = requests.get(f"{FLASK_API_URL}/api/courses?semester={semester_num}")
        if response.status_code == 200:
            courses = response.json()
            
            for course in courses:
                with st.expander(f"📖 {course['title']} ({course['credits']} Credits)", expanded=False):
                    st.markdown(f"**Description:** {course['description']}")
                    
                    # Download individual syllabus
                    if st.button(f"📥 Download Syllabus", key=f"download_{course['id']}"):
                        download_course_syllabus(course['id'])
                    
                    if view_mode == "Overview":
                        st.markdown("**Course Content:**")
                        for item in course['content']:
                            st.markdown(f"• {item}")
                    
                    else:  # Detailed view
                        st.markdown("#### 🎯 Course Objectives")
                        for obj in course['detailed_syllabus']['objectives']:
                            st.markdown(f"• {obj}")
                        
                        st.markdown("#### 📋 Prerequisites")
                        st.markdown(course['detailed_syllabus']['prerequisites'])
                        
                        st.markdown("#### ⏰ Course Content & Hours")
                        for item in course['content']:
                            st.markdown(f"• {item}")
                        
                        st.markdown("#### ✅ Learning Outcomes")
                        for outcome in course['detailed_syllabus']['learning_outcomes']:
                            st.markdown(f"• {outcome}")
                        
                        st.markdown("#### 📊 Assessment Methods")
                        for assessment in course['detailed_syllabus']['assessments']:
                            st.markdown(f"• {assessment}")
        else:
            st.error("Failed to load course data")
    except Exception as e:
        st.error(f"Error connecting to API: {str(e)}")

def show_eligibility_section():
    st.title("✅ Eligibility & Admission")
    st.markdown("*Open to all graduates - No science background required*")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("### ✅ Eligibility Criteria")
        criteria = [
            ("🎓", "Bachelor's Degree", "Any bachelor's degree from a recognized university"),
            ("👥", "All Backgrounds Welcome", "Arts, Commerce, Management, or Science graduates"),
            ("💻", "Basic Computer Skills", "Familiarity with computers and internet usage"),
            ("🌐", "English Proficiency", "Ability to understand and communicate in English")
        ]
        
        for icon, title, desc in criteria:
            st.markdown(f"""
            <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                <span style="font-size: 1.5rem; margin-right: 1rem;">{icon}</span>
                <div>
                    <strong>{title}</strong><br>
                    <small style="color: #6b7280;">{desc}</small>
                </div>
            </div>
            """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("### 📝 Application Process")
        steps = [
            ("1", "Submit Application", "Complete online application form with required documents"),
            ("2", "Document Verification", "Academic transcripts and certificate verification"),
            ("3", "Entrance Interview", "Brief interview to assess motivation and goals"),
            ("4", "Admission Confirmation", "Receive admission letter and enrollment instructions")
        ]
        
        for step, title, desc in steps:
            st.markdown(f"""
            <div style="display: flex; align-items: center; margin-bottom: 1.5rem;">
                <div style="background: #1e3a8a; color: white; width: 2rem; height: 2rem; border-radius: 50%; 
                            display: flex; align-items: center; justify-content: center; margin-right: 1rem; font-weight: bold;">
                    {step}
                </div>
                <div>
                    <strong>{title}</strong><br>
                    <small style="color: #6b7280;">{desc}</small>
                </div>
            </div>
            """, unsafe_allow_html=True)

def show_career_pathways():
    st.title("💼 Career Pathways & Progression")
    st.markdown("*Diverse opportunities in the rapidly growing AI industry*")
    
    st.markdown("### 🚀 Immediate Career Opportunities")
    
    opportunities = [
        ("📊", "Data Analyst", "Analyze business data to drive decision-making", "Entry Level • NPR 35-50K/month"),
        ("📢", "AI Marketing Specialist", "Implement AI tools in digital marketing campaigns", "Entry Level • NPR 40-60K/month"),
        ("⚙️", "Operations Analyst", "Optimize business processes using AI tools", "Entry Level • NPR 35-55K/month"),
        ("💻", "Python Developer", "Develop AI-powered applications and tools", "Entry Level • NPR 45-65K/month"),
        ("👥", "Business Intelligence Analyst", "Transform data into actionable business insights", "Entry Level • NPR 40-60K/month"),
        ("🚀", "AI Consultant", "Help businesses implement AI solutions", "Mid Level • NPR 60-100K/month")
    ]
    
    col1, col2, col3 = st.columns(3)
    
    for i, (icon, title, desc, salary) in enumerate(opportunities):
        col = [col1, col2, col3][i % 3]
        with col:
            st.markdown(f"""
            <div class="career-card">
                <h4>{icon} {title}</h4>
                <p style="color: #6b7280; font-size: 0.9rem;">{desc}</p>
                <p class="success-text" style="font-size: 0.8rem;">{salary}</p>
            </div>
            """, unsafe_allow_html=True)
    
    st.markdown("### 🎓 Further Education Pathways")
    
    education_paths = [
        ("🎓", "Master's in Data Science", "Advanced data science and machine learning programs"),
        ("💻", "Master's in Computer Science", "AI specialization tracks in CS programs"),
        ("💼", "MBA with AI Specialization", "Business leadership with AI expertise"),
        ("🏆", "Professional Certifications", "AWS, Google Cloud, Microsoft AI certifications"),
        ("📚", "Research Programs", "PhD opportunities in AI and related fields"),
        ("🌍", "International Programs", "Study abroad opportunities in AI hubs")
    ]
    
    col1, col2, col3 = st.columns(3)
    
    for i, (icon, title, desc) in enumerate(education_paths):
        col = [col1, col2, col3][i % 3]
        with col:
            st.markdown(f"""
            <div style="background: white; padding: 1rem; border-radius: 8px; border-left: 3px solid #d97706; margin-bottom: 0.5rem;">
                <h4>{icon} {title}</h4>
                <p style="color: #6b7280; font-size: 0.9rem;">{desc}</p>
            </div>
            """, unsafe_allow_html=True)

def show_contact_section():
    st.title("📞 Get Started Today")
    st.markdown("*Have questions? We're here to help you begin your AI journey*")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.markdown("### 📍 Contact Information")
        
        contact_info = [
            ("📍", "Campus Address", ["Purbanchal University", "Computer Application Department", "Biratnagar, Nepal"]),
            ("📞", "Phone", ["+977-XXX-XXXXXX", "+977-XXX-XXXXXX"]),
            ("📧", "Email", ["ai.diploma@pu.edu.np", "admissions@pu.edu.np"]),
            ("🕒", "Office Hours", ["Sunday - Friday: 9:00 AM - 5:00 PM", "Saturday: Closed"])
        ]
        
        for icon, title, details in contact_info:
            st.markdown(f"""
            <div style="display: flex; align-items: start; margin-bottom: 1.5rem;">
                <span style="font-size: 1.5rem; margin-right: 1rem; margin-top: 0.2rem;">{icon}</span>
                <div>
                    <strong>{title}</strong><br>
                    {"<br>".join([f'<span style="color: #6b7280;">{detail}</span>' for detail in details])}
                </div>
            </div>
            """, unsafe_allow_html=True)
    
    with col2:
        st.markdown("### ✉️ Send Us Your Inquiry")
        
        with st.form("inquiry_form"):
            col_a, col_b = st.columns(2)
            with col_a:
                first_name = st.text_input("First Name*")
            with col_b:
                last_name = st.text_input("Last Name*")
            
            email = st.text_input("Email Address*")
            phone = st.text_input("Phone Number*")
            
            education = st.selectbox("Educational Background*", [
                "",
                "Bachelor of Business Administration (BBA)",
                "Bachelor of Arts (BA)",
                "Bachelor of Commerce (B.Com)",
                "Bachelor of Science (B.Sc)",
                "Other"
            ])
            
            message = st.text_area("Message*", placeholder="Tell us about your interest in the AI diploma program...")
            
            submitted = st.form_submit_button("Send Inquiry", use_container_width=True)
            
            if submitted:
                if not all([first_name, last_name, email, phone, education, message]):
                    st.error("Please fill in all required fields.")
                else:
                    try:
                        inquiry_data = {
                            "firstName": first_name,
                            "lastName": last_name,
                            "email": email,
                            "phone": phone,
                            "education": education,
                            "message": message
                        }
                        
                        response = requests.post(f"{FLASK_API_URL}/api/inquiries", json=inquiry_data)
                        
                        if response.status_code == 201:
                            st.success("✅ Inquiry submitted successfully! We will contact you soon.")
                            st.balloons()
                        else:
                            st.error("❌ Failed to submit inquiry. Please try again.")
                    except Exception as e:
                        st.error(f"❌ Error: {str(e)}")

def download_course_syllabus(course_id):
    try:
        response = requests.get(f"{FLASK_API_URL}/api/download/syllabus/{course_id}")
        if response.status_code == 200:
            st.download_button(
                label="📥 Download Course Syllabus",
                data=response.content,
                file_name=f"course_{course_id}_syllabus.txt",
                mime="text/plain"
            )
        else:
            st.error("Failed to download syllabus")
    except Exception as e:
        st.error(f"Error downloading syllabus: {str(e)}")

def download_all_syllabi():
    try:
        response = requests.get(f"{FLASK_API_URL}/api/download/all-syllabi")
        if response.status_code == 200:
            st.download_button(
                label="📥 Download Complete Curriculum",
                data=response.content,
                file_name="ai_diploma_complete_syllabus.txt",
                mime="text/plain"
            )
        else:
            st.error("Failed to download syllabi")
    except Exception as e:
        st.error(f"Error downloading syllabi: {str(e)}")

def download_brochure():
    try:
        response = requests.get(f"{FLASK_API_URL}/api/download/brochure")
        if response.status_code == 200:
            st.download_button(
                label="📥 Download Program Brochure",
                data=response.content,
                file_name="pu_ai_diploma_brochure.txt",
                mime="text/plain"
            )
        else:
            st.error("Failed to download brochure")
    except Exception as e:
        st.error(f"Error downloading brochure: {str(e)}")

if __name__ == "__main__":
    main()