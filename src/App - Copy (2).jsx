// App.jsx
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Simulate bot response or call AI API
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: `Bot: You said "${inputText}"`, sender: 'bot' }]);
      }, 500);
    }
  };

  return (
    <div className="chatbot-container">
      <ChatWindow messages={messages} />
      <MessageInput inputText={inputText} setInputText={setInputText} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default App;