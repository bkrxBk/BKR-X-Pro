import { useState } from "react";
import "./App.css";
import { askGemini } from "./services/gemini";
function App() {const [input, setInput] = useState("");
const [messages, setMessages] = useState([
  {
    role: "assistant",
    text: "👋 Welcome to BKR AI Pro. How can I help you today?"
  }
]);
const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    { role: "user", text: userMessage }
  ]);

  setInput("");

  try {
    const reply = await askGemini(userMessage);

    setMessages((prev) => [
      ...prev,
      { role: "assistant", text: reply }
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "❌ Error: " + error.message
      }
    ]);
  }
};
  return (
    <div className="app">

      <aside className="sidebar">
        <div className="logo">
          🚀 <span>BKR AI Pro</span>
        </div>

        <button className="newChat">
          + New Chat
        </button>

        <div className="menu">
          <div className="item">💬 AI Chat</div>
          <div className="item">🖼 Image Generator</div>
          <div className="item">🎥 Video Generator</div>
          <div className="item">🎤 Voice AI</div>
          <div className="item">📚 Prompt Library</div>
          <div className="item">⚙️ Settings</div>
        </div>
      </aside>

      <main className="main">

        <header className="header">
          <h1>🚀 BKR AI Pro</h1>
          <p>Your Personal AI Assistant</p>
        </header>

        <section className="cards">

          <div className="card">
            <h2>💬 AI Chat</h2>
            <p>Talk with AI instantly.</p>
          </div>

          <div className="card">
            <h2>🖼 Image Generator</h2>
            <p>Create realistic AI images.</p>
          </div>

          <div className="card">
            <h2>🎥 Video Generator</h2>
            <p>Create AI videos.</p>
          </div>

          <div className="card">
            <h2>🎤 Voice Assistant</h2>
            <p>Speak with AI naturally.</p>
          </div>

        </section>

        <section className="chatBox">

          <div className="messages">
            <div className="bot">
              👋 Welcome to BKR AI Pro.
            </div>
          </div>

          <div className="inputArea">
            <input
              type="text"
              placeholder="Ask anything..."
            />

            <button>
              Send
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}

export default App;
