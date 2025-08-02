<img width="3188" height="1202" alt="frame (3)" src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" />


# PROJECT NAME:PODA AI 🎯


## Basic Details
### Team Name:ORBIT

### Team Members
- Team Lead: Adwitha Nair - TKM College of Engineering
- Member 2: Neeta A Suresh - TKM College of Engineering


### Project Description
This project presents an interactive chatbot interface inspired by traditional Kerala culture, featuring a humorous “Malayali uncle” persona. It aims to engage users through witty Malayalam dialogues , creating an entertaining and regionally grounded digital experience.

### The Problem (that doesn't exist)
Most chatbot interfaces today lack cultural personality and emotional relatability. Our project solves this by designing a regionally inspired Malayalam-style AI bot that brings humor, familiarity, and local flavor to digital conversations—turning a typically bland user experience into something entertaining and engaging

### The Solution (that nobody asked for)
We developed a culturally themed AI chatbot interface that mimics the tone, expressions, and personality of a typical humorous Malayalam-speaking “uncle” character. By combining regional language flair, animated visuals, and a responsive design, the solution offers users a fun, emotionally engaging, and relatable interaction experience—making digital communication more lively and locally resonant.

## Technical Details
### Technologies/Components Used
For Software:
Languages used:
Python – For backend using FastAPI.\
JavaScript (React.js) – For frontend UI logic and interactivity.\
CSS – For styling the frontend interface.\
JSON – For keyword mapping and communication.
Frameworks used
FastAPI – Lightweight Python web framework used for creating APIs.
React.js – Frontend JavaScript framework for building UI.

Libraries used
Backend:
fastapi – Web API handling.\
uvicorn – ASGI server for FastAPI.\
groq – Python SDK for accessing Groq LLM API.\
random, json, os – Standard Python libraries for logic, file handling\
Frontend:\
React – Component-based frontend.\
useState – React Hook for managing state.\
Custom Assets – .gif for avatars and inline audio handling.


 

   





- Tools used
- VS Code – (presumed) IDE for development.\
Groq API – For LLM-based replies.\
Node.js & npm – For running the React frontend.\
Git – Version control (presumed).\



For Hardware:
- List main components
- Development Machine (PC/Laptop)
- RAM: 4GB minimum
- CPU: Any modern dual-core or quad-core
- OS: Windows

- [List tools required]
- Node.js (v16+)
-  Python (3.10+)
-  Browser :Chrome
-  Command Line (Terminal or CMD)
- Internet (for Groq API


### Implementation
For Software:\

Installation\
Backend:\
bash\
Copy\
Edit
### Create virtual environment (optional)
python -m venv venv\
source venv/bin/activate  # on Windows: venv\Scripts\activate

### Install dependencies\
pip install fastapi uvicorn groq\
Frontend:\
bash\
Copy\
Edit
### Create React app
npx create-react-app poda-ai\
cd poda-ai\

### Place App.js, App.css and assets
### Install necessary packages (if needed)
npm install\
Run\
Backend:\
bash\
Copy\
Edit\
uvicorn main:app --reload
### This starts the FastAPI server at http://127.0.0.1:8000
Frontend:\
bash\
Copy\
Edit\
npm start\
### Starts frontend at http://localhost:3000


# Installation
[commands]

# Run
[commands]

### Project Documentation
For Software:

This project is a chat interface where a virtual character named “Cheta”, a witty Kollam uncle, responds to user messages in Manglish using sarcasm, attitude, and humor.\
Key Features:
Keyword-based local response (offline mode).

Fallback to Groq LLM API for generating responses when no keyword match.

Fully styled frontend with avatars (Jagathy for bot, Sreenivasan for user).

CORS-enabled backend for easy API consumption.

Flow:
User types a message in the React UI.

React sends a POST request to /chat in FastAPI.

FastAPI checks for keyword matches → else sends to Groq.

Response is returned and displayed with avatar.


# Screenshots (Add at least 3)
![WhatsApp Image 2025-08-02 at 06 20 51_a12c994b](https://github.com/user-attachments/assets/07072bee-fbc4-48a6-a250-b6e8b31a7aa7)


![WhatsApp Image 2025-08-02 at 06 21 30_10dccd6a](https://github.com/user-attachments/assets/4681d1bf-a340-4b2d-899c-8c42253ed611)


### Project Demo
# Video
[Add your demo video link here]
*Explain what the video demonstrates*

## Team Contributions
- Adwitha Nair: Backend using API
- Neeta A Suresh: Frontend


---
Made with ❤️ at TinkerHub Useless Projects

![Static Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fwww.tinkerhub.org%2F)
![Static Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinkerhub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)
