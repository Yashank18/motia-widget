import React from 'react';
import './StepNavigation.css';
import triggerIcon from '../assets/trigger.svg';
import handlerIcon from '../assets/handler.svg';
import emitIcon from '../assets/emit.svg';
import stateIcon from '../assets/state.svg';
import loggerIcon from '../assets/logger.svg';
import streamsIcon from '../assets/streams.svg';

const StepNavigation = ({ activeStep, onStepChange }) => {
    const steps = [
        { id: 'trigger', label: 'TRIGGER', icon: triggerIcon },
        { id: 'handler', label: 'HANDLER', icon: handlerIcon },
        { id: 'emit', label: 'EMIT', icon: emitIcon },
        { id: 'state', label: 'STATE', icon: stateIcon },
        { id: 'logger', label: 'LOGGER', icon: loggerIcon },
        { id: 'streams', label: 'STREAMS', icon: streamsIcon }
    ];

    return (
        <nav className="step-navigation">
            {steps.map(step => (
                <button
                    key={step.id}
                    className={`step-btn ${activeStep === step.id ? 'active' : ''}`}
                    onClick={() => onStepChange(step.id)}
                >
                    <img src={step.icon} alt="" className="step-icon" />
                    <span className="step-label">{step.label}</span>
                </button>
            ))}
        </nav>
    );
};

export default StepNavigation;
