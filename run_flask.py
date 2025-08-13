#!/usr/bin/env python3
"""
Flask API Server for AI Diploma Program
Run this to start the backend API server
"""

from flask_app import app

if __name__ == '__main__':
    print("🚀 Starting Flask API server...")
    print("📍 API will be available at: http://localhost:5000")
    print("📚 Available endpoints:")
    print("   - POST /api/inquiries - Submit inquiry")
    print("   - GET  /api/inquiries - Get all inquiries") 
    print("   - GET  /api/courses - Get course data")
    print("   - GET  /api/download/syllabus/<course_id> - Download course syllabus")
    print("   - GET  /api/download/all-syllabi - Download all syllabi")
    print("   - GET  /api/download/brochure - Download program brochure")
    print("\n" + "="*60)
    
    app.run(debug=True, host='0.0.0.0', port=5000)