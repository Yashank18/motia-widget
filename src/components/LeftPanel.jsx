import React from 'react';
import { FiArrowRight, FiInfo } from 'react-icons/fi';
import './LeftPanel.css';

const LeftPanel = ({ stepContent }) => {
    return (
        <div className="step-left-panel">
            <h2 className="step-panel-title">{stepContent.title}</h2>
            <p className="step-panel-description">{stepContent.description}</p>
            <p className="step-panel-details">{stepContent.details}</p>

            <button className="step-read-docs-btn">
                <span>Read docs</span>
                <FiArrowRight />
            </button>

            {stepContent.autoDiscovery && (
                <div className="step-auto-discovery-box">
                    <div className="step-box-header">
                        <FiInfo />
                        <span>Auto-discovery</span>
                    </div>
                    <p>{stepContent.autoDiscovery}</p>
                </div>
            )}
        </div>
    );
};

export default LeftPanel;
