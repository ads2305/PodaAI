/*import React, { useState } from 'react';
import './App.css';
import jagathyGif from './assets/jagathy.gif'; // bot avatar
import userAvatar from './assets/sreenivasan.gif'; // user avatar

function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Enthada😏?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMsg = {
        sender: 'bot',
        text: data.reply || 'Sorry, ente net slow ayi!'
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Server error da, innale pole.' }
      ]);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="chat-container">
      <h1 className="title">PODA AI 🤖🔥</h1>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={message ${msg.sender === 'bot' ? 'bot' : 'user'}}
          >
            {msg.sender === 'bot' && (
              <img src={jagathyGif} alt="Bot" className="character-img" />
            )}
            <span>{msg.text}</span>
            {msg.sender === 'user' && (
              <img src={userAvatar} alt="User" className="character-img" />
            )}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Chodikkeda🙄"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSend}>Talk</button>
      </div>
    </div>
  );
}

export default App;

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from groq import Groq
import requests

app = FastAPI()

# Enable CORS so frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for strict
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Groq client setup
groq_client = Groq(api_key="GROQ_API_KEY")
@app.post("/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    user_input = data.get("message", "")

    reply = cheta_reply(user_input)
    return {"reply": reply}

def cheta_reply(user_input):
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
        return f"Groq API Error: {e}"*/
