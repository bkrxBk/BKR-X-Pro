import "./App.css";

function App() {
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
