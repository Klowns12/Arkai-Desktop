Sure, here's the contents for the file: /arkai/arkai/src/components/Assistant/PromptInput.tsx

import React, { useState } from 'react';

const PromptInput: React.FC<{ onSubmit: (prompt: string) => void }> = ({ onSubmit }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            onSubmit(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow p-2 border rounded"
            />
            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
                Submit
            </button>
        </form>
    );
};

export default PromptInput;