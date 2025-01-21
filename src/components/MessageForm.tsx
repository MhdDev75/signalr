"use client"
import { useState, useEffect } from "react";
import { startConnection, sendMessage } from "../lib/signalr";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    startConnection();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageForm;
