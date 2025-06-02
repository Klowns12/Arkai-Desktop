Sure, here's the contents for the file `/arkai/arkai/src/components/Assistant/CodeBlock.tsx`:

import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'typescript' }) => {
  return (
    <pre className={`language-${language}`}>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;