import React, { useEffect, useRef } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { FiCopy, FiCheck } from 'react-icons/fi';
import './CodeDisplay.css';

const CodeDisplay = React.memo(({ code, language, highlightLines, filename }) => {
    const [copied, setCopied] = React.useState(false);
    const highlightRefs = useRef({});

    // Update highlights without re-rendering the entire component
    useEffect(() => {
        console.log('Highlight effect triggered:', highlightLines);

        // Remove all previous highlights
        Object.values(highlightRefs.current).forEach(el => {
            if (el) el.classList.remove('highlight-line');
        });

        // Add new highlights
        highlightLines.forEach(lineNum => {
            const el = highlightRefs.current[lineNum];
            if (el) {
                console.log('Highlighting line:', lineNum);
                el.classList.add('highlight-line');
            } else {
                console.log('Element not found for line:', lineNum);
            }
        });
    }, [highlightLines]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const getLanguageForPrism = (lang) => {
        const langMap = {
            'typescript': 'typescript',
            'javascript': 'javascript',
            'python': 'python'
        };
        return langMap[lang] || 'javascript';
    };

    return (
        <div className="code-display">
            <div className="code-header">
                <div className="code-filename">{filename}</div>
                <div className="code-actions">
                    <button className="copy-btn" onClick={handleCopy}>
                        {copied ? <FiCheck /> : <FiCopy />}
                    </button>
                </div>
            </div>
            <div className="code-content">
                <Highlight
                    theme={themes.nightOwl}
                    code={code}
                    language={getLanguageForPrism(language)}
                >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={{ ...style, background: 'transparent' }}>
                            {tokens.map((line, i) => {
                                const lineNumber = i + 1;
                                const lineProps = getLineProps({ line, key: i });

                                return (
                                    <div
                                        key={i}
                                        {...lineProps}
                                        ref={el => highlightRefs.current[lineNumber] = el}
                                        className={`code-line ${lineProps.className || ''}`}
                                    >
                                        <span className="line-number">{lineNumber}</span>
                                        <span className="line-content">
                                            {line.map((token, key) => (
                                                <span key={key} {...getTokenProps({ token, key })} />
                                            ))}
                                        </span>
                                    </div>
                                );
                            })}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
});

CodeDisplay.displayName = 'CodeDisplay';

export default CodeDisplay;
