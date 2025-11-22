import React from 'react';
import { FiArrowRight, FiInfo } from 'react-icons/fi';
import './LeftPanel.css';

const LeftPanel = ({ stepContent }) => {
    return (
        <div className="left-panel">
            <h2 className="panel-title">{stepContent.title}</h2>
            <p className="panel-description">{stepContent.description}</p>
            <p className="panel-details">{stepContent.details}</p>

            <button className="read-docs-btn">
                <span>Read docs</span>
                <FiArrowRight />
            </button>

            {stepContent.autoDiscovery && (
                <div className="auto-discovery-box">
                    <div className="box-header">
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
