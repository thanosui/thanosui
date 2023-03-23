import React, { useState } from 'react';

const DarkModeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button onClick={handleClick}>
            {darkMode ? 'Light mode' : 'Dark mode'}
        </button>
    );
};

export default DarkModeSwitcher;