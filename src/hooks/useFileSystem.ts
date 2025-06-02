import { useEffect, useState } from 'react';

const useFileSystem = () => {
    const [files, setFiles] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const readDirectory = async (path: string) => {
        try {
            const response = await window.electron.readDirectory(path);
            setFiles(response);
        } catch (err) {
            setError('Failed to read directory');
        }
    };

    useEffect(() => {
        // Initial read of the user's workspace directory
        readDirectory('/path/to/workspace');
    }, []);

    return { files, error, readDirectory };
};

export default useFileSystem;