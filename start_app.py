#!/usr/bin/env python3
"""
Application Launcher for AI Diploma Program
This script starts both Flask API and Streamlit frontend
"""

import subprocess
import threading
import time
import sys
import os

def start_flask():
    """Start Flask API server"""
    print("🔧 Starting Flask API server...")
    try:
        subprocess.run([sys.executable, "run_flask.py"], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Flask server stopped")
    except Exception as e:
        print(f"❌ Flask server error: {e}")

def start_streamlit():
    """Start Streamlit frontend"""
    print("🎨 Starting Streamlit frontend...")
    time.sleep(3)  # Wait for Flask to start
    try:
        subprocess.run([sys.executable, "run_streamlit.py"], check=True)
    except KeyboardInterrupt:
        print("\n🛑 Streamlit app stopped")
    except Exception as e:
        print(f"❌ Streamlit app error: {e}")

def main():
    print("🚀 AI Diploma Program - Full Stack Application")
    print("=" * 60)
    print("Starting both Flask API and Streamlit frontend...")
    print("\n📍 Services will be available at:")
    print("   - API Server: http://localhost:5000")
    print("   - Web App: http://localhost:8501")
    print("\n⚠️  Make sure both services are running for full functionality")
    print("=" * 60)
    
    # Start Flask in a separate thread
    flask_thread = threading.Thread(target=start_flask, daemon=True)
    flask_thread.start()
    
    # Start Streamlit in main thread
    start_streamlit()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n👋 Application stopped by user")
    except Exception as e:
        print(f"❌ Application error: {e}")