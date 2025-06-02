// src/types/index.ts

export interface AIResponse {
    id: string;
    object: string;
    created: number;
    model: string;
    choices: Array<{
        text: string;
        index: number;
        logprobs: any;
        finish_reason: string;
    }>;
}

export interface FileNode {
    name: string;
    path: string;
    type: 'file' | 'directory';
    children?: FileNode[];
}

export interface WorkspaceState {
    files: FileNode[];
    currentFile: string | null;
}

export interface CodeBlock {
    language: string;
    code: string;
}

export interface UserPrompt {
    input: string;
    context?: string;
}