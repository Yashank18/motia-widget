import React from 'react';
import { SiTypescript, SiPython, SiJavascript } from 'react-icons/si';
import './LanguageSelector.css';

const LanguageSelector = ({ activeLanguage, onLanguageChange }) => {
    const languages = [
        { id: 'typescript', icon: <SiTypescript />, label: 'TS' },
        { id: 'javascript', icon: <SiJavascript />, label: 'JS' },
        { id: 'python', icon: <SiPython />, label: 'PY' }
    ];

    return (
        <div className="language-selector">
            {languages.map(lang => (
                <button
                    key={lang.id}
                    className={`language-btn ${activeLanguage === lang.id ? 'active' : ''}`}
                    onClick={() => onLanguageChange(lang.id)}
                    title={lang.label}
                >
                    {lang.icon}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
