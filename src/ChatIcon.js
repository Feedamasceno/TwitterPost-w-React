import React from "react";
import Chat from "./chat-icon.png";

function ChatIcon() {
  return (
    <section className="chat-section">
      <img src={Chat} alt="Chat Icon" className="chat-icon" />
    </section>
  );
}

export default ChatIcon;
