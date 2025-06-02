import { useState, useEffect } from 'react';

const useAI = () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAIResponse = async (prompt) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('YOUR_AI_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, fetchAIResponse };
};

export default useAI;