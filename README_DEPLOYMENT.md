# AI Diploma Program - Flask & Streamlit Deployment

## Overview

This application has been converted from React/Express to Flask (backend) and Streamlit (frontend) for easier deployment and maintenance. The application provides a comprehensive landing page for Purbanchal University's Post Graduate Diploma in Artificial Intelligence program.

## Architecture

### Backend (Flask)
- **File**: `flask_app.py`
- **Port**: 5000
- **Database**: SQLite (ai_diploma.db)
- **Features**:
  - REST API endpoints for inquiries and course data
  - File download endpoints for syllabi and brochures
  - CORS enabled for frontend communication

### Frontend (Streamlit)
- **File**: `streamlit_app.py`
- **Port**: 8501
- **Features**:
  - Interactive web interface
  - Multi-page navigation
  - Course curriculum browser
  - Download functionality
  - Contact form

## Quick Start

### Option 1: Run Both Services Together
```bash
python start_app.py
```
This starts both Flask API (port 5000) and Streamlit frontend (port 8501).

### Option 2: Run Services Separately

#### Start Flask API Server
```bash
python run_flask.py
```

#### Start Streamlit Frontend (in another terminal)
```bash
python run_streamlit.py
```

## API Endpoints

### Core Endpoints
- `POST /api/inquiries` - Submit student inquiry
- `GET /api/inquiries` - Retrieve all inquiries
- `GET /api/courses?semester=1|2` - Get course data

### Download Endpoints
- `GET /api/download/syllabus/<course_id>` - Download individual course syllabus
- `GET /api/download/all-syllabi` - Download complete curriculum
- `GET /api/download/brochure` - Download program brochure

## Features

### 🏠 Homepage
- Hero section with program highlights
- Program statistics and overview
- Download program brochure

### 📚 Curriculum
- Interactive course browser
- Semester-wise course organization
- Overview and detailed view modes
- Individual and bulk syllabus downloads

### ✅ Eligibility
- Admission requirements
- Application process steps

### 💼 Career Paths
- Immediate career opportunities with salary ranges
- Further education pathways

### 📞 Contact
- University contact information
- Student inquiry submission form

## Deployment Options

### Local Development
1. Install dependencies: `pip install flask flask-cors streamlit requests`
2. Run: `python start_app.py`
3. Access: http://localhost:8501

### Cloud Deployment

#### Heroku Deployment
1. Create `Procfile`:
```
web: python run_flask.py
```

2. Create `runtime.txt`:
```
python-3.11.0
```

3. Deploy Flask API first, then deploy Streamlit as separate app

#### Railway/Render Deployment
- Deploy Flask API as web service
- Deploy Streamlit as separate web service
- Update `FLASK_API_URL` in streamlit_app.py to point to deployed API

#### Docker Deployment
1. Create Dockerfile for Flask:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install flask flask-cors requests
EXPOSE 5000
CMD ["python", "run_flask.py"]
```

2. Create Dockerfile for Streamlit:
```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
RUN pip install streamlit requests
EXPOSE 8501
CMD ["python", "run_streamlit.py"]
```

## Configuration

### Environment Variables
- `FLASK_API_URL`: URL of Flask API (default: http://localhost:5000)
- `DEBUG`: Enable debug mode for Flask (default: True)

### Database
- SQLite database (`ai_diploma.db`) is created automatically
- Contains inquiries table for student submissions

## File Structure
```
├── flask_app.py           # Flask API server
├── streamlit_app.py       # Streamlit frontend
├── run_flask.py          # Flask launcher script
├── run_streamlit.py      # Streamlit launcher script  
├── start_app.py          # Combined launcher
├── ai_diploma.db         # SQLite database (auto-created)
└── README_DEPLOYMENT.md  # This file
```

## Troubleshooting

### Common Issues
1. **Port conflicts**: Change ports in run scripts if 5000/8501 are in use
2. **API connection errors**: Ensure Flask server is running before Streamlit
3. **Database permissions**: Ensure write permissions for SQLite database

### Development Tips
- Use `python start_app.py` for full development environment
- Flask runs in debug mode for auto-reload
- Check browser console for API connection issues

## Migration from React/Express

### Key Changes
- React components → Streamlit pages and sections
- Express routes → Flask endpoints
- PostgreSQL → SQLite (easily changeable)
- npm scripts → Python run scripts

### Maintained Features
- All original functionality preserved
- Same course data and curriculum structure
- Download capabilities for syllabi and brochures
- Student inquiry submission system

## Support

For deployment issues or questions:
1. Check Flask API is accessible at /api/courses
2. Verify Streamlit can connect to Flask API
3. Check browser console for JavaScript errors
4. Review application logs for detailed error messages