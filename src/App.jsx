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
    const [activeStep, setActiveStep] = useState('trigger');
    const [activeCategory, setActiveCategory] = useState('api-streams');
    const [activeLanguage, setActiveLanguage] = useState('typescript');

    // Get current code snippet - same code for all steps, only depends on category and language
    const currentCode = React.useMemo(() => {
        // Ensure we have valid category and language
        if (!activeCategory || !activeLanguage) {
            return '// No code available';
        }
        
        // Get the code for the specific category and language
        const categoryData = codeSnippets[activeCategory];
        if (!categoryData) {
            console.error(`Category "${activeCategory}" not found. Available:`, Object.keys(codeSnippets));
            return '// No code available';
        }
        
        const code = categoryData[activeLanguage];
        if (!code) {
            console.error(`Language "${activeLanguage}" not found for category "${activeCategory}". Available:`, Object.keys(categoryData));
            return '// No code available';
        }
        
        return code;
    }, [activeCategory, activeLanguage]);

    // Get highlight lines for current step, category, and language
    // Always create a new array to ensure React detects changes
    const highlightLines = React.useMemo(() => {
        const stepHighlights = highlightRanges[activeCategory]?.[activeStep];
        const lines = stepHighlights?.[activeLanguage];
        return lines ? [...lines] : [];
    }, [activeCategory, activeStep, activeLanguage]);

    // Get step content for left panel
    const stepContent = stepDescriptions[activeStep] || {};

    // Generate filename based on category and language
    const getFilename = () => {
        // Map category to base filename
        const categoryMap = {
            'api-streams': 'api.step',
            'event-streams': 'event.step',
            'cron-streams': 'cron.step'
        };
        const baseName = categoryMap[activeCategory] || 'step';
        const extensions = {
            typescript: '.ts',
            python: '.py',
            javascript: '.js'
        };
        return `${baseName}${extensions[activeLanguage]}`;
    };

    return (
        <div className="step-app">
            <StepNavigation activeStep={activeStep} onStepChange={setActiveStep} />

            <div className="step-app-content">
                <div className="step-content-body">
                    <LeftPanel stepContent={stepContent} />

                    <div className="step-code-section">
                        <div className="step-code-header-controls">
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
                            key={`${activeCategory}-${activeLanguage}`}
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
