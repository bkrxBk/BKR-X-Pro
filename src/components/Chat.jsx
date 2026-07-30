import { useState } from "react";

export default function Chat() {

  const [message, setMessage] = useState("");

  return (
    <section className="chatBox">

      <div className="messages">

        <div className="bot">
          👋 Welcome to BKR AI Pro
        </div>

      </div>

      <div className="inputArea">

        <input
          type="text"
          placeholder="Ask anything..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button>
          Send
        </button>

      </div>

    </section>
  );
}
