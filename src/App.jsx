import React, { useState } from 'react';
import StepNavigation from './components/StepNavigation';
import CategoryTabs from './components/CategoryTabs';
import LanguageSelector from './components/LanguageSelector';
import LeftPanel from './components/LeftPanel';
import CodeDisplay from './components/CodeDisplay';
import { codeSnippets } from './config/codeContent';
import { highlightRanges } from './config/highlightMappings';
import { stepDescriptions } from './config/stepContent';
import './App.css';

function App() {
    const [activeStep, setActiveStep] = useState('streams');
    const [activeCategory, setActiveCategory] = useState('api-streams');
    const [activeLanguage, setActiveLanguage] = useState('typescript');

    // Get current code snippet
    const currentCode = codeSnippets[activeCategory]?.[activeLanguage] || '// No code available';

    // Get highlight lines for current step and category
    // Always create a new array to ensure React detects changes
    const highlightLines = React.useMemo(() => {
        const lines = highlightRanges[activeCategory]?.[activeStep];
        return lines ? [...lines] : [];
    }, [activeCategory, activeStep]);

    // Get step content for left panel
    const stepContent = stepDescriptions[activeStep] || {};

    // Generate filename based on category and language
    const getFilename = () => {
        const categoryName = activeCategory.replace('-', '-');
        const extensions = {
            typescript: '.ts',
            python: '.py',
            javascript: '.js'
        };
        return `${categoryName}${extensions[activeLanguage]}`;
    };

    return (
        <div className="app">
            <StepNavigation activeStep={activeStep} onStepChange={setActiveStep} />

            <div className="app-content">
                <div className="content-body">
                    <LeftPanel stepContent={stepContent} />

                    <div className="code-section">
                        <div className="code-header-controls">
                            <CategoryTabs
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                                activeStep={activeStep}
                            />
                            <LanguageSelector
                                activeLanguage={activeLanguage}
                                onLanguageChange={setActiveLanguage}
                            />
                        </div>

                        <CodeDisplay
                            code={currentCode}
                            language={activeLanguage}
                            highlightLines={highlightLines}
                            filename={getFilename()}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
