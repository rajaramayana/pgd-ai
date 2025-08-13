# Post Graduate Diploma in AI - Landing Page

## Overview

This is a comprehensive web application for Purbanchal University's Post Graduate Diploma in Artificial Intelligence program. The application serves as both an academic planning tool and a showcase portal for a 30-credit hour, 1-year program designed for non-science graduates, featuring practical Python-based courses across two semesters with specific focus on AI applications in marketing, operations, and supply chain management.

**Recent Major Update (January 2025)**: Successfully converted from React/Express/PostgreSQL architecture to Flask backend and Streamlit frontend for easier deployment and maintenance while preserving all functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture (Streamlit)
The frontend is built using **Streamlit** providing an interactive web interface:

- **Multi-Page Application**: Navigation sidebar with dedicated pages for Home, Program Overview, Curriculum, Eligibility, Career Paths, and Contact
- **Interactive Components**: Course expansion, semester tabs, view mode toggles (Overview/Detailed)
- **Custom Styling**: Academic-themed CSS with university branding, responsive design, and professional color scheme
- **Download Integration**: Seamless file downloads for syllabi and program materials
- **Form Handling**: Built-in Streamlit forms with validation for student inquiries

### Backend Architecture (Flask)
The backend uses **Flask** with Python following a RESTful API pattern:

- **API Routes**: REST endpoints for inquiry management, course data, and file downloads
- **CORS Integration**: Cross-origin resource sharing enabled for frontend communication
- **Data Validation**: Request validation with proper error handling and HTTP status codes
- **File Generation**: Dynamic syllabus and brochure generation for downloads
- **Database Integration**: SQLite database with automatic schema creation

### Data Storage Solutions
The application uses a simplified database approach:

- **SQLite Database**: Lightweight file-based database (`ai_diploma.db`) for development and production
- **Auto-Schema Creation**: Database tables created automatically on first run
- **Inquiry Management**: Student inquiry storage with comprehensive field capture
- **Course Data**: Structured course information with detailed syllabi stored in application code

### Design Patterns
- **API-First Architecture**: Clear separation between Flask backend API and Streamlit frontend
- **Component-Based UI**: Streamlit pages and sections organized by feature (hero, curriculum, contact, etc.)
- **Configuration-Driven**: Environment variables for API URLs and deployment settings
- **Service Layer**: Dedicated functions for file generation, downloads, and data processing

## External Dependencies

### Core Frameworks
- **Flask 3.1.1**: Lightweight Python web framework for API development
- **Streamlit 1.48.0**: Modern Python framework for interactive web applications
- **SQLite**: Built-in Python database for data persistence

### Networking & Integration
- **Flask-CORS 6.0.1**: Cross-Origin Resource Sharing support for API communication
- **Requests 2.32.4**: HTTP library for API communication between frontend and backend

### Data Handling
- **Pandas 2.3.1**: Data manipulation and analysis (included with Streamlit)
- **NumPy 2.3.2**: Numerical computing support
- **Python Standard Library**: JSON, SQLite3, UUID, datetime for core functionality

### Deployment & Development
- **Python 3.11**: Modern Python runtime with enhanced performance
- **Threading**: Multi-service application startup and management
- **Subprocess**: Service orchestration and process management

## Deployment Configuration

### Application Structure
- **flask_app.py**: Main Flask API server with all endpoints and database logic
- **streamlit_app.py**: Complete Streamlit frontend with all pages and functionality
- **start_app.py**: Combined launcher for both services
- **run_flask.py**: Standalone Flask server launcher
- **run_streamlit.py**: Standalone Streamlit application launcher

### Available Endpoints
- **POST /api/inquiries**: Student inquiry submission
- **GET /api/inquiries**: Retrieve all inquiries
- **GET /api/courses**: Course data retrieval with semester filtering
- **GET /api/download/syllabus/<course_id>**: Individual course syllabus download
- **GET /api/download/all-syllabi**: Complete curriculum package download
- **GET /api/download/brochure**: Program brochure download

### Enhanced Features Added (January 2025)
- **Detailed Course Syllabi**: Comprehensive course information with objectives, prerequisites, learning outcomes, and assessment methods
- **Download Functionality**: Individual and bulk syllabus downloads, program brochure download
- **Interactive Curriculum Browser**: Overview and detailed view modes with expandable course information
- **Complete API Integration**: RESTful endpoints for all data operations and file downloads
- **Professional Styling**: Academic-themed design with university branding and responsive layout