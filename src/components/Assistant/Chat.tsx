import React from 'react';

const Chat: React.FC = () => {
    const [messages, setMessages] = React.useState<string[]>([]);
    const [input, setInput] = React.useState<string>('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
            // Here you would typically send the input to the AI and get a response
        }
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="input-field"
                />
                <button onClick={handleSend} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;