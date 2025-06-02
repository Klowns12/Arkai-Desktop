import React from 'react';

const FileTree: React.FC = () => {
    // Sample file tree structure
    const fileTree = [
        {
            name: 'src',
            children: [
                { name: 'components', children: [] },
                { name: 'hooks', children: [] },
                { name: 'lib', children: [] },
                { name: 'stores', children: [] },
                { name: 'types', children: [] },
                { name: 'utils', children: [] },
            ],
        },
        { name: 'package.json', children: [] },
        { name: 'tsconfig.json', children: [] },
        { name: 'README.md', children: [] },
    ];

    const renderTree = (nodes: any) => {
        return (
            <ul>
                {nodes.map((node: any) => (
                    <li key={node.name}>
                        {node.name}
                        {node.children && node.children.length > 0 ? renderTree(node.children) : null}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h2>File Tree</h2>
            {renderTree(fileTree)}
        </div>
    );
};

export default FileTree;