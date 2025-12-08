import React from 'react';
import { FiCode, FiZap, FiCalendar } from 'react-icons/fi';
import './CategoryTabs.css';

const CategoryTabs = ({ activeCategory, onCategoryChange, activeStep }) => {
    // Map step names to display labels
    const stepLabels = {
        trigger: 'TRIGGER',
        handler: 'HANDLER',
        emit: 'EMIT',
        state: 'STATE',
        logger: 'LOGGER',
        streams: 'STREAMS'
    };

    const categories = [
        { id: 'api-streams', label: `API ${stepLabels[activeStep] || 'TRIGGER'}`, icon: <FiCode /> },
        { id: 'event-streams', label: `EVENT ${stepLabels[activeStep] || 'TRIGGER'}`, icon: <FiZap /> },
        { id: 'cron-streams', label: `CRON ${stepLabels[activeStep] || 'TRIGGER'}`, icon: <FiCalendar /> }
    ];

    return (
        <div className="step-category-tabs">
            {categories.map(category => (
                <button
                    key={category.id}
                    className={`step-category-tab ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => onCategoryChange(category.id)}
                >
                    <span className="step-category-icon">{category.icon}</span>
                    <span className="step-category-label">{category.label}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
