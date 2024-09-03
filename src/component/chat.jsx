import React, { useState } from 'react';

// chat page

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'You' }]);
      setInputMessage('');
      // Here you can also handle sending the message to a server or another user.
    }
  };

  return (
    <div className="min-h-[90vh] w-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg h-[90vhR] w-full ">
        <h2 className="text-2xl font-bold mb-4 text-center">Chat App</h2>
        <div className="flex flex-col space-y-4 mb-4 overflow-y-auto h-64 bg-gray-50 p-4 rounded-lg">
          {messages.map((message, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs break-words">
                <span className="block">{message.sender}:</span>
                <span>{message.text}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;