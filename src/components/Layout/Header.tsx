import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <h1 className="text-xl font-bold">Arkai</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Features</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;