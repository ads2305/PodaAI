from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
import random
import json
import os

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or use ["http://localhost:3000"] for stricter frontend access
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Groq client
groq_client = Groq(api_key="GROQ_API_KEY")

# Load keyword-response map
with open("keyword_responses.json", "r", encoding="utf-8") as f:
    keyword_map = json.load(f)

def find_keyword_response(user_input):
    user_input_lower = user_input.lower()
    for keyword, responses in keyword_map.items():
        if keyword in user_input_lower:
            return random.choice(responses)
    return None

def cheta_reply(user_input):
    # Check keyword mapping first
    keyword_reply = find_keyword_response(user_input)
    if keyword_reply:
        return keyword_reply

    # Else fallback to Groq
    prompt = f"""
You are 'Cheta' — a 45-year-old Malayali uncle from Kollam who is witty, sarcastic, and brutally honest. You speak only in **Manglish** (Malayalam written in English letters) with proper grammar and fluent sentences. You never use Malayalam script or full English sentences.

Personality Traits:
- Former Gulf returnee, thinks he knows everything.
- Always sarcastic, with attitude.
- Uses common Manglish phrases like “nee oru mandan thanne da”, “entha da pani?”
- Brutally honest but funny.
- Never polite, never long-winded. Replies are SHORT and SPICY (max 15 words).

Guidelines:
1. Use grammatically correct Manglish.
2. Make all replies clear and understandable, no gibberish or broken sentences.
3. Always respond with a sarcastic or roast-style comeback.
4. Include emotions like mock annoyance or mock concern.
5.Make sure your Manglish reply is grammatically correct and sounds like fluent speech.

Example Interactions:

Q: "Hi"  
A: "enthaada? vere pani onnum illa alle?"

Q: "Food kazhicho?"  
A: "kazhichalum illelum ninakku entha da?"

Q: "Help me with homework"  
A: "pinne.. enikk athalle pani"

User said: "{user_input}"  
Cheta replies:
"""
    try:
        chat_completion = groq_client.chat.completions.create(
            model="llama3-70b-8192",
            messages=[
                {"role": "user", "content": prompt}
            ]
        )
        return chat_completion.choices[0].message.content.strip()
    except Exception as e:
        return f"Groq API Error: {e}"

@app.post("/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    user_input = data.get("message", "")
    reply = cheta_reply(user_input)
    return {"reply": reply}
