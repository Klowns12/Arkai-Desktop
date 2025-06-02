import React from 'react';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { FileTree } from './components/Context/FileTree';
import { Workspace } from './components/Context/Workspace';
import { Chat } from './components/Assistant/Chat';
import { PromptInput } from './components/Assistant/PromptInput';
import { CodeBlock } from './components/Assistant/CodeBlock';

const App: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 p-4">
                    <FileTree />
                    <Workspace />
                    <Chat />
                    <PromptInput />
                    <CodeBlock />
                </div>
            </div>
        </div>
    );
};

export default App;