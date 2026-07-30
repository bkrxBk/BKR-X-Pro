export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        🚀 BKR AI Pro
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
        <div className="item">⚙ Settings</div>
      </div>
    </aside>
  );
}
