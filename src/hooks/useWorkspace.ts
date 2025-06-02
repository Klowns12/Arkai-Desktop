import { useEffect, useState } from 'react';
import { getWorkspaceFiles } from '../lib/workspace/parser';
import { WorkspaceFile } from '../types';

const useWorkspace = () => {
    const [files, setFiles] = useState<WorkspaceFile[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWorkspaceFiles = async () => {
            try {
                const workspaceFiles = await getWorkspaceFiles();
                setFiles(workspaceFiles);
            } catch (err) {
                setError('Failed to load workspace files');
            } finally {
                setLoading(false);
            }
        };

        fetchWorkspaceFiles();
    }, []);

    return { files, loading, error };
};

export default useWorkspace;