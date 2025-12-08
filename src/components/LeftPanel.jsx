import React from 'react';
import { FiArrowRight, FiInfo } from 'react-icons/fi';
import './LeftPanel.css';

const LeftPanel = ({ stepContent }) => {
    // Parse text and convert backticks to inline code elements and **text** to highlighted text
    const parseTextWithCode = (text) => {
        if (!text) return null;
        const parts = [];
        let currentIndex = 0;
        
        // Combined regex to match both code blocks and highlighted text
        // Match **text** for highlighted (white) text and `code` for inline code
        const regex = /(\*\*([^*]+)\*\*|`([^`]+)`)/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            // Add text before the match
            if (match.index > currentIndex) {
                parts.push({ type: 'text', content: text.substring(currentIndex, match.index) });
            }
            
            // Check if it's highlighted text (**text**) or code (`code`)
            if (match[0].startsWith('**')) {
                parts.push({ type: 'highlight', content: match[2] });
            } else if (match[0].startsWith('`')) {
                parts.push({ type: 'code', content: match[3] });
            }
            
            currentIndex = match.index + match[0].length;
        }

        // Add remaining text
        if (currentIndex < text.length) {
            parts.push({ type: 'text', content: text.substring(currentIndex) });
        }

        return parts.length > 0 ? parts : [{ type: 'text', content: text }];
    };

    // Render text with inline code blocks and highlighted text
    const renderTextWithCode = (text) => {
        const parts = parseTextWithCode(text);
        return parts.map((part, index) => {
            if (part.type === 'code') {
                return <code key={index} className="step-inline-code">{part.content}</code>;
            }
            if (part.type === 'highlight') {
                return <span key={index} className="step-highlight-text">{part.content}</span>;
            }
            return <span key={index}>{part.content}</span>;
        });
    };

    // Render details with support for newlines and inline code
    const renderDetails = () => {
        if (!stepContent.details) return null;
        // Split by newline and render each line
        const lines = stepContent.details.split('\n').filter(line => line.trim());
        return (
            <div className="step-panel-details">
                {lines.map((line, index) => (
                    <p key={index}>{renderTextWithCode(line)}</p>
                ))}
            </div>
        );
    };

    return (
        <div className="step-left-panel">
            <h2 className="step-panel-title">{stepContent.title}</h2>
            {stepContent.description && (
                <p className="step-panel-description">{renderTextWithCode(stepContent.description)}</p>
            )}
            {renderDetails()}

            {stepContent.codeBlock && (
                <div className="step-code-block">
                    <pre><code>{stepContent.codeBlock}</code></pre>
                </div>
            )}

            {stepContent.docsLink && (
                <a 
                    href={stepContent.docsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="step-read-docs-btn"
                >
                    <span>Read docs</span>
                    <FiArrowRight />
                </a>
            )}

            {stepContent.autoDiscovery && (
                <div className="step-auto-discovery-box">
                    <div className="step-box-header">
                        <FiInfo />
                        <span>Auto-discovery</span>
                    </div>
                    <p>{renderTextWithCode(stepContent.autoDiscovery)}</p>
                </div>
            )}
        </div>
    );
};

export default LeftPanel;
