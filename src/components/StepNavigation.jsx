import React from 'react';
import './StepNavigation.css';

const StepNavigation = ({ activeStep, onStepChange }) => {
    const steps = [
        { id: 'trigger', label: 'TRIGGER' },
        { id: 'handler', label: 'HANDLER' },
        { id: 'emit', label: 'EMIT' },
        { id: 'state', label: 'STATE' },
        { id: 'logger', label: 'LOGGER' },
        { id: 'streams', label: 'STREAMS' }
    ];

    return (
        <nav className="step-navigation">
            {steps.map(step => (
                <button
                    key={step.id}
                    className={`step-btn ${activeStep === step.id ? 'active' : ''}`}
                    onClick={() => onStepChange(step.id)}
                >
                    <span className="step-label">{step.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default StepNavigation;
