#!/usr/bin/env python3
"""
Streamlit Frontend Application for AI Diploma Program
Run this to start the frontend web application
"""

import subprocess
import sys
import os

def run_streamlit():
    print("🚀 Starting Streamlit frontend application...")
    print("🌐 App will be available at: http://localhost:8501")
    print("📱 Features available:")
    print("   - Complete program information")
    print("   - Interactive curriculum browser")
    print("   - Course syllabus downloads")
    print("   - Student inquiry form")
    print("   - Career pathway information")
    print("\n" + "="*60)
    
    # Run streamlit
    try:
        subprocess.run([
            sys.executable, "-m", "streamlit", "run", "streamlit_app.py",
            "--server.port", "8501",
            "--server.address", "0.0.0.0"
        ], check=True)
    except KeyboardInterrupt:
        print("\n👋 Streamlit app stopped")
    except Exception as e:
        print(f"❌ Error running Streamlit: {e}")

if __name__ == '__main__':
    run_streamlit()